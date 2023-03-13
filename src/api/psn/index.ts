import {
	PsnAuthResponse,
	PsnFriendsListResponse,
	PsnProfileResponse,
	PsnTitlesResponse,
	PsnUserResponse,
} from "api/psn/types";
import { CONSTANTS } from "api/constants";
import {
	GetUserFriendsAccountIdsResponse,
	ProfileFromAccountIdResponse,
	ProfileFromUserNameResponse,
} from "psn-api";

class PsnApi {
	private _psnAuth!: PsnAuthResponse;

	constructor(initialAuth: PsnAuthResponse) {
		this.psnAuth = initialAuth;
	}

	get psnAuth(): PsnAuthResponse {
		return this._psnAuth;
	}

	set psnAuth(newAuth: PsnAuthResponse) {
		this._psnAuth = newAuth ?? this._psnAuth;
	}

	static async authenticate(npsso: string): Promise<PsnAuthResponse | null> {
		if (!npsso === import.meta.env.VITE_NPSSO) return null;
		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/auth/`, {
			method: "PUT",
		});
		const data: PsnAuthResponse = await response.json();
		return data;
	}

	async refreshAuth(): Promise<PsnAuthResponse> {
		const body = JSON.stringify({
			refreshToken: this.psnAuth.auth.refreshToken,
			hello: "hiiii",
		});

		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/refresh-auth/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		});
		const data: PsnAuthResponse = await response.json();
		return data;
	}

	async getTitles(accountId: string): Promise<PsnTitlesResponse> {
		const body = JSON.stringify({ auth: this.psnAuth.auth, user: accountId });
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		};
		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/titles/`, options);
		const data: PsnTitlesResponse = await response.json();
		return data;
	}

	// pass in a username string. if have only accountId, call getProfile and pass in accountId to get username
	async getUser(username: string): Promise<PsnUserResponse> {
		const body = JSON.stringify({ auth: this.psnAuth.auth, user: username });
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		};
		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/user/`, options);
		const data: PsnUserResponse = await response.json();
		return data;
	}

	// pass in user name – for accountId, use getProfileFromAccountId
	async getProfileFromUserName(
		username: string
	): Promise<PsnProfileResponse<ProfileFromUserNameResponse>> {
		const body = JSON.stringify({ auth: this.psnAuth.auth, user: username });
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		};
		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/profile/`, options);
		const data: PsnProfileResponse<ProfileFromUserNameResponse> =
			await response.json();
		return data;
	}

	async getProfileFromAccountId(
		accountId: string
	): Promise<PsnProfileResponse<ProfileFromAccountIdResponse>> {
		const body = JSON.stringify({ auth: this.psnAuth.auth, user: accountId });
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		};
		const response = await fetch(`${CONSTANTS.PSN_BASE_URL}/profile/`, options);
		const data: PsnProfileResponse<ProfileFromAccountIdResponse> =
			await response.json();
		return data;
	}

	// returns list of friends' accountIds (can query each with getProfileFromAccountId)
	async getFriendsList(
		accountId: string
	): Promise<PsnFriendsListResponse<GetUserFriendsAccountIdsResponse>> {
		const body = JSON.stringify({ auth: this.psnAuth.auth, user: accountId });
		const options: RequestInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body,
		};
		const response = await fetch(
			`${CONSTANTS.PSN_BASE_URL}/friends-list/`,
			options
		);
		const data: PsnFriendsListResponse<GetUserFriendsAccountIdsResponse> =
			await response.json();
		return data;
	}
}

export default PsnApi;
