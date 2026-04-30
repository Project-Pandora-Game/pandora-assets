import { CreateRopeColor } from '../../../helpers/rope_base.ts';
const { colorization, modules: baseModules } = CreateRopeColor();

DefineAssetAlias('room_devices/jute_rope_pile');

DefineAsset({
	name: 'Jute Rope (handheld)',
	size: 'medium',
	graphics: 'graphics.json',
	colorization,
	roomDeployment: {
		autoDeployRelativePosition: [240, 0, 0],
	},
	// size:300, y:681, X:168
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	modules: {
		...baseModules,
		handUsage_r: {
			type: 'typed',
			name: 'Held in right hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: ['up', 'down'],
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Held in left hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: ['up', 'down'],
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
					default: true,

				},
			],
		},
		end: {
			type: 'typed',
			name: 'Hanging Rope End',
			variants: [
				{
					id: 'yes',
					name: 'Visible',
					default: true,
				},
				{
					id: 'no',
					name: 'Hidden',
				},
			],
		},
		other: {
			type: 'typed',
			name: 'Other Rope End',
			variants: [
				{
					id: 'yes',
					name: 'Visible on the floor',
					default: true,
				},
				{
					id: 'no',
					name: 'Hidden beneath the pile',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'rope style basis',
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
