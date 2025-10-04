import { Immutable } from 'immer';
import { AssetGraphicsDefinition, AssetId, GetLogger, PointTemplate, type AssetSourceGraphicsInfo, type GraphicsDefinitionFile, type GraphicsSourceDefinitionFile, type PointTemplateSource } from 'pandora-common';
import { InversePosingHandles } from '../bones.ts';
import { GENERATE_AVIF } from '../config.ts';
import { AVIF_SUFFIX } from './resources.ts';

const logger = GetLogger('GraphicsDatabase');

export const GraphicsDatabase = new class GraphicsDatabase {
	private assets: Map<AssetId, {
		graphics: Immutable<AssetGraphicsDefinition>;
		graphicsSource: Immutable<AssetSourceGraphicsInfo> | null;
	}> = new Map();
	private _templates: Map<string, Immutable<PointTemplateSource>> = new Map();

	public registerAssetGraphics(
		id: AssetId,
		graphics: Immutable<AssetGraphicsDefinition>,
		graphicsSource: Immutable<AssetSourceGraphicsInfo> | null,
	): void {
		if (this.assets.has(id)) {
			throw new Error(`Duplicate asset definition, asset graphics '${id}' already exists`);
		}

		this.assets.set(id, { graphics, graphicsSource });
		logger.debug('Registered asset graphics', id);
	}

	public registerPointTemplate(name: string, template: Immutable<PointTemplateSource>): void {
		if (this._templates.has(name)) {
			throw new Error(`Duplicate template definition, template '${name}' already exists`);
		}

		this._templates.set(name, template);
		logger.debug('Registered point template', name);
	}

	public getPointTemplate(name: string): Immutable<PointTemplateSource> | undefined {
		return this._templates.get(name);
	}

	public hasPointTemplate(name: string): boolean {
		return this._templates.has(name);
	}

	public export(): Immutable<GraphicsDefinitionFile> {
		const pointTemplates: Record<string, Immutable<PointTemplate>> = {};
		for (const [name, template] of this._templates.entries()) {
			pointTemplates[name] = template.points;
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
			inversePosingHandles: InversePosingHandles,
		};
	}

	public exportSource(): Immutable<GraphicsSourceDefinitionFile> {
		const pointTemplates: Record<string, Immutable<PointTemplateSource>> = {};
		for (const [name, template] of this._templates.entries()) {
			pointTemplates[name] = template;
		}
		const assets: Record<AssetId, Immutable<AssetSourceGraphicsInfo>> = {};
		for (const [id, data] of this.assets.entries()) {
			if (data.graphicsSource !== null) {
				assets[id] = data.graphicsSource;
			}
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
