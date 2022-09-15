import { ethers, providers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    cacheProvider: true,
    options: {
      appName: 'web3Modal ',
      infuraId: 'https://rinkeby.infura.io/v3/f205e2d61653432c996724150f59c1e3',
      darkMode: true, // required
    },
  },
}
export const ConnectWallet = async (setAccount: {
  (valOrUpdater: string | ((currVal: string) => string)): void
  (arg0: string): void
}) => {
  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: 'dark',
  })
  try {
    const provider = await web3Modal.connect()
    const library = new ethers.providers.Web3Provider(provider)
    const accounts = await library.listAccounts()
    if (accounts) {
      setAccount(accounts[0])
      console.log(accounts[0])
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
    theme: 'dark',
  })
  try {
    web3Modal.clearCachedProvider()
    setAccount('')
  } catch (error) {
    console.log(error)
  }
}
