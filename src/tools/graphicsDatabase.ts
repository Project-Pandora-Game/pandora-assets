import { Immutable } from 'immer';
import { AssetGraphicsDefinition, AssetId, GetLogger, PointTemplate, type AssetSourceGraphicsInfo, type GraphicsDefinitionFile, type GraphicsSourceDefinitionFile } from 'pandora-common';
import { GENERATE_AVIF } from '../constants.ts';
import { AVIF_SUFFIX } from './resources.ts';

const logger = GetLogger('GraphicsDatabase');

export const GraphicsDatabase = new class GraphicsDatabase {
	private assets: Map<AssetId, {
		graphics: Immutable<AssetGraphicsDefinition>;
		graphicsSource: Immutable<AssetSourceGraphicsInfo>;
	}> = new Map();
	private _templates: Map<string, PointTemplate> = new Map();

	public get templates(): ReadonlyMap<string, Immutable<PointTemplate>> {
		return this._templates;
	}

	public registerAssetGraphics(
		id: AssetId,
		graphics: Immutable<AssetGraphicsDefinition>,
		graphicsSource: Immutable<AssetSourceGraphicsInfo>,
	): void {
		if (this.assets.has(id)) {
			throw new Error(`Duplicate asset definition, asset graphics '${id}' already exists`);
		}

		this.assets.set(id, { graphics, graphicsSource });
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

	public export(): Immutable<GraphicsDefinitionFile> {
		const pointTemplates: Record<string, PointTemplate> = {};
		for (const [name, template] of this._templates.entries()) {
			pointTemplates[name] = template;
		}
		const assets: Record<AssetId, Immutable<AssetGraphicsDefinition>> = {};
		for (const [id, data] of this.assets.entries()) {
			assets[id] = data.graphics;
		}
		const imageFormats: GraphicsDefinitionFile['imageFormats'] = {};
		if (GENERATE_AVIF) {
			imageFormats.avif = AVIF_SUFFIX;
		}
		return {
			assets,
			pointTemplates,
			imageFormats,
		};
	}

	public exportSource(): Immutable<GraphicsSourceDefinitionFile> {
		const pointTemplates: Record<string, PointTemplate> = {};
		for (const [name, template] of this._templates.entries()) {
			pointTemplates[name] = template;
		}
		const assets: Record<AssetId, Immutable<AssetSourceGraphicsInfo>> = {};
		for (const [id, data] of this.assets.entries()) {
			assets[id] = data.graphicsSource;
		}
		return {
			assets,
			pointTemplates,
		};
	}

	public clear(): void {
		this.assets.clear();
		this._templates.clear();
	}
};
