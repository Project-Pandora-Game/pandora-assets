// TODO: Re-add `import type` after ESLint gets fixed
import { Immutable } from 'immer';
import { BoneDefinitionCompressed, BoneNameSchema, BoneType, CoordinatesCompressed, IsNotNullable, SCHEME_OVERRIDE, type InversePosingHandle } from 'pandora-common';

const boneDefinitionImpl = {
	arm_l: {
		pos: [578, 432],
		mirror: 'arm_r',
		type: 'pose',
	},
	elbow_l: {
		pos: [728, 434],
		mirror: 'elbow_r',
		parent: 'arm_l',
		type: 'pose',
	},
	leg_l: {
		pos: [521, 735],
		uiPositionOffset: [24, -28],
		mirror: 'leg_r',
		baseRotation: 90,
		type: 'pose',
	},
	arm_width: { type: 'body' },
	leg_width: { type: 'body' },
	breasts: { type: 'body' },
	waist: { type: 'body' },
	hips: { type: 'body' },
	tiptoeing: { type: 'pose' },
	character_rotation: {
		baseRotation: -90,
		type: 'pose',
	},
} as const satisfies Immutable<Record<string, BoneDefinitionCompressed>>;

/** Handles for inverse kinematic posing of the character. */
export const InversePosingHandles: Immutable<(Omit<InversePosingHandle, 'parentBone'> & { parentBone: AllBones; })[]> = [
	{
		parentBone: 'elbow_l',
		style: 'hand-left',
		x: 875,
		y: 434,
	},
	{
		parentBone: 'elbow_r',
		style: 'hand-right',
		x: 125,
		y: 434,
	},
	{
		parentBone: 'leg_l',
		style: 'left-right',
		x: 545,
		y: 1250,
		transforms: [
			{ type: 'const-shift', value: { x: 0, y: -140 }, condition: [{ legs: 'sitting' }] },
			{ type: 'const-shift', value: { x: 0, y: -300 }, condition: [{ legs: 'kneeling' }, { view: 'front' }] },
			{ type: 'const-shift', value: { x: 0, y: -185 }, condition: [{ legs: 'kneeling' }, { view: 'back' }] },
		],
	},
	{
		parentBone: 'leg_r',
		style: 'left-right',
		x: 455,
		y: 1250,
		transforms: [
			{ type: 'const-shift', value: { x: 0, y: -140 }, condition: [{ legs: 'sitting' }] },
			{ type: 'const-shift', value: { x: 0, y: -300 }, condition: [{ legs: 'kneeling' }, { view: 'front' }] },
			{ type: 'const-shift', value: { x: 0, y: -185 }, condition: [{ legs: 'kneeling' }, { view: 'back' }] },
		],
	},
];

type Key = keyof typeof boneDefinitionImpl;

type Mirrored<Bone extends Key> = Bone extends `${infer M}_l` ? `${M}_r` : never;

type BoneDefinitionCompressedStrict = {
	pos?: Readonly<CoordinatesCompressed>;
	mirror?: Mirrored<Key>;
	parent?: Key;
	baseRotation?: number;
	type: BoneType;
};

export const boneDefinition = boneDefinitionImpl as Record<Key, BoneDefinitionCompressedStrict> as Record<Key, BoneDefinitionCompressed>;

export type AllBones = Key | ((typeof boneDefinitionImpl)[Key] & { mirror: Mirrored<Key>; })['mirror'];

export function LoadBoneNameValidation() {
	const bones: readonly string[] = Object.keys(boneDefinition)
		.concat(Object
			.values(boneDefinition)
			.filter((v) => v.mirror)
			.map((v) => v.mirror)
			.filter(IsNotNullable));

	BoneNameSchema[SCHEME_OVERRIDE]((bone, ctx) => {
		if (!bones.includes(bone)) {
			ctx.addIssue({
				code: 'custom',
				message: `Bone '${bone}' is not a valid bone name`,
			});
		}
	});
}
