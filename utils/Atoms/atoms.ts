import { atom } from 'recoil'

export const WalletInfo = atom<string>({
  key: 'Wallet',
  default: '',
})
export const MintingTimeInfo = atom<number>({
  key: 'MintingTime',
  default: 0,
})
