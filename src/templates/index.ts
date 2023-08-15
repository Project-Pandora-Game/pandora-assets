import { GetLogger, ModuleNameSchema, PointTemplate, PointTemplateSchema, SCHEME_OVERRIDE } from 'pandora-common';
import { join } from 'path';
import { readFileSync } from 'fs';
import { SRC_DIR } from '../constants';
import { GraphicsDatabase } from '../tools/graphicsDatabase';
import { WatchFile } from '../tools/watch';

const templateList: string[] = [
	'static',
	'bra',
	'body',
	'breast_toy',
	'breasts',
	'handheld',
	'horizontal_limbs_width',
	'shirt',
	'skirt_short',
	'skirt_long',
];

export function LoadTemplates() {
	for (const templateName of templateList) {
		const template = LoadTemplate(templateName);
		GraphicsDatabase.registerPointTemplate(templateName, template);
	}
}

export function LoadTemplate(name: string): PointTemplate {
	const path = join(SRC_DIR, 'templates', `${name}.json`);

	WatchFile(path);

	const template = JSON.parse(
		readFileSync(path, { encoding: 'utf-8' })
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	) as PointTemplate;

	ModuleNameSchema[SCHEME_OVERRIDE]((_module, ctx) => {
		ctx.addIssue({
			code: 'custom',
			message: `Modules are not allowed for templates`,
		});
	});

	const parseResult = PointTemplateSchema.safeParse(template);
	if (!parseResult.success) {
		GetLogger('TemplateValidation').error(
			`Template in '${path}' is not PointTemplateSchema:\n`,
			parseResult.error.toString(),
		);
		throw new Error(`Graphics in '${path}' is not PointTemplateSchema`);
	}

	return parseResult.data;
}
