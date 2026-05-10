import { CreateRopeColor } from '../../../helpers/rope_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateRopeColor();

DefineAsset({
	name: 'Crotch Jute Rope Wand',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		wand: {
			name: 'Wand',
			default: '#F2EEEE',
		},
		handle: {
			name: 'Handle',
			default: '#FEFCFC',
		},
		...baseColorization
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
		],
		requires: [
			'!Penis',
		],
	},
	roomDeployment: {
		autoDeployRelativePosition: [-75, -40, 0],
	},
	// size:260, y:560, centered
	preview: null,//'preview.png',
	modules: {
		...baseModules,
		attachment: {
			type: 'typed',
			name: 'Attachment',
			variants: [
				{
					id: 'hips',
					name: 'Hips',
				},
				{
					id: 'thighs',
					name: 'Thighs',
					default: true,
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
				part: 'Wand',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Rope',
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
