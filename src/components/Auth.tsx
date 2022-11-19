import HomeIcon from "@mui/icons-material/Home";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

interface AuthProps {
    register: boolean
}

export default function Auth({register}: AuthProps) {
    const router = useRouter();
    const h = register ? "h-[500px]" : "h-[460px]"

    function redirectToPage(page: string) {
        router.push(page);
    }

    return (
        <div className="text-center text-white ml-20 h-[100vh] flex justify-center items-center">
            <div className={"w-[460px] flex-col bg-gray-900 flex justify-between items-center rounded-xl " + h}>
                <div className="bg-[#29395f] rounded-xl w-full h-[160px] flex justify-center items-center">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="mt-28 absolute flex justify-center items-center">
                    <Card className="w-96 bg-white text-black rounded-lg">
                        <CardContent>
                            <Typography variant="h5">{register ? "Register" : "Login"}</Typography>
                            <Grid container spacing={2} marginTop={2}>
                                {register && (
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Username" defaultValue="John Doe"/>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Email" defaultValue="my@mail.com"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth label="Password" defaultValue="password"/>
                                </Grid>

                                <Grid className="text-white" item xs={12}>
                                    <Button fullWidth variant="contained" className="!bg-primary">
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>

                            {!register && (
                                <div className="flex justify-end w-full mt-2">
                                    <span className="!text-right hover:text-blue-800 cursor-pointer" onClick={() => redirectToPage("register")}>Don't have an account?</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
