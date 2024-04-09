import { DefineRoomBackground } from '../tools/roomDefinition';
import { RoomBackgroundTagDefinition } from 'pandora-common';

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
			event: 'Event',
			foggy: 'Foggy',
			home: 'Home',
			padded: 'Padded',
			public: 'Public',
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
			kitchen: 'Kitchen',
			livingroom: 'Livingroom',
			lounge: 'Lounge',
			museum: 'Museum',
			nature: 'Nature',
			nightclub: 'Nightclub',
			shopping: 'Shopping',
			storage: 'Storage',
			street: 'Street',
			wasteland: 'Wasteland',
			work: 'Work',
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
		calibration: {
			imageSize: [5463, 3298],
			cameraCenterOffset: [0, -42],
			areaCoverage: 1.83,
			ceiling: 4643,
			areaDepthRatio: 0.37,
			baseScale: 2.14,
			fov: 80,
		},
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
		id: 'sea_house',
		name: 'Sea house',
		image: 'sea_house.jpg',
		calibration: {
			imageSize: [5789, 3015],
			cameraCenterOffset: [0, 236],
			areaCoverage: 2,
			ceiling: 0,
			areaDepthRatio: 0.47,
			baseScale: 2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2406, 1803],
			cameraCenterOffset: [0, 500],
			areaCoverage: 19,
			ceiling: 0,
			areaDepthRatio: 7.49,
			baseScale: 1.26,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2867, 2149],
			cameraCenterOffset: [-50, 120],
			areaCoverage: 1.57,
			ceiling: 0,
			areaDepthRatio: 8.1,
			baseScale: 1.6,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2458, 1843],
			cameraCenterOffset: [-100, 150],
			areaCoverage: 1.43,
			ceiling: 0,
			areaDepthRatio: 6.67,
			baseScale: 1.39,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2396, 1596],
			cameraCenterOffset: [0, 110],
			areaCoverage: 19,
			ceiling: 0,
			areaDepthRatio: 7.37,
			baseScale: 0.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2761, 2058],
			cameraCenterOffset: [-200, 150],
			areaCoverage: 3,
			ceiling: 0,
			areaDepthRatio: 4.67,
			baseScale: 1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2765, 2074],
			cameraCenterOffset: [500, 100],
			areaCoverage: 2.4,
			ceiling: 0,
			areaDepthRatio: 1.36,
			baseScale: 0.6,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2573, 1709],
			cameraCenterOffset: [0, 10],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 3.21,
			baseScale: 1.1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2250, 1266],
			cameraCenterOffset: [0, -80],
			areaCoverage: 19,
			ceiling: 0,
			areaDepthRatio: 1.92,
			baseScale: 0.7,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2835, 1933],
			cameraCenterOffset: [0, 100],
			areaCoverage: 19,
			ceiling: 0,
			areaDepthRatio: 4.17,
			baseScale: 0.9,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2458, 1639],
			cameraCenterOffset: [0, -130],
			areaCoverage: 20,
			ceiling: 0,
			areaDepthRatio: 12.72,
			baseScale: 0.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3888, 2592],
			cameraCenterOffset: [0, -140],
			areaCoverage: 3.4,
			ceiling: 0,
			areaDepthRatio: 2.76,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3682, 2363],
			cameraCenterOffset: [0, -140],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 0.96,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3249, 2055],
			cameraCenterOffset: [-140, 300],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 0.9,
			baseScale: 1.3,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3648, 2606],
			cameraCenterOffset: [90, -120],
			areaCoverage: 1.75,
			ceiling: 0,
			areaDepthRatio: 3.03,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3456, 2304],
			cameraCenterOffset: [-100, -150],
			areaCoverage: 1.43,
			ceiling: 0,
			areaDepthRatio: 0.73,
			baseScale: 1.5,
			fov: 80,
		},
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
		id: 'palace_throne_room',
		name: 'Palace throne room',
		image: 'palace_throne_room.jpg',
		calibration: {
			imageSize: [4002, 2598],
			cameraCenterOffset: [0, -220],
			areaCoverage: 1.38,
			ceiling: 0,
			areaDepthRatio: 0.76,
			baseScale: 1.1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2400, 1600],
			cameraCenterOffset: [0, -50],
			areaCoverage: 6,
			ceiling: 0,
			areaDepthRatio: 1.32,
			baseScale: 1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [0, 300],
			areaCoverage: 2.9,
			ceiling: 0,
			areaDepthRatio: 3.17,
			baseScale: 1.66,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [0, 300],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 2.25,
			baseScale: 1.3,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [0, 200],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 2.75,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [60, -160],
			areaCoverage: 1.7,
			ceiling: 2910,
			areaDepthRatio: 6,
			baseScale: 1.6,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [0, 80],
			areaCoverage: 2.8,
			ceiling: 2710,
			areaDepthRatio: 6.83,
			baseScale: 1.5,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4032, 3024],
			cameraCenterOffset: [100, 300],
			areaCoverage: 3.2,
			ceiling: 0,
			areaDepthRatio: 2.86,
			baseScale: 1.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3200, 2130],
			cameraCenterOffset: [0, 70],
			areaCoverage: 7,
			ceiling: 0,
			areaDepthRatio: 14.72,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3008, 2000],
			cameraCenterOffset: [0, 700],
			areaCoverage: 2,
			ceiling: 0,
			areaDepthRatio: 0.51,
			baseScale: 1.4,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2580, 1721],
			cameraCenterOffset: [0, 70],
			areaCoverage: 7,
			ceiling: 0,
			areaDepthRatio: 14.72,
			baseScale: 1.1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [1620, 1080],
			cameraCenterOffset: [0, 0],
			areaCoverage: 14,
			ceiling: 0,
			areaDepthRatio: 3.8,
			baseScale: 0.5,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2458, 1639],
			cameraCenterOffset: [0, 100],
			areaCoverage: 5,
			ceiling: 2600,
			areaDepthRatio: 1.62,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [1619, 1080],
			cameraCenterOffset: [0, 120],
			areaCoverage: 4,
			ceiling: 1360,
			areaDepthRatio: 0.72,
			baseScale: 0.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2826, 1885],
			cameraCenterOffset: [0, 209],
			areaCoverage: 4,
			ceiling: 2444,
			areaDepthRatio: 1.31,
			baseScale: 1.15,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2335, 1558],
			cameraCenterOffset: [0, 120],
			areaCoverage: 3,
			ceiling: 1700,
			areaDepthRatio: 0.68,
			baseScale: 1.1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [5633, 3726],
			cameraCenterOffset: [0, 300],
			areaCoverage: 3.8,
			ceiling: 5680,
			areaDepthRatio: 0.86,
			baseScale: 2.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [1440, 1080],
			cameraCenterOffset: [0, 120],
			areaCoverage: 4,
			ceiling: 1200,
			areaDepthRatio: 0.72,
			baseScale: 0.7,
			fov: 80,
		},
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
		id: 'entrance_area',
		name: 'Home entrance inside',
		image: 'entrance_area.jpg',
		calibration: {
			imageSize: [1619, 1080],
			cameraCenterOffset: [0, 120],
			areaCoverage: 4,
			ceiling: 1600,
			areaDepthRatio: 0.52,
			baseScale: 0.75,
			fov: 80,
		},
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
		calibration: {
			imageSize: [1620, 1080],
			cameraCenterOffset: [0, 120],
			areaCoverage: 4,
			ceiling: 1260,
			areaDepthRatio: 0.27,
			baseScale: 0.7,
			fov: 80,
		},
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
		calibration: {
			imageSize: [1620, 1080],
			cameraCenterOffset: [0, 220],
			areaCoverage: 1.6,
			ceiling: 1200,
			areaDepthRatio: 0.62,
			baseScale: 0.7,
			fov: 80,
		},
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
		calibration: {
			imageSize: [3000, 1842],
			cameraCenterOffset: [0, 100],
			areaCoverage: 1.37,
			ceiling: 0,
			areaDepthRatio: 0.4,
			baseScale: 1,
			fov: 80,
		},
		tags: ['inside', 'cell', 'padded', 'asylum', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'Self-Made',
					copyrightHolder: 'ClaudiaMia',
					editedBy: 'ClaudiaMia',
					license: 'Pandora-Use-Only-v1-or-later',
				},
			],
		},
	},
	{
		id: 'large_shower',
		name: 'Large shower',
		image: 'large_shower.jpg',
		calibration: {
			imageSize: [1620, 1080],
			cameraCenterOffset: [0, 0],
			areaCoverage: 0.85,
			ceiling: 0,
			areaDepthRatio: 0.27,
			baseScale: 0.8,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4000, 2000],
			cameraCenterOffset: [0, 0],
			areaCoverage: 0.81,
			ceiling: 0,
			areaDepthRatio: 0.14,
			baseScale: 1.35,
			fov: 80,
		},
		tags: ['inside', 'bathroom', 'shower', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
			licensing: [
				{
					source: 'Self-Made',
					copyrightHolder: 'Jomshir',
					license: 'Pandora-Use-Only-v1-or-later',
				},
			],
		},
	},
	{
		id: 'blue_livingroom',
		name: 'Blue livingroom',
		image: 'blue_livingroom.jpg',
		calibration: {
			imageSize: [1600, 1200],
			cameraCenterOffset: [0, 120],
			areaCoverage: 1.4,
			ceiling: 0,
			areaDepthRatio: 0.78,
			baseScale: 0.7,
			fov: 80,
		},
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
		calibration: {
			imageSize: [5500, 3300],
			cameraCenterOffset: [0, 200],
			areaCoverage: 4,
			ceiling: 0,
			areaDepthRatio: 0.34,
			baseScale: 2.6,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4000, 2914],
			cameraCenterOffset: [0, 100],
			areaCoverage: 4,
			ceiling: 3300,
			areaDepthRatio: 0.24,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4000, 2914],
			cameraCenterOffset: [0, 500],
			areaCoverage: 2.4,
			ceiling: 0,
			areaDepthRatio: 0.76,
			baseScale: 1.84,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4000, 2914],
			cameraCenterOffset: [0, 800],
			areaCoverage: 3.8,
			ceiling: 0,
			areaDepthRatio: 1.3,
			baseScale: 2.1,
			fov: 80,
		},
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
		calibration: {
			imageSize: [4200, 2518],
			cameraCenterOffset: [0, 200],
			areaCoverage: 1.8,
			ceiling: 0,
			areaDepthRatio: 0.36,
			baseScale: 1.7,
			fov: 80,
		},
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
		calibration: {
			imageSize: [5000, 3643],
			cameraCenterOffset: [0, 100],
			areaCoverage: 1.7,
			ceiling: 4760,
			areaDepthRatio: 0.44,
			baseScale: 2.6,
			fov: 80,
		},
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
		calibration: {
			imageSize: [5100, 3058],
			cameraCenterOffset: [0, 100],
			areaCoverage: 1.7,
			ceiling: 0,
			areaDepthRatio: 0.24,
			baseScale: 2.36,
			fov: 80,
		},
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
		calibration: {
			imageSize: [5300, 3181],
			cameraCenterOffset: [0, 0],
			areaCoverage: 1.7,
			ceiling: 0,
			areaDepthRatio: 0.32,
			baseScale: 2.4,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2529, 1827],
			cameraCenterOffset: [0, -100],
			areaCoverage: 2.2,
			ceiling: 0,
			areaDepthRatio: 0.78,
			baseScale: 1.2,
			fov: 80,
		},
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
		calibration: {
			imageSize: [2529, 1827],
			cameraCenterOffset: [0, 800],
			areaCoverage: 2.7,
			ceiling: 0,
			areaDepthRatio: 0.94,
			baseScale: 0.7,
			fov: 80,
		},
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
	{
		id: 'blue_wall_room',
		name: 'Blue wall room',
		image: 'blue_wall_room.jpg',
		calibration: {
			imageSize: [2466, 1503],
			cameraCenterOffset: [0, 600],
			areaCoverage: 2.2,
			ceiling: 0,
			areaDepthRatio: 0.55,
			baseScale: 0.9,
			fov: 80,
		},
		tags: ['inside', 'home', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oI8uY',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'pink_wall_room',
		name: 'Pink wall room',
		image: 'pink_wall_room.jpg',
		calibration: {
			imageSize: [2466, 1503],
			cameraCenterOffset: [0, 600],
			areaCoverage: 2.2,
			ceiling: 0,
			areaDepthRatio: 0.55,
			baseScale: 0.9,
			fov: 80,
		},
		tags: ['inside', 'home', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oI8uY',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'red_wall_room',
		name: 'Red wall room',
		image: 'red_wall_room.jpg',
		calibration: {
			imageSize: [3449, 2107],
			cameraCenterOffset: [0, 800],
			areaCoverage: 2,
			ceiling: 0,
			areaDepthRatio: 0.45,
			baseScale: 1.6,
			fov: 80,
		},
		tags: ['inside', 'home', 'day', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oI8uY',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'show_stage',
		name: 'Show stage',
		image: 'show_stage.jpg',
		calibration: {
			imageSize: [3640, 2160],
			cameraCenterOffset: [0, 250],
			areaCoverage: 2.8,
			ceiling: 3658,
			areaDepthRatio: 1.19,
			baseScale: 1.09,
			fov: 80,
		},
		tags: ['inside', 'event', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oMzKN',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'show_stage_large',
		name: 'Show stage (large)',
		image: 'show_stage_large.jpg',
		calibration: {
			imageSize: [3640, 2160],
			cameraCenterOffset: [0, 500],
			areaCoverage: 2.8,
			ceiling: 0,
			areaDepthRatio: 0.79,
			baseScale: 0.6,
			fov: 80,
		},
		tags: ['inside', 'event', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oMzKN',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'upper_office',
		name: 'Upper office',
		image: 'upper_office.jpg',
		calibration: {
			imageSize: [3548, 2096],
			cameraCenterOffset: [0, 200],
			areaCoverage: 1.7,
			ceiling: 0,
			areaDepthRatio: 0.74,
			baseScale: 1.2,
			fov: 80,
		},
		tags: ['inside', 'day', 'work', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oIwoz',
					copyrightHolder: 'dylanheyes',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'modern_toilet',
		name: 'Modern toilet room',
		image: 'modern_toilet.jpg',
		calibration: {
			imageSize: [3430, 2158],
			cameraCenterOffset: [30, 200],
			areaCoverage: 1.2,
			ceiling: 0,
			areaDepthRatio: 0.62,
			baseScale: 1.8,
			fov: 80,
		},
		tags: ['inside', 'day', 'toilet', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oyVRv',
					copyrightHolder: 'dylanheyes',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'public_square',
		name: 'Public square',
		image: 'public_square.jpg',
		calibration: {
			imageSize: [3440, 2160],
			cameraCenterOffset: [0, 300],
			areaCoverage: 4.2,
			ceiling: 0,
			areaDepthRatio: 1.96,
			baseScale: 0.9,
			fov: 80,
		},
		tags: ['outside', 'day', 'urban', 'public', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://flic.kr/p/2eyErPz',
					copyrightHolder: 'R Boed',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'public_square_platform',
		name: 'Public square platform',
		image: 'public_square_platform.jpg',
		calibration: {
			imageSize: [3440, 2160],
			cameraCenterOffset: [0, 500],
			areaCoverage: 2,
			ceiling: 0,
			areaDepthRatio: 0.65,
			baseScale: 1.2,
			fov: 80,
		},
		tags: ['outside', 'day', 'urban', 'public', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://flic.kr/p/2eyErPz',
					copyrightHolder: 'R Boed',
					license: 'CC BY',
				},
				{
					source: 'https://skfb.ly/oMCHp',
					copyrightHolder: '5CNG5',
					license: 'CC BY',
				},
			],
		},
	},
];

export function LoadBackgroundTags() {
	const result: Record<string, RoomBackgroundTagDefinition> = {};
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
