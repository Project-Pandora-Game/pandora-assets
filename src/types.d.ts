type RectangleCompressed = import('pandora-common').RectangleCompressed;
type CoordinatesCompressed = import('pandora-common').CoordinatesCompressed;
type ConditionCompressed = import('pandora-common').ConditionCompressed;
type LayerPriority = import('pandora-common').LayerPriority;
type PointDefinitionCompressed = import('pandora-common').PointDefinitionCompressed;
type LayerImageOverrideCompressed = import('pandora-common').LayerImageOverrideCompressed;
type LayerMirror = import('pandora-common').LayerMirror;
type AllBones = import('./bones').AllBones;

interface IntermediateAssetDefinition {
	id?: string;
	name: string;
	bodypart?: import('./bodyparts').BodypartName
	graphics?: string;
}
