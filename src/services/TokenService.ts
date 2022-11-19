const Token = () => {
	const getToken = () => {
		return localStorage.getItem("accessToken");
	};

	const setToken = (token: string) => {
		return localStorage.setItem("accessToken", token);
	};

	const clearToken = () => {
		return localStorage.removeItem("accessToken");
	};

	return {
		getToken,
		setToken,
		clearToken,
	};
};

export default Token();
