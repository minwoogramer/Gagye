import { NextPage } from "next";
import styled from "styled-components";
import { Header } from "../Layouts/Header";
import { BodyMinting } from "./../Layouts/BodyMinting";
import { useEffect } from "react";
import { ConnectWallet } from "../utils/Wallet/connectWallet";
import { useRecoilState } from "recoil";
import { WalletInfo } from "../utils/Atoms/atoms";
import { useRouter } from "next/router";

const MintingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Minting: NextPage = () => {
  const [account, setAccount] = useRecoilState(WalletInfo);
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("account"))
        await ConnectWallet(setAccount, account);
    })();
  }, []);
  return (
    <MintingContainer>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <BodyMinting />
    </MintingContainer>
  );
};
export default Minting;
