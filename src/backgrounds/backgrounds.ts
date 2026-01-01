import { RoomBackgroundTagDefinition } from 'pandora-common';
import { BUILD_FOR_TEST } from '../config.ts';
import { DefineRoomBackground } from '../tools/roomDefinition.ts';

type CategoryDefinition = {
	name: string;
	tags: Record<string, string>;
};

/*
GUIDELINE: How to find good "calibration" values from the background image you want to add

1. You need to run Pandora locally which sets it to development mode

2. Add your new image in this file's folder and add an entry for it in this file.
Filling out the values should be mostly self explanatory, otherwise please ask on Discord.
For the "calibration" value, use this template as a start:
		calibration: {
			imageSize: [#width-of-your-image, #height-of-your-image],
			cameraCenterOffset: [0, 0],
			areaCoverage: 1,
			ceiling: 0,
			areaDepthRatio: 20,
			baseScale: 1,
			fov: 80,
		},

3. You need to have or create a space in your test account that has the development option at the bottom enabled.

4. Go to the "Room"-tab

5. Press the "Space configuration" button and chose your new background image under the "Room management" tab

6. Go back to the "Room"-tab and near the bottom, expand the "[DEV] debug options"

7. Toggle on "Show calibration helper line" to see colorful planes overlaid.

8. Toggle on "Custom calibration"

9. This should now let you see the starting values that you set in this file in step (2)

10. Unless you know the FOV of the image/photo/scene, it is recommended to keep FOV at 80.

11. "Area coverage" should be done near the end, to fit the red area to the whole available floor space.
Right now, use this slider to identify some lines of rectangles in the image, e.g. some patterns on the floor
or some vanishing points, e.g. wall lines.

12. "Area depth ratio" is set to max depth and can then be reduced to fit, after everything except coverage
and "base scale" is done. You can also use it in between as an intermediate test to move the yellow
rectangle to various depths to see if it matches with the background.

13. Use the "camera center offset" values to adjust the planes to the image's vanishing points,
especially the second Y value.

14. When everything seems to be fine, including setting the "Area depth ratio" to limit the walkable area
to the far wall/edge, you can adjust the "ceiling" slider to fit a possible ceiling
in the image.

15. Afterwards, move "area coverage" to the final size to cover everything where a character should be able to walk to.

16. Base scale should be done last, as it just changes the height of characters in the same way everywhere
in the room. So you just select a suitable object in the image and move your character next to it.
Then you change the base scale until the relation in sizes seems realistic.

17. As a final test, you can move your character around the room to see if it does not get unrealistically
smaller or bigger when moving it along the wall for instance. If something feels off, you likely have set some values incorrectly.
*/

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
			garage: 'Garage',
			garden: 'Garden',
			gym: 'Gym',
			hallway: 'Hallway',
			hospital: 'Hospital',
			kitchen: 'Kitchen',
			livingroom: 'Livingroom',
			lounge: 'Lounge',
			museum: 'Museum',
			nature: 'Nature',
			nightclub: 'Nightclub',
			prison: 'Prison',
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
		useForTesting: true,
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
			cameraCenterOffset: [0, 24],
			areaCoverage: 4,
			ceiling: 3526,
			areaDepthRatio: 0.26,
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
	{
		id: 'indoor_pool',
		name: 'Indoor pool',
		image: 'indoor_pool.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [-6, -26],
			areaCoverage: 3.2,
			ceiling: 3807,
			areaDepthRatio: 4,
			baseScale: 1.64,
			fov: 80,
		},
		tags: ['inside', 'day', 'home', 'chill', 'water', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/6AtOR',
					copyrightHolder: 'IPfuentes',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'scandinavian_kitchen',
		name: 'Scandinavian kitchen',
		image: 'scandinavian_kitchen.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [0, 132],
			areaCoverage: 1.62,
			ceiling: 2183,
			areaDepthRatio: 0.64,
			baseScale: 1.1,
			fov: 80,
		},
		tags: ['inside', 'day', 'home', 'chill', 'kitchen', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oIqQL',
					copyrightHolder: 'QuarizonStudio',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'open_kitchen_room',
		name: 'Open kitchen room',
		image: 'open_kitchen_room.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [-37, 181],
			areaCoverage: 1.19,
			ceiling: 2147,
			areaDepthRatio: 0.65,
			baseScale: 1.4,
			fov: 80,
		},
		tags: ['inside', 'day', 'home', 'chill', 'kitchen', 'path', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oyxEV',
					copyrightHolder: 'dylanheyes',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'stair_case',
		name: 'Staircase',
		image: 'stair_case.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [-450, -200],
			areaCoverage: 0.94,
			ceiling: 3814,
			areaDepthRatio: 0.47,
			baseScale: 1.5,
			fov: 80,
		},
		tags: ['inside', 'day', 'path', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oytWF',
					copyrightHolder: 'Comicaroid/yuuuusukeeee',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'rundown_hideout',
		name: 'Rundown hideout',
		image: 'rundown_hideout.jpg',
		calibration: {
			imageSize: [3440, 2160],
			cameraCenterOffset: [0, 184],
			areaCoverage: 0.97,
			ceiling: 2724,
			areaDepthRatio: 0.76,
			baseScale: 1.3,
			fov: 80,
		},
		tags: ['inside', 'night', 'home', 'dirty', 'kitchen', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/6WYzB',
					copyrightHolder: '_SeF_',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'rooftop',
		name: 'Rooftop',
		image: 'rooftop.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [0, 800],
			areaCoverage: 2.2,
			ceiling: 0,
			areaDepthRatio: 0.68,
			baseScale: 1.2,
			fov: 80,
		},
		tags: ['outside', 'day', 'path', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oytWU',
					copyrightHolder: 'Comicaroid/yuuuusukeeee',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'interior_pathway_stairs',
		name: 'Interior pathway stairs',
		image: 'interior_pathway_stairs.jpg',
		calibration: {
			imageSize: [3513, 2155],
			cameraCenterOffset: [900, 400],
			areaCoverage: 2.9,
			ceiling: 0,
			areaDepthRatio: 0.51,
			baseScale: 1.3,
			fov: 80,
		},
		tags: ['inside', 'home', 'day', 'path', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/p9UuE',
					copyrightHolder: 'Deerparkstairs51',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'interior_pathway_cellar',
		name: 'Interior pathway cellar',
		image: 'interior_pathway_cellar.jpg',
		calibration: {
			imageSize: [3426, 1898],
			cameraCenterOffset: [0, 0],
			areaCoverage: 2.3,
			ceiling: 0,
			areaDepthRatio: 0.77,
			baseScale: 1.6,
			fov: 80,
		},
		tags: ['inside', 'home', 'day', 'cellar', 'path', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/p88rK',
					copyrightHolder: 'Deerparkstairs51',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'prison_block',
		name: 'Prison block',
		image: 'prison_block.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [-76, 72],
			areaCoverage: 1.72,
			ceiling: 1915,
			areaDepthRatio: 1.18,
			baseScale: 1,
			fov: 80,
		},
		tags: ['inside', 'prison', 'cell', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oo966',
					copyrightHolder: 'P736728/penpats.hon',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'onsen',
		name: 'Onsen',
		image: 'onsen.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [200, 160],
			areaCoverage: 2,
			ceiling: 0,
			areaDepthRatio: 0.94,
			baseScale: 2.2,
			fov: 80,
		},
		tags: ['outside', 'day', 'pool', 'water', 'foggy', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/pzOPt',
					copyrightHolder: 'Local Yany',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'office_room',
		name: 'Office room',
		image: 'office_room.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [10, -88],
			areaCoverage: 2.69,
			ceiling: 4056,
			areaDepthRatio: 1,
			baseScale: 1.5,
			fov: 80,
		},
		tags: ['inside', 'work', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/pxDy7',
					copyrightHolder: 'ChoboiAssets/alsoliman905',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'medieval_dungeon_cell',
		name: 'Medieval dungeon cell',
		image: 'medieval_dungeon_cell.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [119, -41],
			areaCoverage: 1,
			ceiling: 2777,
			areaDepthRatio: 0.48,
			baseScale: 1.1,
			fov: 80,
		},
		tags: ['inside', 'night', 'dirty', 'cell', 'dungeon', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/6SMRH',
					copyrightHolder: 'Choopa',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'hospital_hallway',
		name: 'Hospital hallway',
		image: 'hospital_hallway.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [375, 138],
			areaCoverage: 1.42,
			ceiling: 2757,
			areaDepthRatio: 2.35,
			baseScale: 1.6,
			fov: 80,
		},
		tags: ['inside', 'hospital', 'asylum', 'hallway', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/pzORr',
					copyrightHolder: 'Local Yany',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'hospital_entrance',
		name: 'Hospital entrance',
		image: 'hospital_entrance.jpg',
		calibration: {
			imageSize: [3838, 2158],
			cameraCenterOffset: [0, -120],
			areaCoverage: 2.7,
			ceiling: 2150,
			areaDepthRatio: 3.96,
			baseScale: 1.1,
			fov: 80,
		},
		tags: ['inside', 'hospital', 'asylum', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/oPJWC',
					copyrightHolder: 'Flavia Fabbri',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'apartment_hallway',
		name: 'Apartment hallway',
		image: 'apartment_hallway.jpg',
		calibration: {
			imageSize: [3323, 2148],
			cameraCenterOffset: [-22, -44],
			areaCoverage: 0.8,
			ceiling: 2232,
			areaDepthRatio: 0.56,
			baseScale: 1.26,
			fov: 80,
		},
		tags: ['inside', 'home', 'path', 'entrance', 'hallway', 'space_small'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/6DTXz',
					copyrightHolder: 'marcinbuczko',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'zen_garden',
		name: 'Zen garden',
		image: 'zen_garden.jpg',
		calibration: {
			imageSize: [3564, 2160],
			cameraCenterOffset: [-420, 91],
			areaCoverage: 7,
			ceiling: 0,
			areaDepthRatio: 2.75,
			baseScale: 1,
			fov: 80,
		},
		tags: ['outside', 'nature', 'garden', 'day', 'space_large'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://www.flickr.com/photos/el_ave/30868553144/',
					copyrightHolder: 'el ave',
					license: 'CC BY',
				},
			],
		},
	},
	{
		id: 'artists_livingroom_night',
		name: 'Artist\'s livingroom',
		image: 'artists_livingroom_night.jpg',
		calibration: {
			imageSize: [3840, 2160],
			cameraCenterOffset: [-20, 199],
			areaCoverage: 1.02,
			ceiling: 2866,
			areaDepthRatio: 0.42,
			baseScale: 1.06,
			fov: 80,
		},
		tags: ['inside', 'livingroom', 'couch', 'cozy', 'path', 'home', 'night', 'space_medium'],
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://skfb.ly/pzB6y',
					copyrightHolder: 'Visthétique',
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
		if (BUILD_FOR_TEST && background.useForTesting !== true) {
			// Do not use this background when building for test
		} else {
			DefineRoomBackground(background);
		}
	}
}
