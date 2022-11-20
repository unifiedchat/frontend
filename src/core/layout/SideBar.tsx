import {HomeMax, HomeMini, Settings, Twitter} from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Typography} from "@mui/material";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import TokenService from "../../services/TokenService";
import Button from "@mui/material/Button";

//https://mui.com/material-ui/material-icons

export default function SideBar({children}: { children: ReactNode }) {
    const router = useRouter();
    const [token, setToken] = useState<string>("");
    const clsName =
        "text-4xl text-white hover:rotate-[360deg] transition-all duration-300  ease-in-out";
    const routers = [
        {
            name: "Home",
            icon: <HomeIcon className={clsName}/>,
            path: "/",
        },
        {
            name: "Youtube",
            icon: <YouTubeIcon className={clsName}/>,
            href: "/youtube",
        },
        {
            name: "Twitch",
            icon: <Twitter className={clsName}/>,
            href: "/twitch",
        },
    ];

    function redirectToPage(page: string) {
        router.push(page);
    }

    useEffect(() => {
        const accessToken = TokenService.getToken();

        if (accessToken) setToken(accessToken);
    }, []);

    return (
        <div>
            <div className="flex justify-between w-72 h-full duration-300 fixed left-0 flex-col bg-[#131c2e]">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-center items-center h-24 w-full cursor-pointer">
                        <Image
                            src="https://avatars.githubusercontent.com/u/118222787?s=200&v=4"
                            alt="asd"
                            className="flex w-12 h-12 rounded-full"
                            width={200}
                            height={200}
                        />
                        <Typography variant="h5" className="text-white ml-4">
                            UnifiedChat
                        </Typography>
                    </div>

                    <div className="flex justify-center flex-col gap-4 mt-6 w-full">
                        {routers.map((r, index) => (
                            <div
                                className={`p-6 flex items-center w-30 h-8 hover:bg-[#20345a] cursor-pointer ` + (r.path === router.pathname ? "bg-[#20345a]" : "")}
                                key={index}
                            >
                                <div className="text-center">{r.icon}</div>
                                <div>
                                    <h1 className="text-white ml-2 hover:none lg:flex hidden">
                                        {r.name}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {token && (
                    <div
                        className="flex w-full items-center justify-center h-14 cursor-pointer"
                        onClick={() => redirectToPage("login")}
                    >
                        <Button variant="contained" color="primary" fullWidth={true}>
                            Login
                        </Button>
                    </div>
                )}

                {!token && (
                    <div
                        className="flex items-center cursor-pointer p-4"
                        onClick={() => redirectToPage("profile")}
                    >
                        <div className="flex justify-between w-full items-center mx-2">
                            <div className="flex items-center w-full">
                                <Image
                                    src="https://avatars.githubusercontent.com/u/14241866?v=4"
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <Typography variant="h6" className="text-white !font-normal ml-2">
                                    Risy
                                </Typography>
                            </div>

                            <Settings className={clsName + " !text-3xl"}/>
                        </div>
                    </div>
                )}
            </div>

            <div className="ml-20">{children}</div>
        </div>
    );
}
