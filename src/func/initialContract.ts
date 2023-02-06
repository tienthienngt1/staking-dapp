import { ABI, CONTRACT_ADDRESS } from "config";
import Web3 from "web3";
declare var window: any;

export const initialContract = () => {
	if (window.ethereum) {
		const web3 = new Web3(window.ethereum);
		//@ts-ignore
		const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
		return { contract, web3 };
	}
	return { contract: undefined, web3: undefined };
};
