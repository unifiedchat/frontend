export {};

declare global {
	type AuthValuesType = {
		isAuth: boolean;
		setIsAuth: (value: boolean) => void;
		user: User | null;
		loading: boolean;
	}

	interface User {
		id: number;
		access_token: string;
		permission: number;
	}

	interface IAuth {
		username: string;
		password: string;
		mail?: string;
	}

	interface IResponseData {
		message: string | any[];
		access_token?: string;
	}

	interface IResponse {
		data: IResponseData;
	}

	interface IRResponseError {
		statusCode: number;
		message: string;
		response: IResponse;
	}
}
