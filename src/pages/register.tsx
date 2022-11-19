import Authentication from "@core/components/Auth";
import { NextPage } from "next";

export default function Register() {
	return <Authentication register={true} />;
}

Register.getLayout = (page: NextPage) => page;
