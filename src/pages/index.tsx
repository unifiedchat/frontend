import Head from 'next/head'
import {Typography} from "@mui/material";

export default function Home() {
    function handleLogin() {
        const URL = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http://localhost:3001/auth/youtube/callback&scope=https://www.googleapis.com/auth/youtube.readonly&client_id=918708795391-kapslmfl70k5rgrsm30819sugd6g0vli.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow&access_type=offline&include_granted_scopes=true"

        window.open(URL, "_blank")
    }

    return (
        <div>
            <Head>
                <title>UnifiedChat - Home Page</title>
                <meta name="description" content="multiple stream chat platform"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <main className="flex flex-col justify-center items-center h-[100vh] w-full text-black">
                <Typography variant="h3">
                    Create Connection for live chat of youtube
                </Typography>
            </main>
        </div>
    )
}
