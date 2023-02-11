const Token = () => {
	const getToken = () => {
		if (typeof window === "undefined") return;

		return localStorage.getItem("accessToken");
	};

	const setToken = (token: string) => {
		if (typeof window === "undefined") return;

		return localStorage.setItem("accessToken", token);
	};

	const clearToken = () => {
		if (typeof window === "undefined") return;

		return localStorage.removeItem("accessToken");
	};

	return {
		getToken,
		setToken,
		clearToken,
	};
};

export default Token();
