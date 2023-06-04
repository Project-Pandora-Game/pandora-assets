DefineAsset({
	name: 'Full Hood',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		hood: {
			name: 'Hood',
			default: '#484F57',
		},
		eyeCover: {
			name: 'Eye cover',
			default: '#454A52',
		},
		mouthCover: {
			name: 'Mouth cover',
			default: '#464B53',
		},
		zipper: {
			name: 'Zipper',
			default: '#333333',
		},
	},
	attributes: [
		'Restraint',
		'Headgear',
		'Headgear_hood',
	],
	hides: [
		'Hair',
		'Ears',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
		lockAddons: {
			type: 'lockSlot',
			name: 'Lock for hood covers',
			occupiedEffects: {
				blockModules: [
					'hoodEyeCover',
					'hoodMouthCover',
				],
			},
		},
		hoodEyeCover: {
			type: 'typed',
			name: 'Hood Eye Cover',
			variants: [
				{
					id: 'eye_free',
					name: 'Eyes Uncovered',
					default: true,
				},
				{
					id: 'eye',
					name: 'Eye Cover',
					effects: {
						blind: 10,
					},
					attributes: [
						'Restraint_eyes',
					],
				},
			],
		},
		hoodMouthCover: {
			type: 'typed',
			name: 'Hood Mouth Cover',
			variants: [
				{
					id: 'mouth_free',
					name: 'Mouth Uncovered',
					default: true,
				},
				{
					id: 'mouth',
					name: 'Mouth Cover',
					requirements: ['!Mouth_tongue_out'],
					coverSlots: ['mouth', 'outsideMouthArea'],
					blockSlots: ['mouth'],
					occupySlots: {
						'outsideMouthArea': 1,
					},
				},
				{
					id: 'mouth_plug',
					name: 'Mouth Cover with Plug',
					effects: {
						lipsTouch: 10,
						jawMove: 10,
						tongueRoof: 8,
						mouthBreath: 7,
						throatBreath: 6,
						coherency: 8,
						stimulus: 6,
					},
					attributes: [
						'Restraint_mouth',
					],
					requirements: [
						'Mouth_open_wide',
						'!Mouth_tongue_out',
					],
					coverSlots: ['mouth', 'outsideMouthArea'],
					blockSlots: ['mouth'],
					occupySlots: {
						'mouth': 9,
						'outsideMouthArea': 1,
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pulled a Full Hood over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the head.',
		actionRemove: 'SOURCE_CHARACTER removed the Full Hood from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
