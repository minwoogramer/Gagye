import { atom } from 'recoil'

export const WalletInfo = atom<string>({
  key: 'Wallet',
  default: '',
})
