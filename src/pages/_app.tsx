import {NextComponentType, NextPage, NextPageContext} from "next";
import {AppProps} from "next/app";

// Layout Components
import SideBar from "../@core/layout/SideBar";

// Component Imports
import NotSupported from "./not-supported";

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// Font Awesome Styles Import
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Global Styles
import '../styles/globals.css'

type ExtendedAppProps = AppProps & {
    Component: NextComponentType & {
        getLayout?: (page: any) => JSX.Element
    };
    pageProps: any;
}

export default function App({Component, pageProps}: ExtendedAppProps) {
    const getLayout = Component.getLayout || ((page) => <SideBar>{page}</SideBar>);

    return (
        <div>
            <div className="lg:block hidden">
                {getLayout(<Component {...pageProps} />)}
                <Toaster/>
            </div>

            <div className="lg:hidden flex w-full h-[100vh]">
                <NotSupported/>
            </div>
        </div>
    )
}
