import HomeIcon from "@mui/icons-material/Home";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useRouter} from "next/router";
import {useState} from "react";
import toast from "react-hot-toast";
import {createUser, loginUser} from "../../services/ApiService";
import catchMessage from "../utils/catchMessage";
import TokenService from "@services/TokenService";

interface AuthProps {
    register: boolean;
}

export default function Auth({register}: AuthProps) {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const h = register ? "h-[530px]" : "h-[460px]";

    function redirectToPage(page: string) {
        router.push(page);
    }

    function handleSubmit(e: string) {
        const data: IAuth = {
            username,
            password,
        };

        if (register) {
            data["mail"] = email;

            createUser(data)
                .then(() => {
                    toast.success("User created successfully", {
                        duration: 3000,
                        position: "bottom-right",
                    });

                    redirectToPage("/login");
                })
                .catch(catchMessage);
        } else {
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
    }

    return (
        <div className="text-center text-white h-[100vh] flex justify-center items-center">
            <div
                className={
                    "w-[460px] flex-col bg-gray-900 flex justify-between items-center rounded-xl " +
                    h
                }
            >
                <div className="bg-[#29395f] rounded-xl w-full h-[160px] flex justify-center items-center">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="mt-28 absolute flex justify-center items-center">
                    <Card className="w-96 bg-white text-black rounded-lg">
                        <CardContent>
                            <Typography variant="h5">
                                {register ? "Register" : "Login"}
                            </Typography>
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

                                {register && (
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Grid>
                                )}

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
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
                                            handleSubmit(
                                                register ? "login" : "register",
                                            )
                                        }
                                    >
                                        {register ? "Register" : "Login"}
                                    </Button>
                                </Grid>
                            </Grid>

                            {!register && (
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
                            )}

                            {register && (
                                <div className="flex justify-end w-full mt-2">
									<span
                                        className="!text-right hover:text-blue-800 cursor-pointer"
                                        onClick={() => redirectToPage("login")}
                                    >
										Do you have a account?
									</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
