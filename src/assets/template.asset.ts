// The comments provide info about what is REQUIRED before submitting an asset.
// After filling the info in, please remove the helper comments before creating a PR.

DefineAsset({
	// Name of your asset, this is what users see
	name: 'My new asset',
	// Name of the file with graphics, uncomment this once you created graphics using Editor.
	/*
	graphics: 'graphics.json',
	*/
	// Definitions how your asset should be colorable.
	// Rename the example group or copy it to add more idependant ones.
	colorization: [
		{
			name: 'Color group',
			default: '#FFFFFF',
		},
	],
	// Info about who owns the asset(s)
	ownership: {
		// Same as author of git commits present in PR, has responsibility for this asset
		responsibleContributor: 'gitName <gitEmail@example.com>',
		// Who is shown in the credits for this asset and at the same time the people to ask when this asset should be changed
		// Note: Does not have to be the gitName, but it may make it easier to get in contact
		credits: ['MyNameInTheCredits'],
		// Write your preference how you want to allow others to modify this asset.
		// See more details in CONTRIBUTING.md
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		// Write your preference how you want to allow others to reuse parts of your assets for their assets,
		// See more details in CONTRIBUTING.md
		reusePolicy: 'Ask first',
		// Legal info about the images
		// If there are multiple sources used, specify this multiple times
		// If author gave you express permission to use images, but wishes to remain Anonymous, write "Anonymous" into relevant fields.
		licensing: [
			{
				// Which part of the asset this part of licensing applies to?
				// This property is optional, if this applies to the whole asset, simply remove the line with `part`
				// Examples: The chains; The main body of the asset without decorations; The decorations
				part: 'CHANGE_ME',
				// Where do the images come from? A HTTP link to source.
				// Can be 'Self-Made' for assets you created yourself or 'Private' for images acquired by directly communicating with creator.
				source: 'Private',
				// Who is copyright holder of the original images? The name they go by.
				copyrightHolder: 'CHANGE_ME',
				// Who edited the images to work for Pandora? Can be same as `copyrightHolder`.
				editedBy: 'CHANGE_ME',
				// License; see possible licenses in ASSET_LICENSING.md file.
				// Alternatively write name of the file with license prefixed by `./`
				license: 'Pandora-Use-Only',
			},
		],
	},
});
