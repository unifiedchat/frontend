import {NextComponentType} from "next";
import {AppProps} from "next/app";

// Layout Components
import SideBar from "../@core/layout/SideBar";

// Component Imports
import NotSupported from "./not-supported";

// ** Third Party Import
import {Toaster} from "react-hot-toast";

// Font Awesome Styles Import
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Global Styles
import "../styles/globals.css";
import {useAuth} from "../hooks/useAuth";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {AuthProvider} from "../context/AuthContext";
import {getMe} from "@services/ApiService";

type ExtendedAppProps = AppProps & {
    Component: NextComponentType & {
        getLayout?: (page: any) => JSX.Element;
    };
    pageProps: any;
};

export default function App({Component, pageProps}: ExtendedAppProps) {
    const {isAuth, setIsAuth} = useAuth();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    let getLayout = Component.getLayout || ((page: any) => <SideBar>{page}</SideBar>)

    useEffect(() => {
        if (!router.isReady) return;

        getMe().then(() => {
            setIsAuth(true);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            router.push("/login");
            setLoading(false);
        });
    }, [])

    return (
        <AuthProvider>
            <div>
                {getLayout(<Component {...pageProps} />)}

                <Toaster/>
            </div>

            {/*<div className="lg:hidden flex w-full h-[100vh]">*/}
            {/*    <NotSupported/>*/}
            {/*</div>*/}
        </AuthProvider>
    );
}
