import { readFileSync, writeFileSync } from 'fs';
import { GetLogger, ModuleNameSchema, PointTemplateSourceSchema, SCHEME_OVERRIDE, type PointTemplateSource } from 'pandora-common';
import { join, relative } from 'path';
import { SRC_DIR, TRY_AUTOCORRECT_WARNINGS } from '../config.ts';
import { GraphicsDatabase } from '../tools/graphicsDatabase.ts';
import { TemplateValidate } from '../tools/validation/templates.ts';
import { WatchFile } from '../tools/watch.ts';

const templateList: string[] = [
	'static',
	'body',
	'body_soles_back',
	'body_eyes',
	'body_eyebrows',
	'breast_toy',
	'breasts',
	'handheld',
	'skirt_tight',
	'skirt_short',
	'skirt_long',
	// Custom templates
	'custom_arm_restraints_armbinder_glove',
	'custom_arm_restraints_pet_crawler_armbinders_outwards',
	'custom_arm_restraints_pet_crawler_armbinders_inwards',
	'custom_arm_restraints_straight_jacket_straps', // Based on body, small edits
	'custom_arm_restraints_torso_ropes', // Based on body, small edits
	'custom_body_nipples',
	'custom_dresses_latex_dress_breasts',
	'custom_dresses_nightgown',
	'custom_foot_restraints_duct_tape',
	'custom_tops_jeans_jacket_breasts',
	'custom_tops_leather_jacket_breasts',
];

export function LoadTemplates() {
	for (const templateName of templateList) {
		const template = LoadTemplate(templateName);
		GraphicsDatabase.registerPointTemplate(templateName, template);
	}
}

function LoadTemplate(name: string): PointTemplateSource {
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

	const parseResult = PointTemplateSourceSchema.safeParse(template);
	if (!parseResult.success) {
		logger.error(`Template in '${usrPath}' is not PointTemplateSource:\n`, parseResult.error.toString());
		throw new Error(`Graphics in '${usrPath}' is not PointTemplateSource`);
	}

	const canonizedExport = JSON.stringify(parseResult.data, undefined, '\t').trim() + '\n';
	if (canonizedExport !== rawTemplate) {
		logger.warning(`Template in '${usrPath}' is not in its canonic form. Please use editor to correct this.`);
		if (TRY_AUTOCORRECT_WARNINGS) {
			writeFileSync(path, canonizedExport, { encoding: 'utf-8' });
			logger.info('The above warning has been auto-corrected; re-run to check if successful.');
		}
	}

	TemplateValidate(parseResult.data, logger.prefixMessages(`Template '${usrPath}':\n\t`));

	return parseResult.data;
}
