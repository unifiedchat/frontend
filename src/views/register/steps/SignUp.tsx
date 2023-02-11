import TextField from "@mui/material/TextField";

function StepSignUp() {
    return (
        <div className="flex flex-col gap-4 max-w-lg">
            <div>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth={true}
                />
            </div>

            <div>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth={true}
                />
            </div>

            <div>
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth={true}
                />
            </div>
        </div>
    )
}

export default StepSignUp
