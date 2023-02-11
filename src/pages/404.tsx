import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;

		router.push("/");
	}, [router.isReady]);

	return (
		<div className="flex justify-center items-center h-[100vh] text-3xl">
			<h1>Not found.</h1>
		</div>
	);
}

NotFound.getLayout = (page: NextPage) => page;
