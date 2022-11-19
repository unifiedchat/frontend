import type {AppProps} from 'next/app'

// Layout Components
import Sidebar from "../@core/layout/sidebar";

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

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <div className="lg:block hidden">
                <Sidebar/>

                <Component {...pageProps} />
                <Toaster/>
            </div>

            <div className="lg:hidden flex w-full h-[100vh]">
                <NotSupported/>
            </div>
        </div>
    )
}
