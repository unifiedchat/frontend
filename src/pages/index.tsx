import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>UnifiedChat - Home Page</title>
				<meta
					name="description"
					content="multiple stream chat platform"
				/>
				<link rel="icon" href="/public/favicon.ico" />
			</Head>

			<main className="flex flex-col justify-center items-center h-[100vh] w-full text-black">
				<Typography variant="h3">
					Create Connection for live chat of youtube
				</Typography>
			</main>
		</div>
	);
}
