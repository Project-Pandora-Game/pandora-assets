// TODO: Re-add `import type` after ESLint gets fixed
import { BoneDefinitionCompressed, BoneType, CoordinatesCompressed } from 'pandora-common';

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
		pos: [533, 707],
		mirror: 'leg_r',
		baseRotation: 90,
		type: 'pose',
	},
	arm_width: { type: 'body' },
	leg_width: { type: 'body' },
	breasts: { type: 'body' },
	waist: { type: 'body' },
	hips: { type: 'body' },
	kneeling: { type: 'pose' },
	sitting: { type: 'pose' },
	tiptoeing: { type: 'pose' },
} as const;

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
