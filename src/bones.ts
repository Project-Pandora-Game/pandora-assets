/* eslint-disable @typescript-eslint/naming-convention */ // _r _l
import type { BoneDefinitionCompressed, CoordinatesCompressed } from 'pandora-common';

const boneDefinitionImpl = {
	arm_r: {
		pos: [578, 432],
		mirror: 'arm_l',
	},
	elbow_r: {
		pos: [728, 434],
		mirror: 'elbow_l',
		parent: 'arm_r',
	},
	leg_r: {
		pos: [533, 707],
		mirror: 'leg_l',
		baseRotation: 90,
	},
	arm_width: {},
	leg_width: {},
	breasts: {},
	waist: {},
	hips: {},
	kneeling: {},
	sitting: {},
	tiptoeing: {},
} as const;

type Key = keyof typeof boneDefinitionImpl;

type Mirrored<Bone extends Key> = Bone extends `${infer M}_r` ? `${M}_l` : never;

type BoneDefinitionCompressedStrict = {
	pos?: Readonly<CoordinatesCompressed>;
	mirror?: Mirrored<Key>;
	parent?: Key;
	baseRotation?: number;
};

export const boneDefinition = boneDefinitionImpl as Record<Key, BoneDefinitionCompressedStrict> as Record<Key, BoneDefinitionCompressed>;

export type AllBones = Key | ((typeof boneDefinitionImpl)[Key] & { mirror: Mirrored<Key>; })['mirror'];
