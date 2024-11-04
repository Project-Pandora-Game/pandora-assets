import { Immutable } from 'immer';
import { AssetGraphicsDefinition, AssetId, AssetsGraphicsDefinitionFile, GetLogger, PointTemplate } from 'pandora-common';
import { GENERATE_AVIF } from '../constants.js';
import { AVIF_SUFFIX } from './resources.js';

const logger = GetLogger('GraphicsDatabase');

export const GraphicsDatabase = new class GraphicsDatabase {
	private assets: Map<AssetId, AssetGraphicsDefinition> = new Map();
	private _templates: Map<string, PointTemplate> = new Map();

	public get templates(): ReadonlyMap<string, Immutable<PointTemplate>> {
		return this._templates;
	}

	public registerAsset(id: AssetId, asset: AssetGraphicsDefinition, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		this.assets.set(id, asset);
		logger.debug('Registered asset graphics', id);
	}

	public registerPointTemplate(name: string, template: PointTemplate): void {
		if (this._templates.has(name)) {
			throw new Error(`Duplicate template definition, template '${name}' already exists`);
		}

		this._templates.set(name, template);
		logger.debug('Registered point template', name);
	}

	public getPointTemplate(name: string): Immutable<PointTemplate> | undefined {
		return this._templates.get(name);
	}

	public hasPointTemplate(name: string): boolean {
		return this._templates.has(name);
	}

	public export(): AssetsGraphicsDefinitionFile {
		const pointTemplates: Record<string, PointTemplate> = {};
		for (const [name, template] of this._templates.entries()) {
			pointTemplates[name] = template;
		}
		const assets: Record<AssetId, AssetGraphicsDefinition> = {};
		for (const [id, graphics] of this.assets.entries()) {
			assets[id] = graphics;
		}
		const imageFormats: AssetsGraphicsDefinitionFile['imageFormats'] = {};
		if (GENERATE_AVIF) {
			imageFormats.avif = AVIF_SUFFIX;
		}
		return {
			assets,
			pointTemplates,
			imageFormats,
		};
	}

	public clear(): void {
		this.assets.clear();
		this._templates.clear();
	}
};
