import {useState} from "react";
import TabButton from "@views/settings/tab-button";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import PasswordChangeTab from "@views/settings/tabs/password-change";

export default function SideBar() {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = [
        {
            name: "Account",
        },
        {
            name: "Password Change",
        },
    ]

    return (
        <div className="flex bg-[#031C30] w-[50rem] h-[30rem]">
            <div className="flex flex-col gap-y-1">
                {tabs.map((tab, index) => (
                    <TabButton index={index} key={index} text={tab.name} setSelected={setSelectedTab} tabIndex={selectedTab}/>
                ))}
            </div>


            {selectedTab === 1 && (
                <PasswordChangeTab />
            )}
        </div>
    );
}