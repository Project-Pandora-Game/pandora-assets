import { readFileSync, writeFileSync } from 'fs';
import { CanonizePointTemplate, GetLogger, ModuleNameSchema, PointTemplate, PointTemplateSchema, SCHEME_OVERRIDE } from 'pandora-common';
import { join, relative } from 'path';
import { SRC_DIR, TRY_AUTOCORRECT_WARNINGS } from '../constants.js';
import { GraphicsDatabase } from '../tools/graphicsDatabase.js';
import { WatchFile } from '../tools/watch.js';

const templateList: string[] = [
	'static',
	'body',
	'body_soles_back',
	'breast_toy',
	'breasts',
	'handheld',
	'skirt_short',
	'skirt_long',
	// Custom templates
	'custom_arm_restraints_armbinder_glove',
	'custom_arm_restraints_straight_jacket_straps', // Based on body, small edits
	'custom_arm_restraints_torso_ropes', // Based on body, small edits
	'custom_body_nipples',
	'custom_dresses_latex_dress_breasts',
	'custom_dresses_nightgown',
	'custom_foot_restraints_duct_tape',
	'custom_foot_restraints_leg_ropes',
	'custom_tops_jeans_jacket_breasts',
	'custom_tops_leather_jacket_breasts',
];

export function LoadTemplates() {
	for (const templateName of templateList) {
		const template = LoadTemplate(templateName);
		GraphicsDatabase.registerPointTemplate(templateName, template);
	}
}

export function LoadTemplate(name: string): PointTemplate {
	const logger = GetLogger('TemplateValidation');

	const path = join(SRC_DIR, 'templates', `${name}.json`);
	const usrPath = relative(SRC_DIR, path);

	WatchFile(path);

	const rawTemplate = readFileSync(path, { encoding: 'utf-8' });

	const template: unknown = JSON.parse(
		rawTemplate
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	);

	ModuleNameSchema[SCHEME_OVERRIDE]((_module, ctx) => {
		ctx.addIssue({
			code: 'custom',
			message: `Modules are not allowed for templates`,
		});
	});

	const parseResult = PointTemplateSchema.safeParse(template);
	if (!parseResult.success) {
		logger.error(`Template in '${usrPath}' is not PointTemplateSchema:\n`, parseResult.error.toString());
		throw new Error(`Graphics in '${usrPath}' is not PointTemplateSchema`);
	}

	const canonizedExport = JSON.stringify(CanonizePointTemplate(parseResult.data), undefined, '\t').trim() + '\n';
	if (canonizedExport !== rawTemplate) {
		logger.warning(`Template in '${usrPath}' is not in its canonic form. Please use editor to correct this.`);
		if (TRY_AUTOCORRECT_WARNINGS) {
			writeFileSync(path, canonizedExport, { encoding: 'utf-8' });
			logger.info('The above warning has been auto-corrected; re-run to check if successful.');
		}
	}

	return parseResult.data;
}
