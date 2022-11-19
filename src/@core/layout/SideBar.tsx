import { Twitter } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import TokenService from '../../services/TokenService';

//https://mui.com/material-ui/material-icons

export default function SideBar({children}: { children: ReactNode }) {
    const router = useRouter();
    const [token, setToken] = useState<string>("");
    const clsName = "text-4xl text-white hover:rotate-[360deg] transition-all duration-300  ease-in-out";
    const routers = [
        {
            name: "Youtube",
            icon: <YouTubeIcon className={clsName}/>,
            href: "/youtube"
        },
        {
            name: "Twitch",
            icon: <Twitter className={clsName}/>,
            href: "/twitch"
        },
    ]

    function redirectToPage(page: string) {
        router.push(page)
    }

    useEffect(() => {
        const accessToken = TokenService.getToken();

        if (accessToken) setToken(accessToken);
    }, [])

    return (
        <div>
            <div
                className="flex justify-between lg:w-60 w-20 h-full duration-300 fixed left-0 flex-col bg-[#131c2e]">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-center items-center border-b border-gray-700 h-14 w-full">
                        <Image src="https://avatars.githubusercontent.com/u/118222787?s=200&v=4" alt="asd"
                             className="flex w-10 h-10 rounded-full" width={200} height={200}/>
                        <Typography variant="h5" className="text-white ml-2">UnifiedChat</Typography>
                    </div>

                    <div className="flex justify-center flex-col gap-4 mt-6 w-full">
                        {routers.map((router, index) => (
                            <div
                                className="p-6 flex items-center lg:rounded-r-xl w-30 h-8 hover:bg-[#20345a] cursor-pointer"
                                key={index}>
                                <div className="text-center">
                                    {router.icon}
                                </div>
                                <div>
                                    <h1 className="text-white ml-2 hover:none lg:flex hidden">{router.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {!token && (
                    <div
                        className="flex items-center justify-center border-t border-gray-700 h-14 cursor-pointer hover:bg-[#20345a]"
                        onClick={() => redirectToPage("login")}>
                        <PeopleAltIcon className="text-white"/>
                        <span className="text-white ml-2 lg:flex hidden">Login</span>
                    </div>
                )}

                {token && (
                    <div
                        className="flex items-center justify-center border-t border-gray-700 h-14 cursor-pointer hover:bg-[#20345a]"
                        onClick={() => redirectToPage("profile")}>
                        <Image src="https://avatars.githubusercontent.com/u/14241866?v=4" alt="Avatar" width={40} height={40} className="rounded-full" />
                        <span className="text-white ml-2 lg:flex hidden">Risy</span>
                    </div>
                )}
            </div>

            <div className="ml-20">
                {children}
            </div>
        </div>
    );
}