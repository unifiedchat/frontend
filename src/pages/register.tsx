import Authentication from "../@core/components/Auth";
import { NextPage } from "next";
import {useEffect} from "react";
import {getMe} from "@services/ApiService";
import {useRouter} from "next/router";

export default function Register() {
	const router = useRouter();

	useEffect(() => {
		getMe().then(() => {
			router.push("/");
		}).catch(() => {});
	}, []);

	return <Authentication register={true} />;
}

Register.getLayout = (page: NextPage) => page;
