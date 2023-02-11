import {createContext, useEffect, useState} from "react";
import {getMe} from "@services/ApiService";
import TokenService from "@services/TokenService";

const defaultContext: AuthValuesType = {
    isAuth: true,
    setIsAuth: () => {},
    user: null,
    loading: true,
}

const AuthContext = createContext(defaultContext);

const token = TokenService.getToken();

const AuthProvider = (props: { children: any }) => {
    const [isAuth, setIsAuth] = useState(defaultContext.isAuth);
    const [user, setUser] = useState(defaultContext.user);
    const [loading, setLoading] = useState<boolean>(defaultContext.loading);

    useEffect(() => {
        if (token) {
            setIsAuth(true);
            getMe().then(res => {
                setUser(res.data);
                setLoading(false);
            }).catch(error => {
                console.error(error);
                setLoading(false);
            });
        }
    }, [])

    return <AuthContext.Provider value={{user, setIsAuth, isAuth, loading}}>{props.children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider};
