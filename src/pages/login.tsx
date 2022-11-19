import { NextPage } from "next";
import Authentication from "../@core/components/Auth";

export default function Login() {
	return <Authentication register={false} />;
}

Login.getLayout = (page: NextPage) => page;
