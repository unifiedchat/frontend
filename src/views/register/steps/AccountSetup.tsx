import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faTwitch, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

function StepAccountSetup() {
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

    const platforms = [
        {
            name: "Facebook",
            icon: faFacebook,
            color: "blue-500",
        },
        {
            name: "Twitter",
            icon: faTwitter,
            color: "blue-400",
        },
        {
            name: "Instagram",
            icon: faInstagram,
            color: "pink-500",
        },
        {
            name: "TikTok",
            icon: faTiktok,
            color: "green-500",
        },
        {
            name: "YouTube",
            icon: faYoutube,
            color: "red-500",
        },
        {
            name: "Twitch",
            icon: faTwitch,
            color: "purple-500",
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-2 flex-wrap">
                <div>
                    <h1 className="text-lg font-semibold">
                        Select Platforms
                    </h1>

                    <p className="text-gray-500 text-base">
                        Select the platforms you want to connect to your account.
                    </p>
                </div>

                <div>
                    {selectedPlatforms.length > 0 && (
                        <button
                            onClick={() => {
                                setSelectedPlatforms([]);
                            }}
                            className="flex items-center gap-x-2 text-blue-400 hover:underline">
                            <span>Clear</span>
                        </button>
                    )}

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        {platforms.map((platform, index) => (
                            <div
                                onClick={() => {
                                    if (selectedPlatforms.includes(platform.name)) {
                                        setSelectedPlatforms(selectedPlatforms.filter((platformName) => platformName != platform.name));
                                    } else {
                                        setSelectedPlatforms([...selectedPlatforms, platform.name]);
                                    }
                                }}
                                key={index}
                                className={`flex items-center gap-x-2  w-30 h-12 px-4 py-2 border-2 border-[#2b2d33] cursor-pointer rounded-lg
                        ${selectedPlatforms.includes(platform.name) && "bg-[#2b2d33] text-white"} `}>

                                <div
                                    className={`w-8 h-8 rounded-full flex justify-center items-center bg-${platform.color}-100`}>
                                    <FontAwesomeIcon icon={platform.icon} className={`text-${platform.color}-500`}/>
                                </div>

                                <span className="text-base font-semibold">{platform.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepAccountSetup
