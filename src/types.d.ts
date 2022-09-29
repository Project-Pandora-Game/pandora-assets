type RectangleCompressed = import('pandora-common').RectangleCompressed;
type CoordinatesCompressed = import('pandora-common').CoordinatesCompressed;
type ConditionCompressed = import('pandora-common').ConditionCompressed;
type LayerPriority = import('pandora-common').LayerPriority;
type PointDefinitionCompressed = import('pandora-common').PointDefinitionCompressed;
type LayerImageOverrideCompressed = import('pandora-common').LayerImageOverrideCompressed;
type LayerMirror = import('pandora-common').LayerMirror;
type AllBones = import('./bones').AllBones;

// Globals available to all assets
declare function DefineAsset(def: IntermediateAssetDefinition): void;

interface IntermediateAssetDefinition extends Pick<import('pandora-common').AssetDefinition<AllBones>,
	| 'name'
	| 'actionMessages'
	| 'colorization'
	| 'poseLimits'
	| 'effects'
	| 'allowSelfEquip'
	| 'modules'
> {
	id?: string;
	bodypart?: import('./bodyparts').BodypartName;
	graphics?: string;
	/** Info about who owns the asset(s) */
	ownership: {
		/** Same as author of git commits present in PR, has responsibility for this asset */
		responsibleContributor: string;
		/** Who is shown in credits for this asset and at the same time people to ask when Asset should be changed */
		credits: string[];
		/** Defines author's preferences about how their asset can be modified */
		modificationPolicy: PandoraAssetModificationPolicy;
		/** Defines author's preferences about how their asset can be reused for other assets */
		reusePolicy: PandoraAssetReusePolicy;
		/**
		 * Legal info about the images
		 * If there are multiple sources used, specify this multiple times.
		 * If author gave you express permission to use images, but wishes to remain Anonymous, write "Anonymous" into relevant fields.
		 */
		licensing: LicensingInfo[];
	};
}

interface IntermediateRoomBackgroundDefinition extends Pick<import('pandora-common').IChatroomBackgroundInfo,
	| 'id'
	| 'name'
	| 'size'
	| 'maxY'
	| 'scaling'
> {
	/** The background image of the chat room; must be in `jpg` format */
	image: `${string}.jpg`;
	/** Info about who owns the asset(s) */
	ownership: {
		/** Same as author of git commits present in PR, has responsibility for this asset */
		responsibleContributor: string;
		/**
		 * Legal info about the images
		 * If there are multiple sources used, specify this multiple times.
		 * If author gave you express permission to use images, but wishes to remain Anonymous, write "Anonymous" into relevant fields.
		 */
		licensing: LicensingInfo[];
	};
}

interface LicensingInfo {
	/**
	 * Which part of the asset this part of licensing applies to?
	 * @optional
	 * @example 'The chains', 'The main body of the asset without decorations', 'The decorations'
	 */
	part?: string;
	/**
	 * From where does the images come? An HTTP link to the source.
	 * Can be 'Self-Made' for assets you created yourself or 'Private' for images acquired by directly communicating with the creator.
	 */
	source: 'Self-Made' | 'Private' | `http://${string}` | `https://${string}` | `ftp://${string}`;
	/** Who is the copyright holder of the original images? The name they go by.*/
	copyrightHolder: string;
	/** Who edited the images to work for Pandora? It can be the same as `copyrightHolder`. */
	editedBy?: string;
	/**
	 * License; see possible licenses in ASSET_LICENSING.md file.
	 * Alternatively, write the name of the file with the license prefixed by `./` (e.g. `./LICENSE.md`)
	 */
	license: PandoraAssetLicense;
}

type PandoraAssetModificationPolicy =
	| `Free to change`
	| `Fixes and New uses, otherwise ask`
	| `Fixes and New uses`
	| `Fixes only, otherwise ask`
	| `Fixes only`
	| `Ask first`
	| `No Changes`;

type PandoraAssetReusePolicy =
	| `Free to use`
	| `Ask first`
	| `No reuse`;

type PandoraAssetLicense =
	// Pandora licenses
	| `Pandora-Use-Only`
	| `Pandora-Use-Only-NoModify`
	| `Pandora-Use-Only-Reserved`
	// Compatible licenses
	| `CC0`
	| `CC BY`
	| `CC BY-NC`
	| `CC BY-SA`
	| `GPL-3.0`
	| `LGPL-3.0`
	| `MIT`
	// Custom license
	| `./${string}`
	// Public Domain
	| `Public Domain`;
