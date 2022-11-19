import { NextPage } from "next";
import Authentication from "../@core/components/Auth";

export default function Register() {
	return <Authentication register={true} />;
}

Register.getLayout = (page: NextPage) => page;
