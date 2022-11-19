import toast from "react-hot-toast";

export default function catchMessage(err: IRResponseError) {
	if (err) {
		if (
			typeof err === "object" &&
			err.response.data &&
			err.response.data.message
		) {
			if (err.response.data.message instanceof Array) {
				err.response.data.message.map((e: any) => {
					toast.error(e.charAt(0).toUpperCase() + e.slice(1) + ".", {
						duration: 3000,
						position: "bottom-right",
						style: {
							background: "#000",
							color: "white",
						},
					});
				});
			} else {
				toast.error(
					err.response.data.message.charAt(0).toUpperCase() +
						err.response.data.message.slice(1) +
						".",
					{
						duration: 3000,
						position: "bottom-right",
					},
				);
			}
		} else {
			const str = typeof err === "string" ? err : err.message;

			toast.error(str, {
				duration: 3000,
				position: "bottom-right",
			});
		}
	}
}
