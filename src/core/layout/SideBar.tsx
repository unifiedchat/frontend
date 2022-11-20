import {Typography} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import TokenService from "@services/TokenService";

// ** Icons
import HomeIcon from 'public/assets/icons/home.svg';
import SettingsIcon from 'public/assets/icons/settings.svg';
import AppIcon from 'public/assets/icons/app.svg';
import SignupIcon from 'public/assets/icons/signup.svg';
import AppStoreIcon from 'public/assets/icons/app-store.svg';
import ChatIcon from 'public/assets/icons/chat.svg';
import UserIcon from 'public/assets/icons/user.svg';

const routers = [
    {
        name: "Home",
        icon: HomeIcon,
        path: "/",
    },
    {
        name: "Platforms",
        icon: AppIcon,
        path: "/platforms",
    },
    {
        name: "Comments",
        icon: ChatIcon,
        path: "/comments",
    },
    {
        name: "Mobile App",
        icon: AppStoreIcon,
        path: "/mobile-app",
    },
    {
        name: "Settings",
        icon: SettingsIcon,
        path: "/settings",
    },
];

export default function SideBar({children}: { children: ReactNode }) {
    const router = useRouter();
    const [token, setToken] = useState<string>("");

    function redirectToPage(page: string) {
        router.push(page);
    }

    useEffect(() => {
        const accessToken = TokenService.getToken();

        if (accessToken) setToken(accessToken);
    }, []);

    return (
        <div>
            <div className="flex justify-between w-72 h-full duration-300 fixed left-0 flex-col bg-navbar">
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

                    <div className="flex justify-center flex-col gap-4 mt-6 w-full p-4">
                        {routers.map((r, index) => (
                            <div
                                className={`flex items-center rounded-md w-30 !h-14 px-2 h-8 cursor-pointer ` + (r.path === router.pathname ? "bg-navbar-button" : "")}
                                key={index}
                                onClick={() => redirectToPage(r.path)}
                            >
                                <div
                                    className="text-4xl text-white hover:rotate-[360deg] transition-all duration-300 ease-in-out">
                                    <Image src={r.icon} alt={r.name}></Image>
                                </div>
                                <div>
                                    <Typography className="text-white font-normal text-lg">{r.name}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {!token && (
                    <div
                        className="flex items-center cursor-pointer p-4"
                        onClick={() => redirectToPage("login")}>

                        <div className="flex items-center p-1 px-2 rounded-lg bg-[#667A8A] w-full">
                            <Image src={SignupIcon} alt={"login-icon"}/>
                            <span className="text-white ml-2 text-lg">Login</span>
                        </div>
                    </div>
                )}

                {token && (
                    <div
                        className="flex items-center cursor-pointer p-4">

                        <div className="flex items-center justify-between p-1 px-2 rounded-lg bg-navbar-button w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center w-full" onClick={() => redirectToPage("profile")}>
                                    <Image
                                        src={UserIcon}
                                        alt="Avatar"
                                    />
                                    <Typography className="text-lg text-white !font-normal ml-2">
                                        Risy
                                    </Typography>
                                </div>

                                <Image src={SignupIcon} alt={"logout-icon"} onClick={() => redirectToPage("logout")}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="ml-20">{children}</div>
        </div>
    );
}
