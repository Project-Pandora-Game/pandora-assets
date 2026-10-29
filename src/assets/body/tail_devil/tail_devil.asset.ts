import { produce } from 'immer';

const bodypart = DefineBodypart({
	name: 'Devil Tail',
	bodypart: 'tail',
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#000000',
		},
		piercing: {
			name: 'Piercing',
			default: '#FFD700',
		},
	},
	// size:392, y:276, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
			'Fantasy_tail',
		],
	},
	modules: {
		pose: {
			type: 'typed',
			name: 'Pose',
			expression: 'Tail Pose',
			variants: [
				{
					id: 'down',
					name: 'Down',
					default: true,
				},
				{
					id: 'downKneeling',
					name: 'Down Kneeling',
				},
				{
					id: 'wrappingLeftLeg',
					name: 'Wrapping Left Leg',
				},
				{
					id: 'wrappingRightLeg',
					name: 'Wrapping Right Leg',
				},
				{
					id: 'coverGenitals',
					name: 'Cover Genitals',
				},
				{
					id: 'overLeftShoulder',
					name: 'Over Left Shoulder',
				},
				{
					id: 'overRightShoulder',
					name: 'Over Right Shoulder',
				},
				{
					id: 'up',
					name: 'Up',
				},
			],
		},
		layering: {
			type: 'typed',
			name: 'Layering',
			expression: 'Layering',
			variants: [
				{
					id: 'aboveBody',
					name: 'Above Body',
					default: true,
				},
				{
					id: 'aboveEverything',
					name: 'Above Everything',
				},
			],
		},
		visibility: {
			type: 'typed',
			name: 'Visibilty',
			expression: 'Visibilty',
			variants: [
				{
					id: 'visible',
					name: 'Visible',
					default: true,
				},
				{
					id: 'hidden',
					name: 'Hidden',
				},

			],
		},
		tip: {
			type: 'typed',
			name: 'Tip',
			variants: [
				{
					id: 'arrow',
					name: 'Arrow',
					default: true,
				},
				{
					id: 'heart',
					name: 'Heart',
				},
			],
		},
		piercing: {
			type: 'typed',
			name: 'Piercing',
			expression: 'Piercing',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Nikky90506 <122885812+Nikky90506@users.noreply.github.com>',
		credits: ['Nikky'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'Nikky',
				editedBy: 'Nikky',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Base tail model',
				source: 'https://skfb.ly/pKByN',
				copyrightHolder: 'SAB64',
				editedBy: 'Nikky',
				license: 'CC BY',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/tail_devil/faux',
	name: 'Faux Devil Tail',
	size: 'small',
	modules: produce(bodypart.modules!, (d) => {
		// Do not define expressions on modules on non-bodypart
		for (const module of Object.values(d)) {
			delete module.expression;
		}
	}),
});
