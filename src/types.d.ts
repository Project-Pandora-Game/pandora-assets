type RectangleCompressed = import('pandora-common').RectangleCompressed;
type LayerPriority = import('pandora-common').LayerPriority;
type PointDefinitionCompressed = import('pandora-common').PointDefinitionCompressed;
type LayerImageOverrideCompressed = import('pandora-common').LayerImageOverrideCompressed;
type LayerMirror = import('pandora-common').LayerMirror;

type Resource = import('./tools/resources').Resource;

interface IntermediateAssetDefinition {
	id?: string;
	name: string;
	layers?: IntermediateLayerDefinition[];
}

type IntermediateLayerImageOverride = [Resource, LayerImageOverrideCompressed[1]];

interface IntermediateLayerDefinition {
	rect: RectangleCompressed;
	image: Resource;
	priority: LayerPriority;
	points: PointDefinitionCompressed[] | string;
	imageOverrides?: IntermediateLayerImageOverride[];
	pointType?: string[];
	mirror: LayerMirror;
}
