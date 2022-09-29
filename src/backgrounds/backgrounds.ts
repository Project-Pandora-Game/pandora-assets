import { DefineRoomBackground } from '../tools/roomDefinition';

const BACKGROUNDS: IntermediateRoomBackgroundDefinition[] = [
];

export function LoadBackgrounds() {
	for (const background of BACKGROUNDS) {
		DefineRoomBackground(background);
	}
}
