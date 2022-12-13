import {useRouter} from "next/router";
import Tilt from 'react-parallax-tilt';

interface Platform {
    name: string;
    icon: string;
    path: string;
}

export default function PlatformCard({platform}: { platform: Platform }) {
    const router = useRouter();

    function redirectToPage(page: string) {
        router.push(page);
    }

    return (
        <Tilt>
        <div className="flex justify-between items-center w-72 h-16 bg-primary text-white rounded-lg p-2 px-4 cursor-pointer"
             onClick={() => redirectToPage(platform.path)}>
            <div>
                <img src={`../assets/logo/${platform.icon}.svg`} alt="asd"
                     className="w-10 h-10"/>
            </div>
            <div>
                <h1>{platform.name}</h1>
            </div>
        </div>
        </Tilt>
    )
}