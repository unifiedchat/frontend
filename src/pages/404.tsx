import {NextPage} from "next";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-[100vh] text-3xl">
            <h1>Not found.</h1>
        </div>
    )
}

NotFound.getLayout = (page: NextPage) => page;