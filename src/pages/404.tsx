import {NextPage} from "next";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, []);

    return (
        <div className="flex justify-center items-center h-[100vh] text-3xl">
            <h1>Not found.</h1>
        </div>
    )
}

NotFound.getLayout = (page: NextPage) => page;