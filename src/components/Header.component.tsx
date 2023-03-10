import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CHAIN_ID } from "config";
import { connectWallet } from "func/connectWallet";
import { useEffect } from "react";
declare var window: any;

export type HeaderT = {
	address: string | undefined;
	setAddress: React.Dispatch<React.SetStateAction<undefined | string>>;
};

const Header = ({ address, setAddress }: HeaderT) => {
	useEffect(() => {
		try {
			if (window.ethereum) {
				window.ethereum.on(
					"accountsChanged",
					async (account: string[]) => {
						if (address === account[0]) return;
						if (!account[0]) {
							setAddress(undefined);
							return;
						}
						if (window.ethereum.chainId !== CHAIN_ID) {
							await window.ethereum.request({
								method: "wallet_switchEthereumChain",
								params: [{ chainId: CHAIN_ID }],
							});
						}
						setAddress(account[0]);
					}
				);
				window.ethereum.on("networkChanged", async () => {
					if (window.ethereum.chainId !== CHAIN_ID) {
						await window.ethereum.request({
							method: "wallet_switchEthereumChain",
							params: [{ chainId: CHAIN_ID }],
						});
					}
				});
				window.ethereum.on("disconnect", () => {
					setAddress(undefined);
				});
			}
		} catch (error) {
			console.log(error);
		}
	}, []);
	const handleConnect = async () => {
		const res = await connectWallet();
		if (res) setAddress(res);
	};

	return (
		<>
			<Stack direction={"row"} justifyContent={"flex-end"} p={2}>
				<Button variant="contained" onClick={handleConnect}>
					{address
						? `${address.substring(0, 4)}...${address.slice(-4)}`
						: `Connect Wallet`}
				</Button>
			</Stack>
			<Stack direction={"row"} justifyContent={"center"} my={2}>
				<Typography
					align="center"
					sx={{ typography: { md: "h2", xs: "h3" } }}
					className="title"
				>
					$RABBITCUPID STAKING POOL
				</Typography>
			</Stack>
		</>
	);
};

export default Header;
