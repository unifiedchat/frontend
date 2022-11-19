import { useRouter } from "next/router";
import { useEffect } from "react";
import { createConnectionForYoutube } from "../../../services/ApiService";

export default function GoogleCallback() {
	const router = useRouter();
	const { code } = router.query;

	useEffect(() => {
		if (code) {
			createConnectionForYoutube(code as string)
				.then(() => {
					alert("Bağlantı başarılı.");
				})
				.catch(() => {
					alert("Bağlantı başarısız.");
				});
		}
	}, [code]);

	return (
		<h1 className="flex justify-center items-center h-[100vh]">
			Giriş yapılıyor...
		</h1>
	);
}
