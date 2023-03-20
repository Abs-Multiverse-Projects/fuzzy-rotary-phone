import { SocialAccountResult, UniversalSearchResponse } from "psn-api";

export interface PsnAuthResponse {
	success: boolean;
	auth: Auth;
}

export interface PsnTitlesResponse {
	success: boolean;
	titles: UserTitlesResponse;
}

export interface PsnUserResponse {
	success: boolean;
	user: UniversalSearchResponse<SocialAccountResult>;
}

export interface PsnProfileResponse<Type> {
	success: boolean;
	profile: Type;
}

export interface PsnFriendsListResponse<Type> {
	success: boolean;
	friendsList: Type;
}

export interface Auth {
	accessToken: string;
	expiresIn: number;
	idToken: string;
	refreshToken: string;
	refreshTokenExpiresIn: number;
	scope: string;
	tokenType: string;
}

export interface Titles {
	trophyTitles: TrophyTitle[];
	totalItemCount: number;
}

export interface TrophyTitle {
	npServiceName: NPServiceName;
	npCommunicationId: string;
	trophySetVersion: string;
	trophyTitleName: string;
	trophyTitleIconUrl: string;
	trophyTitlePlatform: TrophyTitlePlatform;
	hasTrophyGroups: boolean;
	definedTrophies: NedTrophies;
	progress: number;
	earnedTrophies: NedTrophies;
	hiddenFlag: boolean;
	lastUpdatedDateTime: Date;
	trophyTitleDetail?: string;
}

export interface NedTrophies {
	bronze: number;
	silver: number;
	gold: number;
	platinum: number;
}

export enum NPServiceName {
	Trophy = "trophy",
	Trophy2 = "trophy2",
}

export enum TrophyTitlePlatform {
	Ps4 = "PS4",
	Ps5 = "PS5",
}

export interface UserTitlesResponse {
	/** The list of games played by the user. */
	trophyTitles: TrophyTitle[];
	/** The number of `TrophyTitle` entities returned from the PSN API. */
	totalItemCount: number;
	nextOffset?: number;
	previousOffset?: number;
	error?: {
		code: number;
		message: string;
		referenceId: string;
	};
}
