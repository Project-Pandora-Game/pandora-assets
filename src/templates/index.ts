import { readFileSync } from 'fs';
import { CanonizePointTemplate, GetLogger, ModuleNameSchema, PointTemplate, PointTemplateSchema, SCHEME_OVERRIDE } from 'pandora-common';
import { join, relative } from 'path';
import { SRC_DIR } from '../constants';
import { GraphicsDatabase } from '../tools/graphicsDatabase';
import { WatchFile } from '../tools/watch';

const templateList: string[] = [
	'static',
	'body',
	'body_soles_back',
	'breast_toy',
	'breasts',
	'handheld',
	'horizontal_limbs_width',
	'shirt',
	'shirt_static_breasts',
	'skirt_short',
	'skirt_short_static_breasts',
	'skirt_long',
	'skirt_long_static_breasts',
	// Custom templates
	'custom_latex_dress',
];

export function LoadTemplates() {
	for (const templateName of templateList) {
		const template = LoadTemplate(templateName);
		GraphicsDatabase.registerPointTemplate(templateName, template);
	}
}

export function LoadTemplate(name: string): PointTemplate {
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
		GetLogger('TemplateValidation').error(
			`Template in '${usrPath}' is not PointTemplateSchema:\n`,
			parseResult.error.toString(),
		);
		throw new Error(`Graphics in '${usrPath}' is not PointTemplateSchema`);
	}

	const canonizedExport = JSON.stringify(CanonizePointTemplate(parseResult.data), undefined, '\t').trim() + '\n';
	if (canonizedExport !== rawTemplate) {
		GetLogger('TemplateValidation').warning(
			`Template in '${usrPath}' is not in its canonic form. Please use editor to correct this.`,
		);
	}

	return parseResult.data;
}
