// TODO: Re-add `import type` after ESLint gets fixed
import { Immutable } from 'immer';
import { BoneDefinitionCompressed, BoneNameSchema, BoneType, CoordinatesCompressed, IsNotNullable, SCHEME_OVERRIDE } from 'pandora-common';
import { ZodIssueCode } from 'zod';

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
				code: ZodIssueCode.custom,
				message: `Bone '${bone}' is not a valid bone name`,
			});
		}
	});
}
