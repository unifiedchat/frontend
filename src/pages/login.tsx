import Authentication from "@core/components/Auth";
import { NextPage } from "next";

export default function Login() {
	return <Authentication register={false} />;
}

Login.getLayout = (page: NextPage) => page;
