import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useEffect } from 'react'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    cacheProvider: true,
    options: {
      appName: 'web3Modal ',
      infuraId: 'https://ropsten.infura.io/v3/f205e2d61653432c996724150f59c1e3',
      //test Network
      darkMode: true, // required
    },
    network: 'ropsten',
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
    network: 'ropsten',
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
    theme: 'dark',
  })
  try {
    web3Modal.clearCachedProvider()
    setAccount('')
    if (typeof window !== undefined) {
      localStorage.setItem('account', '')
    }
  } catch (error) {
    console.log(error)
  }
}
