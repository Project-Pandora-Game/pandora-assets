// The comments provide info about what is REQUIRED before submitting an asset.
// After filling the info in, please remove the helper comments before creating a PR.

DefineAsset({
	// Name of your asset, this is what users see
	name: 'My new asset',
	// Size of this item. Affects mainly which things it can fit into. For more details check pandora-common/src/assets/definitions.ts
	size: 'medium',
	// Name of the file with graphics, uncomment this once you created graphics using Editor.
	/*
	graphics: 'graphics.json',
	*/
	// Definitions of how your asset should be colorable.
	// Rename the example group or copy it to add more independent ones.
	colorization: {
		colorGroup: {
			name: 'Color group',
			default: '#FFFFFF',
		},
	},
	// Info about who owns the asset(s)
	ownership: {
		// Same as the author of git commits present in PR, has responsibility for this asset
		responsibleContributor: 'gitName <gitEmail@example.com>',
		// Who is shown in the credits for this asset and at the same time the people to ask when this asset should be changed
		// Note: It does not have to be the gitName, but it may make it easier to get in contact
		credits: ['CHANGE_ME'],
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
				// Which part of the asset does this part of licensing apply to?
				// This property is optional, if this applies to the whole asset, simply remove the line with `part`.
				// Examples: The chains; The main body of the asset without decorations; The decorations
				part: 'CHANGE_ME',
				// From where does the images come? An HTTP link to the source.
				// Can be 'Self-Made' for assets you created yourself or 'Private' for images acquired by directly communicating with the creator.
				source: 'Private',
				// Who is the copyright holder of the original images? The name they go by.
				copyrightHolder: 'CHANGE_ME',
				// Who edited the images to work for Pandora? It can be the same as `copyrightHolder`.
				editedBy: 'CHANGE_ME',
				// License; see possible licenses in ASSET_LICENSING.md file.
				// Alternatively, write the name of the file with the license prefixed by `./` (e.g. `./LICENSE.md`)
				license: 'Pandora-Use-Only',
			},
		],
	},
});
