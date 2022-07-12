import { GetLogger, AssetId, AssetGraphicsDefinition, PointTemplate, AssetsGraphicsDefinitionFile } from 'pandora-common';

const logger = GetLogger('GraphicsDatabase');

export const GraphicsDatabase = new class GraphicsDatabase {
	private assets: Map<AssetId, AssetGraphicsDefinition> = new Map();
	private templates: Map<string, PointTemplate> = new Map();

	public registerAsset(id: AssetId, asset: AssetGraphicsDefinition, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		this.assets.set(id, asset);
		logger.debug('Registered asset graphics', id);
	}

	public registerPointTemplate(name: string, template: PointTemplate): void {
		if (this.templates.has(name)) {
			throw new Error(`Duplicate template definition, template '${name}' already exists`);
		}

		this.templates.set(name, template);
		logger.debug('Registered point template', name);
	}

	public hasPointTemplate(name: string): boolean {
		return this.templates.has(name);
	}

	export(): AssetsGraphicsDefinitionFile {
		const pointTemplates: Record<string, PointTemplate> = {};
		for (const [name, template] of this.templates.entries()) {
			pointTemplates[name] = template;
		}
		const assets: Record<AssetId, AssetGraphicsDefinition> = {};
		for (const [id, graphics] of this.assets.entries()) {
			assets[id] = graphics;
		}
		return {
			assets,
			pointTemplates,
		};
	}

	clear(): void {
		this.assets.clear();
		this.templates.clear();
	}
};
