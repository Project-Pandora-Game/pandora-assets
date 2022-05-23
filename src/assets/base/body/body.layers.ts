import { LayerPriority, LayerMirror, CharacterSize, LayerDefinitionCompressed } from 'pandora-common';

const points: PointDefinitionCompressed[] = [
	// Head helpers
	{ pos: [546, 365], mirror: true, pointType: 'body' },
	{ pos: [583, 325], mirror: true, pointType: 'body' },
	{ pos: [557, 187], mirror: true, pointType: 'body' },
	{ pos: [530, 387], mirror: true, pointType: 'body' },
	// Right arm
	{
		pos: [559, 403],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'arm_r', 0.1],
		],
		mirror: true,
		pointType: 'bodyarm',
	},
	{
		pos: [573, 399],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'arm_r', 0.3],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [588, 403],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'arm_r', 0.6],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [601, 405],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'arm_r', 0.8],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [714, 408],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'elbow_r', 0.05, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.1, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [718, 408],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.15, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [728, 408],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.15, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [734, 408],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'elbow_r', 1.08, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [744, 408],
		transforms: [
			['shift', 'arm_width', [0, -4]],
			['rotate', 'elbow_r', 1, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.8, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [876, 408],
		transforms: [
			['shift', 'arm_width', [0, -2]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [938, 365],
		transforms: [
			['shift', 'arm_width', [0, -1]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [999, 408],
		transforms: [
			['shift', 'arm_width', [1, -1]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [999, 462],
		transforms: [
			['shift', 'arm_width', [1, 1]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [938, 514],
		transforms: [
			['shift', 'arm_width', [0, 1]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [876, 462],
		transforms: [
			['shift', 'arm_width', [0, 2]],
			['rotate', 'elbow_r', 1],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [744, 462],
		transforms: [
			['shift', 'arm_width', [0, 4]],
			['rotate', 'elbow_r', 0.8, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 1, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [734, 462],
		transforms: [
			['shift', 'arm_width', [0, 4]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 1.08, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [728, 462],
		transforms: [
			['shift', 'arm_width', [0, 4]],
			['rotate', 'elbow_r', 0.15, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [718, 462],
		transforms: [
			['shift', 'arm_width', [0, 4]],
			['rotate', 'elbow_r', 0.15, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.6, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{
		pos: [714, 462],
		transforms: [
			['shift', 'arm_width', [0, 4]],
			['rotate', 'elbow_r', 0.1, [[['elbow_r', '>', 0]]]],
			['rotate', 'elbow_r', 0.05, [[['elbow_r', '<', 0]]]],
			['rotate', 'arm_r', 1],
		],
		mirror: true,
		pointType: 'arm',
	},
	{ pos: [736, 434], transforms: [['rotate', 'arm_r', 1]], mirror: true, pointType: 'arm' },
	{ pos: [597, 465], transforms: [['rotate', 'arm_r', 0.5]], mirror: true, pointType: 'arm' },
	{ pos: [587, 476], transforms: [['rotate', 'arm_r', 0.2]], mirror: true, pointType: 'bodyarm' },
	{ pos: [578, 432], mirror: true, pointType: 'bodyarm' },
	{ pos: [619, 435], transforms: [['rotate', 'arm_r', 1]], mirror: true, pointType: 'arm' },
	{ pos: [581, 512], transforms: [['rotate', 'arm_r', 0.05]], mirror: true, pointType: 'body' },
	// Left arm mirrored from right
	// Body and legs
	{ pos: [553, 714], transforms: [['shift', 'sitting', [-10, -25]]], mirror: true, pointType: 'body' },
	{
		pos: [602, 676],
		transforms: [
			['shift', 'hips', [8, 0]],
			['shift', 'sitting', [0, -10]],
			['rotate', 'leg_r', 0.2],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [614, 714],
		transforms: [
			['shift', 'hips', [8, 0]],
			['shift', 'hips', [12, 0], [[['hips', '<', 0]]]],
			['shift', 'sitting', [0, -20]],
			['rotate', 'leg_r', 0.5],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [616, 762],
		transforms: [
			['shift', 'leg_width', [6, 0]],
			['shift', 'hips', [2, 0]],
			['shift', 'hips', [16, 0], [[['hips', '<', 0]]]],
			['shift', 'sitting', [0, -40]],
			['rotate', 'leg_r', 0.7],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [582, 954],
		transforms: [
			['shift', 'leg_width', [10, 0]],
			['shift', 'kneeling', [6, 0]],
			['shift', 'sitting', [20, -170]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [585, 1000],
		transforms: [
			['shift', 'leg_width', [10, 0]],
			['shift', 'kneeling', [-7, -2]],
			['shift', 'sitting', [20, -180]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [584, 1339],
		transforms: [
			['shift', 'leg_width', [4, 2]],
			['shift', 'kneeling', [-38, -330]],
			['shift', 'sitting', [15, -135]],
			['shift', 'tiptoeing', [-5, 30]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [507, 1341],
		transforms: [
			['shift', 'leg_width', [0, 2]],
			['shift', 'kneeling', [20, -340]],
			['shift', 'sitting', [10, -135]],
			['shift', 'tiptoeing', [-5, 30]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [519, 957],
		transforms: [
			['shift', 'sitting', [7, -170]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [513, 1002],
		transforms: [
			['shift', 'kneeling', [12, -18]],
			['shift', 'sitting', [15, -180]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [565, 1002],
		transforms: [
			['shift', 'leg_width', [7, 0]],
			['shift', 'sitting', [14, -180]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [539, 1002],
		transforms: [
			['shift', 'leg_width', [4, 0]],
			['shift', 'sitting', [12, -180]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [501, 778],
		transforms: [
			['shift', 'hips', [-1, 0]],
			['shift', 'sitting', [5, -20]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [500, 750],
		transforms: [
			['shift', 'hips', [-1, 0]],
			['shift', 'sitting', [0, 0]],
		],
		mirror: true,
		pointType: 'body',
	},
	{ pos: [500, 630], pointType: 'body' },
	{ pos: [500, 493], pointType: 'body' },
	{ pos: [500, 600], pointType: 'body' },
	{ pos: [563, 558], transforms: [['shift', 'waist', [20, 0]]], mirror: true, pointType: 'body' },
	{ pos: [567, 581], transforms: [['shift', 'waist', [20, 0]]], mirror: true, pointType: 'body' },
	{ pos: [577, 616], transforms: [['shift', 'waist', [12, 0]]], mirror: true, pointType: 'body' },
	{
		pos: [592, 650],
		transforms: [
			['shift', 'waist', [4, 0]],
			['shift', 'hips', [4, 0]],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [501, 1258],
		transforms: [
			['shift', 'leg_width', [0, 2]],
			['shift', 'kneeling', [30, -252]],
			['shift', 'sitting', [12, -135]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [513, 839],
		transforms: [
			['shift', 'sitting', [8, -70]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [600, 1264],
		transforms: [
			['shift', 'leg_width', [5, 0]],
			['shift', 'kneeling', [-38, -263]],
			['shift', 'sitting', [15, -140]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
	{
		pos: [507, 1324],
		transforms: [
			['shift', 'leg_width', [0, 2]],
			['shift', 'kneeling', [20, -323]],
			['shift', 'sitting', [10, -135]],
			['shift', 'tiptoeing', [-5, 30]],
			['rotate', 'leg_r', 1],
		],
		mirror: true,
		pointType: 'body',
	},
];

export const layers: LayerDefinitionCompressed[] = [
	{
		rect: [0, 0, CharacterSize.WIDTH, CharacterSize.HEIGHT],
		image: 'body',
		priority: LayerPriority.BODY,
		points,
		mirror: LayerMirror.NONE,
		pointType: ['body', 'bodyarm'],
	},
	{
		rect: [0, 0, CharacterSize.WIDTH, CharacterSize.HEIGHT],
		image: 'body',
		priority: LayerPriority.ARMS,
		points: 0,
		mirror: LayerMirror.SELECT,
		pointType: ['bodyarm', 'arm'],
		imageOverrides: [
			['body_armsdown', [[['elbow_r', '>=', 10]]]],
			['body_armsup', [[['elbow_r', '<=', -5]]]],
		],
	},
];
