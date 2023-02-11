import Authentication from "../@core/components/Auth";
import { NextPage } from "next";
import {useEffect} from "react";
import {getMe} from "@services/ApiService";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

export default function Login() {
	const router = useRouter();

	useEffect(() => {
		getMe().then(() => {
			router.push("/");
		}).catch(() => {});
	}, []);

	return <Authentication register={false} />;
}

Login.getLayout = (page: NextPage) => page;
