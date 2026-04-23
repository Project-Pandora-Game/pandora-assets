import { CreateRopeColor } from '../../../helpers/rope_base.ts';
const { colorization, modules: baseModules } = CreateRopeColor();

DefineAsset({
	name: 'Crotch Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization,
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
			'Chastity',
		],
	},
	roomDeployment: {
		autoDeployRelativePosition: [-75, -40, 0],
	},
	// size:260, y:560, centered
	preview: 'preview.png',
	modules: {
		...baseModules,
		waist: {
			type: 'typed',
			name: 'Waist',
			variants: [
				{
					id: 'none',
					name: 'No',
					default: true,
				},
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						attributes: {
							provides: [
								'Rope_waist',
							],
						},
					},
				},
			],
		},
		crotch: {
			type: 'typed',
			name: 'Crotch',
			variants: [
				{
					id: 'open',
					name: 'Open',

				},
				{
					id: 'rope',
					name: 'Rope',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Rope_vulva_anchor_point',
							],
						},
						stateFlags: {
							provides: ['free_vulva_rope'],
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Rope_vulva_anchor_point',
							],
						},
					},
				},
			],
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'single',
					name: 'Single',
					properties: {
						stateFlags: {
							requires: {
								free_vulva_rope: 'Hips rope requires vulva rope',
							},
						},
					},
				},
			],
		},
		room_placement: {
			type: 'typed',
			name: 'Room Placement',
			variants: [
				{
					id: 'coiled',
					name: 'Coiled',
				},
				{
					id: 'tangled',
					name: 'Tangled',
					default: true,
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
