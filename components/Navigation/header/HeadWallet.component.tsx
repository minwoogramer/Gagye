import { FC } from "react";
import styled from "styled-components";

const ConnectWalletContainer = styled.div``;
const Btn = styled.a``;

export const HeadWallet: FC = () => {
  return (
    <ConnectWalletContainer>
      <Btn>Connect Wallet</Btn>
    </ConnectWalletContainer>
  );
};
