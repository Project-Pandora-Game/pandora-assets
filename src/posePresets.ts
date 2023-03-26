import { ArmsPose, AssetsPosePresets } from 'pandora-common';
import { AllBones } from './bones';

export const POSE_PRESETS: AssetsPosePresets<AllBones> =
	[
		{
			category: 'Arms (front)',
			poses: [
				{
					name: 'Hanging side',
					bones: {
						arm_r: 78,
						arm_l: 78,
						elbow_r: 9,
						elbow_l: 9,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'forward',
					},
				},
				{
					name: 'Hanging front 1',
					bones: {
						arm_r: 74,
						arm_l: 74,
						elbow_r: 22,
						elbow_l: 22,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Hanging front 2',
					bones: {
						arm_r: 62,
						arm_l: 62,
						elbow_r: 37,
						elbow_l: 37,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Touching hips 1',
					bones: {
						arm_r: 19,
						arm_l: 19,
						elbow_r: 112,
						elbow_l: 112,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Touching hips 2',
					bones: {
						arm_r: 26,
						arm_l: 26,
						elbow_r: 97,
						elbow_l: 97,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				// TODO: right side only poses can break in combination with back poses
				{
					name: 'Right hand over mouth',
					bones: {
						arm_r: 90,
						elbow_r: 161,
					},
					rightArm: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Touching neck',
					bones: {
						arm_r: 70,
						arm_l: 56,
						elbow_r: 157,
						elbow_l: 162,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Casual',
					bones: {
						arm_r: 82,
						arm_l: 48,
						elbow_r: 66,
						elbow_l: 66,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Waving 1',
					bones: {
						arm_r: 19,
						arm_l: 72,
						elbow_r: -113,
						elbow_l: 20,
					},
					arms: { position: ArmsPose.FRONT },
					rightArm: { rotation: 'up' },
					leftArm: { rotation: 'down' },
				},
				{
					name: 'Waving 2',
					bones: {
						arm_r: 19,
						arm_l: 72,
						elbow_r: -98,
						elbow_l: 20,
					},
					arms: { position: ArmsPose.FRONT },
					rightArm: { rotation: 'up' },
					leftArm: { rotation: 'down' },
				},
				// TODO: Consider way to switch front/back view of just the hand (maybe together with option to show fists)
				{
					name: 'Covering eyes',
					bones: {
						arm_r: -15,
						arm_l: -15,
						elbow_r: -137,
						elbow_l: -137,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Covered eyes peeking',
					bones: {
						arm_r: -15,
						arm_l: -2,
						elbow_r: -137,
						elbow_l: -137,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Covered eyes peeking 2',
					bones: {
						arm_r: -15,
						arm_l: -33,
						elbow_r: -137,
						elbow_l: -137,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Hand on ear',
					bones: {
						arm_r: 79,
						arm_l: 6,
						elbow_r: 6,
						elbow_l: -137,
					},
					arms: { position: ArmsPose.BACK },
					rightArm: { rotation: 'forward' },
					leftArm: { rotation: 'up' },
				},
				{
					name: 'Wrists crossed front',
					bones: {
						arm_r: 82,
						arm_l: 82,
						elbow_r: 55,
						elbow_l: 55,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Arms folded over chest',
					bones: {
						arm_r: 70,
						arm_l: 79,
						elbow_r: 109,
						elbow_l: 108,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Covering breasts',
					bones: {
						arm_r: 70,
						arm_l: 70,
						elbow_r: 129,
						elbow_l: 130,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Touching sex 1',
					bones: {
						arm_r: 66,
						arm_l: 53,
						elbow_r: 42,
						elbow_l: 75,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Touching sex 2',
					bones: {
						arm_r: 50,
						arm_l: 50,
						elbow_r: 78,
						elbow_l: 78,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Covering sex 1',
					bones: {
						arm_r: 64,
						arm_l: 64,
						elbow_r: 66,
						elbow_l: 64,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Covering sex 2',
					bones: {
						arm_r: 74,
						arm_l: 74,
						elbow_r: 43,
						elbow_l: 43,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
				{
					name: 'Covering breasts & sex',
					bones: {
						arm_r: 43,
						arm_l: 64,
						elbow_r: 144,
						elbow_l: 64,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'down',
					},
				},
			],
		},
		{
			category: 'Arms (back)',
			poses: [
				{
					name: 'Hands behind',
					bones: {
						arm_r: 74,
						arm_l: 74,
						elbow_r: 43,
						elbow_l: 43,
					},
					arms: {
						position: ArmsPose.BACK,
						rotation: 'down',
					},
				},
				{
					name: 'Wrists crossed behind',
					bones: {
						arm_r: 82,
						arm_l: 82,
						elbow_r: 55,
						elbow_l: 55,
					},
					arms: {
						position: ArmsPose.BACK,
						rotation: 'down',
					},
				},
				{
					name: 'Arms folded behind',
					bones: {
						arm_r: 79,
						arm_l: 79,
						elbow_r: 98,
						elbow_l: 98,
					},
					arms: {
						position: ArmsPose.BACK,
						rotation: 'down',
					},
				},
				{
					name: 'Elbows together',
					bones: {
						arm_r: 104,
						arm_l: 104,
						elbow_r: -4,
						elbow_l: -4,
					},
					arms: {
						position: ArmsPose.BACK,
						rotation: 'forward',
					},
				},
				{
					name: 'Covering butt',
					bones: {
						arm_r: 100,
						arm_l: 98,
						elbow_r: -11,
						elbow_l: -6,
					},
					arms: {
						position: ArmsPose.BACK,
						rotation: 'up',
					},
				},
				//  TODO: Hands are under the back hair; arms need to be split at the elbows most likely
				/* {
					name: 'Hands behind head',
					bones: {
						arm_r: -45,
						arm_l: -45,
						elbow_r: -119,
						elbow_l: -119,
					},
					arms: { position: ArmsPose.BACK },
				}, */
			],
		},
		{
			category: 'Arms (spread)',
			poses: [
				{
					name: 'Up',
					bones: {
						arm_r: -70,
						arm_l: -70,
						elbow_r: -20,
						elbow_l: -20,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Up/touching',
					bones: {
						arm_r: -74,
						arm_l: -74,
						elbow_r: -43,
						elbow_l: -43,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Raised',
					bones: {
						arm_r: -25,
						arm_l: -25,
						elbow_r: -60,
						elbow_l: -60,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Spread/Open',
					bones: {
						arm_r: -40,
						arm_l: -40,
						elbow_r: -11,
						elbow_l: -11,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'Spread/Open wide',
					bones: {
						arm_r: -22,
						arm_l: -22,
						elbow_r: -11,
						elbow_l: -11,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'up',
					},
				},
				{
					name: 'T-Pose',
					bones: {
						arm_r: 0,
						arm_l: 0,
						elbow_r: 0,
						elbow_l: 0,
					},
					arms: {
						position: ArmsPose.FRONT,
						rotation: 'forward',
					},
				},
			],
		},
		{
			category: 'Legs (straight)',
			poses: [
				{
					name: 'Normal',
					bones: {
						leg_r: 0,
						leg_l: 0,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Closed',
					bones: {
						leg_r: 2,
						leg_l: 2,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Crossed',
					bones: {
						leg_r: 6,
						leg_l: 6,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Balancing',
					bones: {
						leg_r: 4,
						leg_l: 4,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Spread minimally',
					bones: {
						leg_r: -3,
						leg_l: -3,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Spread slightly',
					bones: {
						leg_r: -10,
						leg_l: -10,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Spread',
					bones: {
						leg_r: -18,
						leg_l: -18,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Spread wide',
					bones: {
						leg_r: -30,
						leg_l: -30,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Spread extreme',
					bones: {
						leg_r: -50,
						leg_l: -50,
						sitting: 0,
						kneeling: 0,
					},
				},
				{
					name: 'Full split',
					bones: {
						leg_r: -85,
						leg_l: -85,
						sitting: 0,
						kneeling: 0,
					},
				},
			],
		},
		{
			category: 'Legs (kneeling) [experimental]',
			poses: [
				{
					name: 'Kneeling',
					bones: {
						leg_r: 0,
						leg_l: 0,
						sitting: 0,
						kneeling: 180,
					},
				},
				{
					name: 'Kneeling spread slightly',
					bones: {
						leg_r: -7,
						leg_l: -7,
						sitting: 0,
						kneeling: 180,
					},
				},
				{
					name: 'Kneeling spread',
					bones: {
						leg_r: -16,
						leg_l: -16,
						sitting: 0,
						kneeling: 180,
					},
				},
				{
					name: 'Kneeling spread wide',
					bones: {
						leg_r: -25,
						leg_l: -25,
						sitting: 0,
						kneeling: 180,
					},
				},
			],
		},
		{
			category: 'Legs (sitting) [experimental]',
			poses: [
				{
					name: 'Sitting',
					bones: {
						leg_r: 0,
						leg_l: 0,
						sitting: 180,
						kneeling: 0,
					},
				},
				{
					name: 'Sitting spread slightly',
					bones: {
						leg_r: -7,
						leg_l: -7,
						sitting: 180,
						kneeling: 0,
					},
				},
				{
					name: 'Sitting spread',
					bones: {
						leg_r: -16,
						leg_l: -16,
						sitting: 180,
						kneeling: 0,
					},
				},
				{
					name: 'Sitting spread wide',
					bones: {
						leg_r: -25,
						leg_l: -25,
						sitting: 180,
						kneeling: 0,
					},
				},
			],
		},
		{
			category: 'Toes [experimental]',
			poses: [
				{
					name: 'No tiptoeing',
					bones: {
						tiptoeing: 0,
					},
				},
				{
					name: 'Slight tiptoeing',
					bones: {
						tiptoeing: 60,
					},
				},
				{
					name: 'Tiptoeing',
					bones: {
						tiptoeing: 110,
					},
				},
				{
					name: 'Extreme tiptoeing',
					bones: {
						tiptoeing: 180,
					},
				},

			],
		},
	];
