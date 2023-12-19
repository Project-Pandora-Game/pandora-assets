import { DefineRoomBackground } from '../tools/roomDefinition';
import { BackgroundTagDefinition } from 'pandora-common';

type CategoryDefinition = {
	name: string;
	tags: Record<string, string>;
};

const TAGS_DEFINITION = {
	time: {
		name: 'Time',
		tags: {
			day: 'Day',
			night: 'Night',
		},
	},
	ambiance: {
		name: 'Ambiance',
		tags: {
			chill: 'Chill',
			cozy: 'Cozy',
			dirty: 'Dirty',
			foggy: 'Foggy',
			home: 'Home',
			padded: 'Padded',
			urban: 'Urban',
			damp: 'Damp',
		},
	},
	location: {
		name: 'Location',
		tags: {
			inside: 'Inside',
			outside: 'Outside',
			asylum: 'Asylum',
			bar: 'Bar',
			bathroom: 'Bathroom',
			beach: 'Beach',
			bedroom: 'Bedroom',
			casino: 'Casino',
			cell: 'Cell',
			cellar: 'Cellar',
			city: 'City',
			dungeon: 'Dungeon',
			entrance: 'Entrance',
			field: 'Field',
			forest: 'Forest',
			foyer: 'Foyer',
			hallway: 'Hallway',
			garage: 'Garage',
			garden: 'Garden',
			gym: 'Gym',
			livingroom: 'Livingroom',
			lounge: 'Lounge',
			nature: 'Nature',
			nightclub: 'Nightclub',
			shopping: 'Shopping',
			storage: 'Storage',
			street: 'Street',
			wasteland: 'Wasteland',
		},
	},
	item: {
		name: 'Item',
		tags: {
			bed: 'Bed',
			buildings: 'Buildings',
			couch: 'Couch',
			fireplace: 'Fireplace',
			kennel: 'Kennel',
			path: 'Path',
			pool: 'Pool',
			shower: 'Shower',
			throne: 'Throne',
			toilet: 'Toilet',
			wardrobe: 'Wardrobe',
			water: 'Water',
		},
	},
	space: {
		name: 'Space',
		tags: {
			space_small: 'Small',
			space_medium: 'Medium',
			space_large: 'Large',
			space_verylarge: 'Very Large',
		},
	},
} as const satisfies Record<string, CategoryDefinition>;

type BackgroundCategoryKeys = keyof typeof TAGS_DEFINITION;
type BackgroundTags = typeof TAGS_DEFINITION[BackgroundCategoryKeys]['tags'];
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type BackgroundTagNames = KeysOfUnion<BackgroundTags>;

const BACKGROUNDS: IntermediateRoomBackgroundDefinition[] = [
	{
		id: 'couch_living_room',
		name: 'Couch living room',
		image: 'couch_living_room.jpg',
		size: [3150, 1967],
		maxY: 345,
		scaling: 1.7,
		tags: ['inside', 'livingroom', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203961714/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'loft_living_room',
		name: 'Loft living room',
		image: 'loft_living_room.jpg',
		size: [2750, 1837],
		maxY: 720,
		scaling: 1.3,
		tags: ['inside', 'couch', 'cozy', 'space_small'],
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
		id: 'sea_house',
		name: 'Sea house',
		image: 'sea_house.jpg',
		size: [2750, 1837],
		maxY: 530,
		scaling: 1.7,
		tags: ['water', 'beach', 'space_medium'],
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
		id: 'wheat_field',
		name: 'Wheat field',
		image: 'wheat_field.jpg',
		size: [2750, 2000],
		maxY: 1400,
		scaling: 1.3,
		tags: ['outside', 'nature', 'field', 'day', 'space_large'],
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
		id: 'wet_forest_road',
		name: 'Wet forest road',
		image: 'wet_forest_road.jpg',
		size: [2750, 1937],
		maxY: 950,
		scaling: 1.8,
		tags: ['outside', 'nature', 'forest', 'dirty', 'damp', 'day', 'space_small'],
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
		id: 'spring_path',
		name: 'Countryside path in spring',
		image: 'spring_path.jpg',
		size: [2750, 1837],
		maxY: 980,
		scaling: 1.7,
		tags: ['outside', 'nature', 'path', 'day', 'space_small'],
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
		id: 'corn_field',
		name: 'Corn field',
		image: 'corn_field.jpg',
		size: [3050, 2237],
		maxY: 1080,
		scaling: 1.74,
		tags: ['outside', 'nature', 'field', 'day', 'space_large'],
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
		id: 'walking_path',
		name: 'Countryside walking path',
		image: 'walking_path.jpg',
		size: [2750, 1937],
		maxY: 980,
		scaling: 1.8,
		tags: ['outside', 'nature', 'path', 'day', 'space_small'],
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
		id: 'large_garden',
		name: 'Large garden',
		image: 'large_garden.jpg',
		size: [5000, 3600],
		maxY: 1400,
		scaling: 2.0,
		tags: ['outside', 'nature', 'garden', 'day', 'space_large'],
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
		id: 'underground_area',
		name: 'Underground Area',
		image: 'underground_area.jpg',
		size: [4000, 2800],
		maxY: 1180,
		scaling: 1.7,
		tags: ['inside', 'dungeon', 'cellar', 'day', 'space_medium'],
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
		id: 'foggy_forest',
		name: 'Foggy forest',
		image: 'foggy_forest.jpg',
		size: [4000, 2800],
		maxY: 780,
		scaling: 2.3,
		tags: ['outside', 'nature', 'forest', 'foggy', 'day', 'space_small'],
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
		id: 'sunny_forest_clearing',
		name: 'Sunny forest clearing',
		image: 'sunny_forest_clearing.jpg',
		size: [4000, 2800],
		maxY: 1080,
		scaling: 1.9,
		tags: ['outside', 'nature', 'forest', 'day', 'space_small'],
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
		id: 'abandoned_wide_space',
		name: 'Abandoned wasteland',
		image: 'abandoned_wide_space.jpg',
		size: [3750, 2667],
		maxY: 1180,
		scaling: 2.4,
		tags: ['outside', 'buildings', 'wasteland', 'day', 'space_verylarge'],
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
		id: 'long_narrow_beach',
		name: 'Long narrow beach',
		image: 'long_narrow_beach.jpg',
		size: [3250, 2237],
		maxY: 680,
		scaling: 2.1,
		tags: ['outside', 'buildings', 'beach', 'water', 'day', 'space_small'],
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
		id: 'ritual_dungeon',
		name: 'Ritual dungeon',
		image: 'ritual_dungeon.jpg',
		size: [3250, 2337],
		maxY: 630,
		scaling: 2.3,
		tags: ['inside', 'dungeon', 'cellar', 'night', 'space_medium'],
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
		id: 'storage_cellar',
		name: 'Storage cellar',
		image: 'storage_cellar.jpg',
		size: [4000, 2800],
		maxY: 1180,
		scaling: 1.7,
		tags: ['inside', 'dungeon', 'cellar', 'storage', 'dirty', 'night', 'space_medium'],
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
		id: 'sandy_dungeon',
		name: 'Sandy dungeon',
		image: 'sandy_dungeon.jpg',
		size: [4000, 2800],
		maxY: 1080,
		scaling: 2.2,
		tags: ['inside', 'dungeon', 'day', 'space_large'],
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
		id: 'imperial_throne_room',
		name: 'Imperial throne room',
		image: 'imperial_throne_room.jpg',
		size: [3250, 2337],
		maxY: 580,
		scaling: 2.0,
		tags: ['inside', 'throne', 'day', 'space_small'],
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
		id: 'holy_throne_room',
		name: 'Holy throne room',
		image: 'holy_throne_room.jpg',
		size: [4000, 2800],
		maxY: 650,
		scaling: 2.0,
		tags: ['inside', 'throne', 'day', 'space_medium'],
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
		id: 'palace_throne_room',
		name: 'Palace throne room',
		image: 'palace_throne_room.jpg',
		size: [5000, 3500],
		maxY: 860,
		scaling: 2.0,
		tags: ['inside', 'throne', 'day', 'space_medium'],
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
		id: 'nightclub_back',
		name: 'Nightclub back entrance',
		image: 'nightclub_back.jpg',
		size: [3250, 2337],
		maxY: 760,
		scaling: 1.9,
		tags: ['outside', 'bar', 'nightclub', 'night', 'space_medium'],
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
		id: 'casino_lounge',
		name: 'Casino lounge',
		image: 'casino_lounge.jpg',
		size: [3250, 2337],
		maxY: 1160,
		scaling: 1.6,
		tags: ['inside', 'lounge', 'casino', 'night', 'space_large'],
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
		id: 'high_class_bar',
		name: 'High class bar',
		image: 'high_class_bar.jpg',
		size: [3250, 2337],
		maxY: 1110,
		scaling: 1.8,
		tags: ['inside', 'lounge', 'bar', 'night', 'space_large'],
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
		id: 'white_hallway',
		name: 'White hallway',
		image: 'white_hallway.jpg',
		size: [3250, 2337],
		maxY: 1090,
		scaling: 1.82,
		tags: ['inside', 'lounge', 'hallway', 'night', 'space_large'],
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
		id: 'red_hallway',
		name: 'Red hallway',
		image: 'red_hallway.jpg',
		size: [3250, 2337],
		maxY: 990,
		scaling: 2.22,
		tags: ['inside', 'lounge', 'hallway', 'night', 'space_large'],
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
		id: 'club_hallway',
		name: 'Club hallway',
		image: 'club_hallway.jpg',
		size: [3250, 2337],
		maxY: 1130,
		scaling: 1.9,
		tags: ['inside', 'lounge', 'hallway', 'night', 'space_large'],
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
		id: 'shopping_lounge',
		name: 'Shopping lounge',
		image: 'shopping_lounge.jpg',
		size: [3250, 2337],
		maxY: 1090,
		scaling: 1.6,
		tags: ['inside', 'lounge', 'shopping', 'chill', 'space_medium'],
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
		id: 'city_street_day',
		name: 'City street at day',
		image: 'city_street_day.jpg',
		size: [3250, 2337],
		maxY: 1120,
		scaling: 1.82,
		tags: ['outside', 'street', 'city', 'day', 'space_large'],
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
		id: 'cozy_dim_bed',
		name: 'Cozy dim bed',
		image: 'cozy_dim_bed.jpg',
		size: [2250, 1737],
		maxY: 600,
		scaling: 1.01,
		tags: ['inside', 'bedroom', 'cozy', 'bed', 'night', 'space_small'],
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
		id: 'urban_garden_with_playground',
		name: 'Urban garden with playground',
		image: 'urban_garden_with_playground.jpg',
		size: [3250, 2337],
		maxY: 1120,
		scaling: 1.82,
		tags: ['outside', 'urban', 'garden', 'home', 'day', 'space_large'],
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
		id: 'garden_with_pool',
		name: 'Garden with pool',
		image: 'garden_with_pool.jpg',
		size: [5250, 3337],
		maxY: 1370,
		scaling: 1.82,
		tags: ['outside', 'urban', 'garden', 'home', 'pool', 'water', 'day', 'space_medium'],
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
		id: 'large_home_garage',
		name: 'Large home garage',
		image: 'large_home_garage.jpg',
		size: [2650, 1937],
		maxY: 820,
		scaling: 1.68,
		tags: ['inside', 'garage', 'home', 'day', 'space_medium'],
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
		id: 'personal_gym_room',
		name: 'Personal gym room',
		image: 'personal_gym_room.jpg',
		size: [2450, 1737],
		maxY: 560,
		scaling: 1.58,
		tags: ['inside', 'gym', 'home', 'day', 'space_small'],
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
		id: 'livingroom_with_kennel',
		name: 'Livingroom with kennel',
		image: 'livingroom_with_kennel.jpg',
		size: [2650, 1937],
		maxY: 820,
		scaling: 1.58,
		tags: ['inside', 'livingroom', 'kennel', 'home', 'day', 'space_medium'],
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
		id: 'grey_bedroom',
		name: 'Grey bedroom',
		image: 'grey_bedroom.jpg',
		size: [2650, 1937],
		maxY: 760,
		scaling: 0.9,
		tags: ['inside', 'bedroom', 'home', 'day', 'space_small'],
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
		id: 'cozy_minimal_livingroom',
		name: 'Cozy minimal livingroom',
		image: 'cozy_minimal_livingroom.jpg',
		size: [2750, 1937],
		maxY: 870,
		scaling: 1.1,
		tags: ['inside', 'livingroom', 'couch', 'home', 'day', 'space_medium'],
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
		id: 'colorful_livingroom',
		name: 'Colorful livingroom',
		image: 'colorful_livingroom.jpg',
		size: [2650, 1937],
		maxY: 720,
		scaling: 1.3,
		tags: ['inside', 'livingroom', 'fireplace', 'cozy', 'home', 'day', 'space_medium'],
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
		id: 'bathroom_with_dressing_room',
		name: 'Bathroom with dressing room',
		image: 'bathroom_with_dressing_room.jpg',
		size: [2450, 1837],
		maxY: 720,
		scaling: 1.8,
		tags: ['inside', 'bathroom', 'shower', 'toilet', 'day', 'space_small'],
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
		id: 'entrance_area',
		name: 'Home entrance inside',
		image: 'entrance_area.jpg',
		size: [2450, 1737],
		maxY: 460,
		scaling: 1.58,
		tags: ['inside', 'entrance', 'foyer', 'home', 'day', 'space_small'],
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
		id: 'wardrobe_room',
		name: 'Wardrobe room',
		image: 'wardrobe_room.jpg',
		size: [2450, 1837],
		maxY: 320,
		scaling: 1.1,
		tags: ['inside', 'wardrobe', 'day', 'space_small'],
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
		id: 'home_entrance_outside',
		name: 'Home entrance outside',
		image: 'home_entrance_outside.jpg',
		size: [2450, 1737],
		maxY: 610,
		scaling: 1.4,
		tags: ['outside', 'entrance', 'urban', 'home', 'day', 'space_small'],
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
		id: 'padded_cell',
		name: 'Padded Cell',
		image: 'padded_cell.jpg',
		size: [2750, 1947],
		maxY: 420,
		scaling: 1.3,
		tags: ['inside', 'cell', 'padded', 'asylum', 'space_medium'],
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
		id: 'large_shower',
		name: 'Large shower',
		image: 'large_shower.jpg',
		size: [2250, 1677],
		maxY: 200,
		scaling: 1.3,
		tags: ['inside', 'bathroom', 'shower', 'day', 'space_small'],
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
		id: 'shower_room',
		name: 'Shower room',
		image: 'shower_room.jpg',
		size: [4000, 2000],
		maxY: 125,
		scaling: 1.8,
		tags: ['inside', 'bathroom', 'shower', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
			licensing: [
				{
					source: 'Self-Made',
					copyrightHolder: 'Jomshir',
					license: 'Pandora-Use-Only',
				},
			],
		},
	},
	{
		id: 'blue_livingroom',
		name: 'Blue livingroom',
		image: 'blue_livingroom.jpg',
		size: [2650, 1937],
		maxY: 740,
		scaling: 1.5,
		tags: ['inside', 'livingroom', 'cozy', 'home', 'day', 'space_medium'],
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
	{
		id: 'vintage_room',
		name: 'Vintage room',
		image: 'vintage_room.jpg',
		size: [2300, 1537],
		maxY: 285,
		scaling: 1.9,
		tags: ['inside', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203921144/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'club_room_small',
		name: 'Club room (small)',
		image: 'club_room_small.jpg',
		size: [3250, 2337],
		maxY: 265,
		scaling: 1.5,
		tags: ['inside', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203873908/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'club_room_medium',
		name: 'Club room (medium)',
		image: 'club_room_medium.jpg',
		size: [2300, 1637],
		maxY: 595,
		scaling: 1.45,
		tags: ['inside', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203873908/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
				{
					source: 'https://www.flickr.com/photos/grantguarino/50338603446/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		id: 'club_room_large',
		name: 'Club room (large)',
		image: 'club_room_large.jpg',
		size: [2300, 1637],
		maxY: 895,
		scaling: 1.3,
		tags: ['inside', 'day', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203873908/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
				{
					source: 'https://www.flickr.com/photos/grantguarino/50338603446/',
					copyrightHolder: 'Grant Guarino',
					license: 'CC BY-SA',
				},
			],
		},
	},
	{
		id: 'fireplace_room',
		name: 'Fireplace room',
		image: 'fireplace_room.jpg',
		size: [3050, 1887],
		maxY: 400,
		scaling: 1.5,
		tags: ['inside', 'fireplace', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203896386/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'cozy_fireplace_room',
		name: 'Cozy Fireplace room',
		image: 'cozy_fireplace_room.jpg',
		size: [2950, 1937],
		maxY: 430,
		scaling: 1.5,
		tags: ['inside', 'fireplace', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9201189979/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'green_room',
		name: 'Green room',
		image: 'green_room.jpg',
		size: [2750, 1837],
		maxY: 235,
		scaling: 1.5,
		tags: ['inside', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203498418/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'grey_room',
		name: 'Grey room',
		image: 'grey_room.jpg',
		size: [2750, 1837],
		maxY: 260,
		scaling: 1.6,
		tags: ['inside', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9203509718/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'stone_room',
		name: 'Stone room',
		image: 'stone_room.jpg',
		size: [2150, 1537],
		maxY: 325,
		scaling: 1.9,
		tags: ['inside', 'dungeon', 'day', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9200424573/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'stone_room_large',
		name: 'Stone room (large)',
		image: 'stone_room_large.jpg',
		size: [2150, 1537],
		maxY: 930,
		scaling: 1.18,
		tags: ['inside', 'dungeon', 'day', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/96511847@N04/9200424573/',
					copyrightHolder: 'Miki',
					license: 'Public Domain',
				},
				{
					source: 'https://www.flickr.com/photos/mikec2/4644991529/',
					copyrightHolder: 'Image Nation',
					license: 'CC BY',
				},
			],
		},
	},
];

export function LoadBackgroundTags() {
	const result: Record<string, BackgroundTagDefinition> = {};
	for (const { name: category, tags } of Object.values(TAGS_DEFINITION)) {
		for (const [tagKey, name] of Object.entries(tags)) {
			result[tagKey] = {
				name,
				category,
			};
		}
	}
	return result;
}

export function LoadBackgrounds() {
	for (const background of BACKGROUNDS) {
		DefineRoomBackground(background);
	}
}
