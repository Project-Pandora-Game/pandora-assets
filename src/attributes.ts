/* eslint-disable semi-style */

export type AttributeNames =
	// Bodypart attributes
	| 'Body' // The body itself
	// Attachment points from items
	| 'Collar' // Any collar
	| 'Collar_front_ring' // Presence of front ring on a collar
	| 'Shoe_top_strap' // Presence of a strap to hold a shoe in place
	| 'Wrist_cuffs_chain' // Presence of chains on any wrist cuffs
	| 'Ankle_cuffs_chain' // Presence of chains on any ankle cuffs
	// Locks
	| 'Lock'
	;
