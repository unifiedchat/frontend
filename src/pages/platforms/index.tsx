import PlatformCard from '@views/platforms/card';
import config from "@core/config";

export default function Platforms() {
    const platforms = [
        {
            name: 'Youtube',
            icon: 'youtube',
            path: config.REDIRECT_URLS.YOUTUBE,
        },
    ]

    return (
        <div className="flex flex-wrap justify-center items-center h-[100vh]">
           <div className="flex flex-wrap justify-center gap-4">
               {platforms.map((platform, index) => (
                   <PlatformCard key={index} platform={platform}/>
               ))}
           </div>
        </div>
    )
}