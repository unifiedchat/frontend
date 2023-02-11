import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAuth} from "../hooks/useAuth";

export default function NotFound() {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        if (!router.isReady) return;

        if (!auth.loading && auth.user === null && !window.localStorage.getItem('userData')) {
            if (router.asPath !== '/') {
                router.replace({
                    pathname: '/login',
                    query: {returnUrl: router.asPath}
                })
            }
        } else {
            router.replace('/')
        }
    }, [router.isReady]);

    return (
        <div className="flex justify-center items-center h-[100vh] text-3xl">
            <h1>Not found.</h1>
        </div>
    );
}

NotFound.getLayout = (page: NextPage) => page;
