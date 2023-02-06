import { initialContract } from "./initialContract";
const { contract, web3 } = initialContract();

export const getBalance = async (address: string) => {
	if (contract && web3) {
		try {
			const balance = await contract.methods.balanceOf(address).call();
			return Number(web3.utils.fromWei(balance, "gwei"));
		} catch (error) {
			console.log(error);
			return;
		}
	}
	return;
};
export const getRewardPool = async () => {
	if (contract && web3) {
		try {
			const pool = await contract.methods.rewardsPool().call();
			return Number(web3.utils.fromWei(pool, "gwei"));
		} catch (error) {
			console.log(error);
			return;
		}
	}
	return;
};
export const getPoolStake = async () => {
	if (contract && web3) {
		try {
			const pool = await contract.methods.poolStake().call();
			return Number(web3.utils.fromWei(pool, "gwei"));
		} catch (error) {
			console.log(error);
			return;
		}
	}
	return;
};
export const getAmountStake = async (address: string) => {
	if (contract && web3) {
		try {
			const amount = await contract.methods.amountStaked(address).call();
			return Number(web3.utils.fromWei(amount, "gwei"));
		} catch (error) {
			console.log(error);
			return;
		}
	}
	return;
};
export const harvestToken = async (address: string) => {
	if (contract && web3) {
		try {
			const res = await contract.methods
				.harvestStake()
				.send({ from: address });
			return res;
		} catch (error) {
			return;
		}
	}
	return;
};
export const withdrawToken = async (address: string) => {
	if (contract && web3) {
		try {
			const res = await contract.methods
				.withdrawStake()
				.send({ from: address });
			return res;
		} catch (error) {
			return;
		}
	}
	return;
};
export const stakeToken = async (address: string, amount: number) => {
	if (contract && web3) {
		try {
			const res = await contract.methods
				.stake(web3.utils.toWei(amount.toString(), "gwei"))
				.send({ from: address });
			return res;
		} catch (error) {
			return;
		}
	}
	return;
};
export const getProfit = async (address: string) => {
	if (contract && web3) {
		try {
			const amount = await contract.methods
				.profitStakePerUser(address)
				.call({ from: address });
			return Number(web3.utils.fromWei(amount, "gwei"));
		} catch (error) {
			return;
		}
	}
	return;
};
