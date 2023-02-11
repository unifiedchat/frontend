import {NextPage} from "next";
import {useEffect, useState} from "react";
import {getMe, loginUser} from "@services/ApiService";
import {useRouter} from "next/router";
import toast from "react-hot-toast";
import TokenService from "@services/TokenService";
import catchMessage from "../@core/utils/catchMessage";
import HomeIcon from "@mui/icons-material/Home";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        getMe().then(() => {
            router.push("/");
        }).catch(() => {
            return {};
        });
    }, []);


    function redirectToPage(page: string) {
        router.push(page);
    }

    function handleSubmit() {
        const data: IAuth = {
            username,
            password,
        };

        loginUser(data)
            .then((res: IResponse) => {
                toast.success("Login successfully", {
                    duration: 3000,
                    position: "bottom-right",
                });

                const token = res.data.access_token;
                if (token) {
                    TokenService.setToken(token);
                    redirectToPage("/");
                }
            })
            .catch(catchMessage);
    }

    return (
        <div className="text-center text-white h-[100vh] flex justify-center items-center">
            <div
                className={
                    "w-[460px] h-[460px] flex-col bg-gray-900 flex justify-between items-center rounded-xl "
                }
            >
                <div className="bg-[#29395f] rounded-xl w-full h-[160px] flex justify-center items-center">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="mt-28 absolute flex justify-center items-center">
                    <Card className="w-96 bg-white text-black rounded-lg">
                        <CardContent>
                            <Typography variant="h5">Login</Typography>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        label="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Grid>

                                <Grid className="text-white" item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className="!bg-primary"
                                        onClick={() =>
                                            handleSubmit()
                                        }
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>

                            <div className="flex justify-end w-full mt-2">
									<span
                                        className="!text-right hover:text-blue-800 cursor-pointer"
                                        onClick={() =>
                                            redirectToPage("register")
                                        }
                                    >
										Don&apos;t have an account?
									</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = (page: NextPage) => page;
Login.authGuard = false;
