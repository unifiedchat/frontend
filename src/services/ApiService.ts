import Http from "./HttpService";

export const createConnectionForYoutube = async (code: string) => {
	return await Http.Post("/connection/youtube", { code });
};

export const createUser = async (data: any) => {
	return await Http.Post("/auth/signup", data);
};

export const loginUser = async (data: any) => {
	return await Http.Post("/auth/login", data);
};

export const getMe = async () => {
	return await Http.Get("/user/@me");
}