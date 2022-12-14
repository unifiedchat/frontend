import {Modal, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SideBar from "@views/settings/bar";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Settings() {
    const router = useRouter();

    return (
        <Modal
            open={true}
            onClose={() => router.push("/")}
            className="flex items-center justify-center"
        >
            <SideBar/>
        </Modal>
    )
}