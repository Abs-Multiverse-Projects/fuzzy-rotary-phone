export type Platform = "PS5" | "PS4" | "steam" | "xbox";

export interface AppContext {
	signedIn: boolean;
	setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
	userName: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
}
