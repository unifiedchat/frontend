import {Typography} from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AccountTab() {
    return (
        <div className="flex flex-col !gap-y-2 h-full w-full">
            <div className="flex items-center">
                <Image
                    src="https://avatars.dicebear.com/api/initials/eren-risy.svg"
                    alt={"Eren"}
                    className="rounded-full"
                    width={80}
                    height={80}
                ></Image>

                <div>
                    <Typography variant="h6" className="text-white !ml-2">
                        Eren Risy
                    </Typography>

                    <span className="text-gray !ml-2">
                        eren@siktir.et
                    </span>
                </div>
            </div>

            <div className="flex items-end h-full w-full">
                <div className="flex flex-col !gap-y-2">
                    <Typography variant="h5" className="text-white">
                        Account Delete
                    </Typography>

                    <div>
                        <p className="text-gray">
                            Disabling your account will prevent you from logging in and using the service.
                        </p>
                    </div>

                    <div>
                        <Button variant="outlined" color="error">
                            Delete Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}