import { DefineRoomBackground } from '../tools/roomDefinition';

const BACKGROUNDS: IntermediateRoomBackgroundDefinition[] = [
	{
		// indoor
		// cozy
		// space: small
		id: 'loft_living_room',
		name: 'Loft living room',
		image: 'loft_living_room.jpg',
		size: [2750, 1837],
		maxY: 720,
		scaling: 1.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/10560297166/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		// water
		// beach
		// space: medium
		id: 'sea_house',
		name: 'Sea house',
		image: 'sea_house.jpg',
		size: [2750, 1837],
		maxY: 530,
		scaling: 1.7,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203979618/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		// outside
		// nature
		// field
		// day
		// space: large
		id: 'wheat_field',
		name: 'Wheat field',
		image: 'wheat_field.jpg',
		size: [2750, 2000],
		maxY: 1400,
		scaling: 1.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/enneafive/29034594946/',
					copyrightHolder: 'Johan Neven',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// forest
		// dirty
		// wet
		// day
		// space: small
		id: 'wet_forest_road',
		name: 'Wet forest road',
		image: 'wet_forest_road.jpg',
		size: [2750, 1937],
		maxY: 950,
		scaling: 1.8,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/enneafive/27031985094/',
					copyrightHolder: 'Johan Neven',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// path
		// day
		// space: small
		id: 'spring_path',
		name: 'Countryside path in spring',
		image: 'spring_path.jpg',
		size: [2750, 1837],
		maxY: 980,
		scaling: 1.7,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/enneafive/26835108092/',
					copyrightHolder: 'Johan Neven',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// field
		// day
		// space: large
		id: 'corn_field',
		name: 'Corn field',
		image: 'corn_field.jpg',
		size: [3050, 2237],
		maxY: 1080,
		scaling: 1.74,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/enneafive/49959217797/',
					copyrightHolder: 'Johan Neven',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// path
		// day
		// space: small
		id: 'walking_path',
		name: 'Countryside walking path',
		image: 'walking_path.jpg',
		size: [2750, 1937],
		maxY: 980,
		scaling: 1.8,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/enneafive/33486478823/',
					copyrightHolder: 'Johan Neven',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// garden
		// day
		// space: large
		id: 'large_garden',
		name: 'Large garden',
		image: 'large_garden.jpg',
		size: [5000, 3600],
		maxY: 1400,
		scaling: 2.0,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/21203533@N00/9487449967',
					copyrightHolder: 'Jim G',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// dungeon
		// cellar
		// day
		// space: medium
		id: 'underground_area',
		name: 'Underground Area',
		image: 'underground_area.jpg',
		size: [4000, 2800],
		maxY: 1180,
		scaling: 1.7,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/9019841@N08/6628953893',
					copyrightHolder: 'fusion-of-horizons',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// forest
		// foggy
		// day
		// space: small
		id: 'foggy_forest',
		name: 'Foggy forest',
		image: 'foggy_forest.jpg',
		size: [4000, 2800],
		maxY: 780,
		scaling: 2.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/scotbot/11341643694/',
					copyrightHolder: 'Scott Wylie',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// nature
		// forest
		// day
		// space: small
		id: 'sunny_forest_clearing',
		name: 'Sunny forest clearing',
		image: 'sunny_forest_clearing.jpg',
		size: [4000, 2800],
		maxY: 1080,
		scaling: 1.9,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/scotbot/14181010173/',
					copyrightHolder: 'Scott Wylie',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// buildings
		// wasteland
		// day
		// space: very large
		id: 'abandoned_wide_space',
		name: 'Abandoned wasteland',
		image: 'abandoned_wide_space.jpg',
		size: [3750, 2667],
		maxY: 1180,
		scaling: 2.4,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/scotbot/14203759230/',
					copyrightHolder: 'Scott Wylie',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// buildings
		// beach
		// water
		// day
		// space: small
		id: 'long_narrow_beach',
		name: 'Long narrow beach',
		image: 'long_narrow_beach.jpg',
		size: [3250, 2237],
		maxY: 680,
		scaling: 2.1,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/21976354@N07/2349726936',
					copyrightHolder: 'NeilsPhotography',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// dungeon
		// cellar
		// night
		// space: medium
		id: 'ritual_dungeon',
		name: 'Ritual dungeon',
		image: 'ritual_dungeon.jpg',
		size: [3250, 2337],
		maxY: 630,
		scaling: 2.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/drainrat/13004886534/',
					copyrightHolder: 'darkday',
					editedBy: 'ClaudiaMia',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// dungeon
		// cellar
		// storage
		// dirty
		// night
		// space: medium
		id: 'storage_cellar',
		name: 'Storage cellar',
		image: 'storage_cellar.jpg',
		size: [4000, 2800],
		maxY: 1180,
		scaling: 1.7,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/91994044@N00/4857969942',
					copyrightHolder: 'Thomas Quine',
					editedBy: 'ClaudiaMia',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// dungeon
		// day
		// space: large
		id: 'sandy_dungeon',
		name: 'Sandy dungeon',
		image: 'sandy_dungeon.jpg',
		size: [4000, 2800],
		maxY: 1080,
		scaling: 2.2,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://commons.wikimedia.org/w/index.php?curid=21338439',
					copyrightHolder: 'Tom Walsh',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// throne
		// day
		// space: small
		id: 'imperial_throne_room',
		name: 'Imperial throne room',
		image: 'imperial_throne_room.jpg',
		size: [3250, 2337],
		maxY: 580,
		scaling: 2.0,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://commons.wikimedia.org/w/index.php?curid=15987770',
					copyrightHolder: 'Rolf Mueller',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// throne
		// day
		// space: medium
		id: 'holy_throne_room',
		name: 'Holy throne room',
		image: 'holy_throne_room.jpg',
		size: [4000, 2800],
		maxY: 650,
		scaling: 2.0,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://commons.wikimedia.org/w/index.php?curid=74598735',
					copyrightHolder: 'Ad Maskens',
					editedBy: 'ClaudiaMia',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// throne
		// day
		// space: medium
		id: 'palace_throne_room',
		name: 'Palace throne room',
		image: 'palace_throne_room.jpg',
		size: [5000, 3500],
		maxY: 860,
		scaling: 2.0,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://commons.wikimedia.org/w/index.php?curid=85611152',
					copyrightHolder: 'Andrew Rabbott',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// outside
		// bar
		// nightclub
		// night
		// space: medium
		id: 'nightclub_back',
		name: 'Nightclub back entrance',
		image: 'nightclub_back.jpg',
		size: [3250, 2337],
		maxY: 760,
		scaling: 1.9,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/183107169@N08/49688046653',
					copyrightHolder: 'Harry Somers',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// casino
		// night
		// space: large
		id: 'casino_lounge',
		name: 'Casino lounge',
		image: 'casino_lounge.jpg',
		size: [3250, 2337],
		maxY: 1160,
		scaling: 1.6,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/65708380@N02/50337917883',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// bar
		// night
		// space: large
		id: 'high_class_bar',
		name: 'High class bar',
		image: 'high_class_bar.jpg',
		size: [3250, 2337],
		maxY: 1110,
		scaling: 1.8,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/65708380@N02/50337917958',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// hallway
		// night
		// space: large
		id: 'white_hallway',
		name: 'White hallway',
		image: 'white_hallway.jpg',
		size: [3250, 2337],
		maxY: 1090,
		scaling: 1.82,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/grantguarino/50338603571/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// hallway
		// night
		// space: large
		id: 'red_hallway',
		name: 'Red hallway',
		image: 'red_hallway.jpg',
		size: [3250, 2337],
		maxY: 990,
		scaling: 2.22,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/grantguarino/50338021443/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// hallway
		// night
		// space: large
		id: 'club_hallway',
		name: 'Club hallway',
		image: 'club_hallway.jpg',
		size: [3250, 2337],
		maxY: 1130,
		scaling: 1.9,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/grantguarino/50338603446/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// lounge
		// shopping
		// chill
		// space: medium
		id: 'shopping_lounge',
		name: 'Shopping lounge',
		image: 'shopping_lounge.jpg',
		size: [3250, 2337],
		maxY: 1090,
		scaling: 1.6,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/grantguarino/50337917313/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// outside
		// street
		// city
		// day
		// space: large
		id: 'city_street_day',
		name: 'City street at day',
		image: 'city_street_day.jpg',
		size: [3250, 2337],
		maxY: 1120,
		scaling: 1.82,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/80824546@N00/5771671718',
					copyrightHolder: 'William Murphy',
					editedBy: 'ClaudiaMia',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// inside
		// bedroom
		// cozy
		// bed
		// night
		// space: small
		id: 'cozy_dim_bed',
		name: 'Cozy dim bed',
		image: 'cozy_dim_bed.jpg',
		size: [2250, 1737],
		maxY: 600,
		scaling: 1.01,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://commons.wikimedia.org/w/index.php?curid=22923794',
					copyrightHolder: 'Jpatokal',
					editedBy: 'ClaudiaMia',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		// outside
		// urban
		// garden
		// home
		// day
		// space: large
		id: 'urban_garden_with_playground',
		name: 'Urban garden with playground',
		image: 'urban_garden_with_playground.jpg',
		size: [3250, 2337],
		maxY: 1120,
		scaling: 1.82,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/51241291135/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// urban
		// garden
		// home
		// pool
		// water
		// day
		// space: medium
		id: 'garden_with_pool',
		name: 'Garden with pool',
		image: 'garden_with_pool.jpg',
		size: [5250, 3337],
		maxY: 1370,
		scaling: 1.82,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52327493069/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// garage
		// home
		// day
		// space: medium
		id: 'large_home_garage',
		name: 'Large home garage',
		image: 'large_home_garage.jpg',
		size: [2650, 1937],
		maxY: 820,
		scaling: 1.68,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/51241288590/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// gym
		// home
		// day
		// space: small
		id: 'personal_gym_room',
		name: 'Personal gym room',
		image: 'personal_gym_room.jpg',
		size: [2450, 1737],
		maxY: 560,
		scaling: 1.58,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52327619390/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// livingroom
		// kennel
		// home
		// day
		// space: medium
		id: 'livingroom_with_kennel',
		name: 'Livingroom with kennel',
		image: 'livingroom_with_kennel.jpg',
		size: [2650, 1937],
		maxY: 820,
		scaling: 1.58,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/51239532092/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// bedroom
		// home
		// day
		// space: small
		id: 'grey_bedroom',
		name: 'Grey bedroom',
		image: 'grey_bedroom.jpg',
		size: [2650, 1937],
		maxY: 760,
		scaling: 0.9,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/51240239311/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// livingroom
		// couch
		// home
		// day
		// space: medium
		id: 'cozy_minimal_livingroom',
		name: 'Cozy minimal livingroom',
		image: 'cozy_minimal_livingroom.jpg',
		size: [2750, 1937],
		maxY: 870,
		scaling: 1.1,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/156466858@N02/52077420480/',
					copyrightHolder: 'bradjavernick',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// livingroom
		// fireplace
		// cozy
		// home
		// day
		// space: medium
		id: 'colorful_livingroom',
		name: 'Colorful livingroom',
		image: 'colorful_livingroom.jpg',
		size: [2650, 1937],
		maxY: 720,
		scaling: 1.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/43213499724/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// bathroom
		// shower
		// toilet
		// day
		// space: small
		id: 'bathroom_with_dressing_room',
		name: 'Bathroom with dressing room',
		image: 'bathroom_with_dressing_room.jpg',
		size: [2450, 1837],
		maxY: 720,
		scaling: 1.8,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52174609523/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// entrance
		// foyer
		// home
		// day
		// space: small
		id: 'entrance_area',
		name: 'Home entrance inside',
		image: 'entrance_area.jpg',
		size: [2450, 1737],
		maxY: 460,
		scaling: 1.58,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52327620075/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// wardrobe
		// day
		// space: small
		id: 'wardrobe_room',
		name: 'Wardrobe room',
		image: 'wardrobe_room.jpg',
		size: [2450, 1837],
		maxY: 320,
		scaling: 1.1,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52327493514/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// outside
		// entrance
		// urban
		// home
		// day
		// space: small
		id: 'home_entrance_outside',
		name: 'Home entrance outside',
		image: 'home_entrance_outside.jpg',
		size: [2450, 1737],
		maxY: 610,
		scaling: 1.4,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/52380414991/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// cell
		// padded
		// asylum
		// space: medium
		id: 'padded_cell',
		name: 'Padded Cell',
		image: 'padded_cell.jpg',
		size: [2750, 1947],
		maxY: 420,
		scaling: 1.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'Self-Made',
					copyrightHolder: 'ClaudiaMia',
					editedBy: 'ClaudiaMia',
					license: 'Pandora-Use-Only',
				},
			],
		},
	},
	{
		// inside
		// bathroom
		// shower
		// day
		// space: small
		id: 'large_shower',
		name: 'Large shower',
		image: 'large_shower.jpg',
		size: [2250, 1677],
		maxY: 200,
		scaling: 1.3,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/51213807491/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
	{
		// inside
		// livingroom
		// cozy
		// home
		// day
		// space: medium
		id: 'blue_livingroom',
		name: 'Blue livingroom',
		image: 'blue_livingroom.jpg',
		size: [2650, 1937],
		maxY: 740,
		scaling: 1.5,
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/okchomeseller/18244279019/',
					copyrightHolder: 'Bill Wilson',
					license: 'CC BY',
				},
			],
		},
	},
];

export function LoadBackgrounds() {
	for (const background of BACKGROUNDS) {
		DefineRoomBackground(background);
	}
}
