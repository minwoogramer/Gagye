import { FC, useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import {
  ConnectWallet,
  DisconnectWallet,
} from "../../../utils/Wallet/connectWallet";
import { useRecoilState } from "recoil";
import { WalletInfo } from "../../../utils/Atoms/atoms";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    if (isLoading == true) {
      if (account != "") {
        toast.success("!🦄 Your Wallet Connected", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("Minting");
        //replace로 바꿔야함
        console.log("연결성공");
      }
    } else {
      if (account == "") {
        router.push("/");
      }
    }
  }, [account]);
  return (
    <ConnectWalletContainer>
      {account != "" ? (
        <Accounts
          onClick={() => {
            DisconnectWallet(setAccount);
            console.log("지갑연결끊기");
            setIsLoading(false);
          }}
        >
          {account.slice(0, 6)}...
          {account.slice(account.length - 5, account.length)}
        </Accounts>
      ) : (
        <Btn
          onClick={() => {
            ConnectWallet(setAccount);
            setIsLoading(true);
            console.log(isLoading, "연결");
          }}
        >
          Connect Wallet
        </Btn>
      )}
    </ConnectWalletContainer>
  );
};
