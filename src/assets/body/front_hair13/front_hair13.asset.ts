// The comments provide info about what is REQUIRED before submitting an asset.
// After filling the info in, please remove the helper comments before creating a PR.

const bodypart = DefineBodypart({
	// Name of your asset, this is what users see
	name: 'Front Hair 13',
	bodypart: 'fronthair',
	// Name of the file with graphics created using Editor.
	graphics: 'graphics.json',
	// Definitions of how your asset should be colorable.
	// Rename the example group or copy it to add more independent ones.
	colorization: {
		colorGroup: {
			name: 'Color group',
			default: '#FFFFFF',
		},
	},
	// Add name of the preview file, optimally created using the editor. For other examples look at other assets.
	preview: 'preview.png',
	// Info about who owns the asset(s)
	ownership: {
		// Same as the author of git commits present in PR, has responsibility for this asset
		responsibleContributor: 'ObliqueBC',
		// Who is shown in the credits for this asset and at the same time the people to ask when this asset should be changed
		// Note: It does not have to be the gitName, but it may make it easier to get in contact
		credits: ['Oblique'],
		// Write your preference on how you want to allow others to modify this asset.
		// See more details in CONTRIBUTING.md
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		// Write your preference on how you want to allow others to reuse parts of your assets for their assets,
		// See more details in CONTRIBUTING.md
		reusePolicy: 'Ask first',
		// Legal info about the images
		// If there are multiple sources used, specify this multiple times
		// If the author gave you express permission to use images but wishes to remain Anonymous, write "Anonymous" in relevant fields.
		licensing: [
			{
				// From where does the images come? An HTTP link to the source.
				// Can be 'Self-Made' for assets you created yourself or 'Private' for images acquired by directly communicating with the creator.
				source: 'Self-Made',
				// Who is the copyright holder of the original images? The name they go by.
				copyrightHolder: 'ObliqueBC',
				// Who edited the images to work for Pandora? It can be the same as `copyrightHolder`.
				editedBy: 'ObliqueBC',
				// License; see possible licenses in ASSET_LICENSING.md file.
				// Alternatively, write the name of the file with the license prefixed by `./` (e.g. `./LICENSE.md`)
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

// The code below creates a "wig" item by reusing almost everything from the above definition.
// Keep it as-is, only editing the things higher

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/front_hair13/wig',
	name: 'Front Wig 13',
	size: 'small',
	attributes: {
		provides: [
			'Wig',
			'Wig_front',
		],
		hides: [
			'Hair_front',
		],
	},
});

