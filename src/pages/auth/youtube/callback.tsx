import { useRouter } from "next/router";
import { useEffect } from "react";
import { createConnectionForYoutube } from "../../../services/ApiService";
import catchMessage from "@core/utils/catchMessage";
import toast from "react-hot-toast";

export default function GoogleCallback() {
	const router = useRouter();
	const { code } = router.query;

	useEffect(() => {
		if (code) {
			createConnectionForYoutube(code as string)
				.then(() => {
					toast.success("Successfully connected to Youtube", {
						position: "bottom-center",
						duration: 3000,
					});
				})
				.catch(catchMessage);
		}
	}, [code]);

	return (
		<h1 className="flex justify-center items-center h-[100vh]">
			Giriş yapılıyor...
		</h1>
	);
}
