import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function PasswordChangeTab() {
    return (
        <div>
            <div className="flex flex-col !gap-y-4">
                <Typography variant="h5" className="text-white">
                    Password and Authentication
                </Typography>

                <TextField
                    placeholder={"Current Password"}
                    type={"password"}
                    className="w-full"
                    sx={{input: {color: 'white'}}}
                ></TextField>

                <TextField
                    placeholder={"Current Password"}
                    type={"password"}
                    className="w-full !text-white"
                    sx={{input: {color: 'white'}}}
                ></TextField>

                <Button variant="contained" color="primary" className="bg-blue-600">
                    Change Password
                </Button>
            </div>
        </div>
    );
}