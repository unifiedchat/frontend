import type {AppProps} from 'next/app'

// Layout Components
import Sidebar from "../layout/sidebar";

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Global Styles
import '../styles/globals.css'

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <Sidebar/>

            <Component {...pageProps} />
        </div>
    )
}
