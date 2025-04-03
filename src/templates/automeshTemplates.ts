import type { Immutable } from 'immer';
import { GraphicsSourceAutoMeshTemplate, LayerMirror } from 'pandora-common';

// !!!Important!!!
// For templates with mirroring, the primary side should be LEFT

const AUTOMESH_TEMPLATES_BASE = {
	staticAboveBody: {
		name: 'Static (above body)',
		points: 'static',
		parts: [
			{
				id: 'base',
				priority: 'ABOVE_BODY',
			},
		],
	},
	staticBelowBody: {
		name: 'Static (below body)',
		points: 'static',
		parts: [
			{
				id: 'base',
				priority: 'BELOW_BODY',
			},
		],
	},
	bodyAbove: {
		name: 'Body-like (above body)',
		points: 'body',
		parts: [
			{
				id: 'body',
				priority: 'ABOVE_BODY',
				pointType: ['body', 'body_l', 'body_r', 'bodyarm_l', 'bodyarm_r', 'bodyleg', 'bodyleg_l', 'bodyleg_r'],
			},
			{
				id: 'arms',
				priority: 'ABOVE_ARM_LEFT',
				pointType: ['bodyarm_l', 'arm_l'],
				mirror: LayerMirror.SELECT,
			},
			{
				id: 'legs',
				priority: 'ABOVE_BODY', // TODO: Change me on legs split
				pointType: ['bodyleg', 'bodyleg_l', 'leg_l'],
				mirror: LayerMirror.SELECT,
			},
		],
	},
	bodyBelow: {
		name: 'Body-like (below body)',
		points: 'body',
		parts: [
			{
				id: 'body',
				priority: 'BELOW_BODY',
				pointType: ['body', 'body_l', 'body_r', 'bodyarm_l', 'bodyarm_r', 'bodyleg'],
			},
			{
				id: 'arms',
				priority: 'BELOW_ARM_LEFT',
				pointType: ['bodyarm_l', 'arm_l'],
				mirror: LayerMirror.SELECT,
			},
			{
				id: 'legs',
				priority: 'BELOW_BODY', // TODO: Change me on legs split
				pointType: ['bodyleg', 'bodyleg_l', 'leg_l'],
				mirror: LayerMirror.SELECT,
			},
		],
	},
} as const satisfies Immutable<Record<string, GraphicsSourceAutoMeshTemplate>>;

export const AUTOMESH_TEMPLATES: Immutable<Record<string, GraphicsSourceAutoMeshTemplate>> = AUTOMESH_TEMPLATES_BASE;
