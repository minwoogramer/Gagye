import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
require('dotenv').config()
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    cacheProvider: true,
    options: {
      appName: 'web3Modal ',
      infuraId: process.env.GOERLI_RPC_URL,
      //test Network
      // infuraId:process.env.MAIN_RPC_URL
      //mainnet
    },
    network: 'goerli',
  },
}

export const ConnectWallet = async (
  setAccount: {
    (valOrUpdater: string | ((currVal: string) => string)): void
    (arg0: string): void
  },
  account: string,
) => {
  const web3Modal = new Web3Modal({
    network: 'goerli',
    //network: 'mainnet',
    cacheProvider: true,
    providerOptions,
  })
  const instance = await web3Modal.connect()
  const providers = new ethers.providers.Web3Provider(instance)
  const accounts = await providers.listAccounts()
  try {
    console.log(instance, 'instance')
    console.log(providers, 'providers')
    if (accounts) {
      setAccount(accounts[0])
      console.log(accounts[0])
      let storage: any = localStorage.getItem('account')
      storage = localStorage.setItem('account', accounts[0])
    }
  } catch (error) {
    console.log(error)
  }
}
export const DisconnectWallet = async (setAccount: {
  (valOrUpdater: string | ((currVal: string) => string)): void
  (arg0: string): void
}) => {
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
  })
  try {
    web3Modal.clearCachedProvider()
    setAccount('')
    if (typeof window !== undefined) {
      localStorage.removeItem('account')
    }
  } catch (error) {
    console.log(error)
  }
}
