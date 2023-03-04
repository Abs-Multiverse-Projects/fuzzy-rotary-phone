export type Platform = "ps" | "steam" | "xbox";

export interface AppContext {
	signedIn: boolean;
	setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
