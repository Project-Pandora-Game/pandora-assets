import { produce } from 'immer';

const bodypart = DefineBodypart({
	name: 'Devil Wings',
	bodypart: 'wings',
	graphics: 'graphics.json',
	colorization: {
		bonesColor: {
			name: 'Bones',
			default: '#2c2c2cff',
		},
		skinColor: {
			name: 'Skin',
			default: '#ff0000ff',
			minAlpha: 0,
		},
	},
	attributes: {
		provides: [
			'Fantasy',
		],
	},
	modules: {
		wingsState: {
			type: 'typed',
			name: 'Wings State',
			expression: 'Wings State',
			variants: [
				{
					id: 'folded',
					name: 'Folded',
					default: true,
				},
				{
					id: 'spread',
					name: 'Spread',
				},
				{
					id: 'raised',
					name: 'Raised',
				},
			],
		},
		visibility: {
			type: 'typed',
			name: 'Wings Visibilty',
			expression: 'Wings Visibilty',
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
		attachmentPoint: {
			type: 'typed',
			name: 'Attachment Point',
			variants: [
				{
					id: 'back',
					name: 'Back',
					default: true,
				},
				{
					id: 'hips',
					name: 'Hips',
				},

			],
		},
		worn_l: {
			type: 'typed',
			name: 'Left wing',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		worn_r: {
			type: 'typed',
			name: 'Right wing',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
	},
	// size:890, y:12, centered
	preview: 'preview.png',
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
				part: 'Base model',
				source: 'https://skfb.ly/pBRQJ',
				copyrightHolder: 'not_karunya0071',
				editedBy: 'Nikky',
				license: 'CC BY',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/wings_devil/faux',
	name: 'Faux Devil Wings',
	graphics: 'graphics.json',
	size: 'small',
	modules: produce(bodypart.modules!, (d) => {
		// Do not define expressions on modules on non-bodypart
		for (const module of Object.values(d)) {
			delete module.expression;
		}
	}),
});
