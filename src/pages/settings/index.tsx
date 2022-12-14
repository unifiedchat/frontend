import {Modal, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SideBar from "@views/settings/bar";
import {useState} from "react";

export default function Settings() {
    const [open, setOpen] = useState(true);

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            className="flex items-center justify-center w-full"
        >
            <SideBar/>
        </Modal>
    )
}