import { TransactionReceipt, Web3Provider } from '@ethersproject/providers';
import window from '@funfair-tech/wallet-sdk/window';
import { BigNumber, Contract, ContractInterface } from 'ethers';

class EtherService {
  private _provider: Web3Provider;
  constructor() {
    this._provider = new Web3Provider(window.funwallet.sdk.ethereum as any);
  }

  /**
   * Get the eth balance
   * @param address The address
   */
  public async getBalance(address: string): Promise<BigNumber> {
    return await this._provider.getBalance(address);
  }

  /**
   * Creates a contract instance
   * @param abi The ABI
   * @param contractAddress The contract address
   */
  public getContract<TGeneratedTypedContext>(
    abi: ContractInterface,
    contractAddress: string
  ): TGeneratedTypedContext {
    const contract = new Contract(contractAddress, abi, this._provider);

    return (contract as unknown) as TGeneratedTypedContext;
  }

  /**
   * Get transaction receipt
   * @param transactionHash The transaction hash
   */
  public async getTransactionReceipt(
    transactionHash: string
  ): Promise<TransactionReceipt> {
    return await this._provider.getTransactionReceipt(transactionHash);
  }
}

export let ethers: EtherService;

export const setEtherContext = () => {
  ethers = new EtherService();
};
