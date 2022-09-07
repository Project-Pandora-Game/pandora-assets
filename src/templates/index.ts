import { PointTemplate, PointTemplateSchema, ZodMatcher } from 'pandora-common';
import { join } from 'path';
import { readFileSync } from 'fs';
import { SRC_DIR } from '../constants';
import { GraphicsDatabase } from '../tools/graphicsDatabase';

const templateList: string[] = [
	'static',
	'body',
	'breasts',
	'shirt',
];

const IsPointTemplate = ZodMatcher(PointTemplateSchema);

export function LoadTemplates() {
	for (const templateName of templateList) {
		const template = LoadTemplate(templateName);
		GraphicsDatabase.registerPointTemplate(templateName, template);
	}
}

export function LoadTemplate(name: string): PointTemplate {
	const path = join(SRC_DIR, 'templates', `${name}.json`);

	const template = JSON.parse(
		readFileSync(path, { encoding: 'utf-8' })
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	) as PointTemplate;

	if (!IsPointTemplate(template)) {
		throw new Error(`Template in '${path}' is not PointTemplate`);
	}

	return template;
}
