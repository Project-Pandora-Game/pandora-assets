type RectangleCompressed = import('pandora-common').RectangleCompressed;
type CoordinatesCompressed = import('pandora-common').CoordinatesCompressed;
type ConditionCompressed = import('pandora-common').ConditionCompressed;
type LayerPriority = import('pandora-common').LayerPriority;
type PointDefinitionCompressed = import('pandora-common').PointDefinitionCompressed;
type LayerImageOverrideCompressed = import('pandora-common').LayerImageOverrideCompressed;
type LayerMirror = import('pandora-common').LayerMirror;
type AllBones = import('./bones').AllBones;

type Resource = import('./tools/resources').Resource;

interface IntermediateAssetDefinition {
	id?: string;
	name: string;
	layers?: IntermediateLayerDefinition[];
}

type IntermediateTransformDefinition =
	['rotate', AllBones, number, ConditionCompressed?] |
	['shift', AllBones, CoordinatesCompressed, ConditionCompressed?];

interface IntermediatePointDefinition {
	pos: CoordinatesCompressed;
	transforms?: IntermediateTransformDefinition[];
	mirror?: true;
	pointType?: string;
}

type IntermediateLayerImageOverride = [Resource, LayerImageOverrideCompressed[1]];

interface IntermediateLayerDefinition {
	rect: RectangleCompressed;
	image: Resource;
	priority: LayerPriority;
	points: IntermediatePointDefinition[] | string;
	imageOverrides?: IntermediateLayerImageOverride[];
	pointType?: string[];
	mirror: LayerMirror;
}
