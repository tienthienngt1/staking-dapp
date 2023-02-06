declare var window: any;

export const connectWallet = async () => {
	if (window.ethereum) {
		try {
			const account = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			if (window.ethereum.chainId !== "0x5") {
				await window.ethereum.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x5" }],
				});
			}
			return account[0];
		} catch (error) {
			console.log(error);
		}
	} else {
		alert("Please install Metamask!");
		return;
	}
};
