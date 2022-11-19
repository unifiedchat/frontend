import {Typography} from "@mui/material";

export default function NotSupported() {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <Typography variant="h3">Not Supported</Typography>
            <span className="mt-2 text-base">Please download <span className="text-blue-700 cursor-pointer">mobile application</span></span>
        </div>
    )
}