import axios from "axios";

let Http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${typeof window !== 'undefined' && localStorage.token}`
    }
});

const Service = () => {
    const Get = async (path: string) => {
        return Http.get(path).then(res => res.data)
    };

    const Post = async (path: string, data: any) => {
        return Http.post(path, data).then(res => res.data)
    };

    const Put = async (path: string, data: any) => {
        return Http.put(path, data).then(res => res.data)
    };

    const Patch = async (path: string, data: any) => {
        return Http.patch(path, data).then(res => res.data)
    };

    const Delete = async (path: string, data: any) => {
        return Http.delete(path, data).then(res => res.data)
    };

    return { Get, Post, Put, Patch, Delete };
};

export default Service();