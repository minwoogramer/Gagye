import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import {
  ConnectWallet,
  DisconnectWallet,
} from "../../../utils/Wallet/connectWallet";
import { atom, useRecoilState } from "recoil";
import { WalletInfo } from "../../../utils/Atoms/atoms";
import { useRouter } from "next/router";
const ConnectWalletContainer = styled.div``;
const Accounts = styled.button`
  background-color: #0350f0;
  border-radius: 45px;
  width: 16rem;
  height: 3rem;
  font-family: "Inter";
  font-style: normal;
  color: #fff;
  font-weight: 100;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Btn = styled.button`
  background-color: #0350f0;
  border-radius: 45px;
  width: 16rem;
  height: 3rem;
  font-family: "Inter";
  font-style: normal;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;
export const HeadWallet: FC = () => {
  const [account, setAccount] = useRecoilState(WalletInfo);
  const router = useRouter();
  return (
    <ConnectWalletContainer>
      {account != "" ? (
        <Accounts
          onClick={() => {
            DisconnectWallet(setAccount);
          }}
        >
          {account.slice(0, 6)}...
          {account.slice(account.length - 5, account.length)}
        </Accounts>
      ) : (
        <Btn
          onClick={() => {
            ConnectWallet(setAccount);
            if (account) {
              router.replace("/Minting");
            }
          }}
        >
          Connect Wallet
        </Btn>
      )}
    </ConnectWalletContainer>
  );
};
