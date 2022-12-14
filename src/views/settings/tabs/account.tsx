import {Typography} from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AccountTab() {
    return (
        <div className="flex flex-col gap-y-2 h-full w-full">
            <div className="flex items-center">
                <Image
                    src="https://avatars.dicebear.com/api/initials/eren-risy.svg"
                    alt={"Eren"}
                    className="rounded-full"
                    width={80}
                    height={80}
                ></Image>

                <Typography variant="h6" className="text-white ml-2">
                    Eren Risy
                </Typography>
            </div>

            <div className="flex items-end justify-end h-full w-full">
                    <Button variant="outlined" color="error">
                    Delete Account
                </Button>
            </div>
        </div>
    );
}