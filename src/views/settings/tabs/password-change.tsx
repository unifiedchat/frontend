import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function PasswordChangeTab() {
    return (
        <div className="p-4">
            <Typography variant="h5" className="text-white">
                Password and Authentication
            </Typography>

            <TextField
                placeholder={"Current Password"}
                type={"password"}
                className="w-full mt-4"
                sx={{ input: { color: 'white', border: "1px solid white" } }}
            ></TextField>

            <TextField
                placeholder={"Current Password"}
                type={"password"}
                className="w-full mt-4 !text-white"
                sx={{ input: { color: 'white' } }}
            ></TextField>

            <Button variant="contained" color="primary" className="bg-blue-600 mt-4">
                Change Password
            </Button>
        </div>
    );
}