import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { WalletInfo } from "../../../utils/Atoms/atoms";
import {
  DisconnectWallet,
} from "../../../utils/Wallet/connectWallet";
const ModalContainer = styled.div`
position:fixed;
top:150px; left:30px;
box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px;
z-index : 100;
`
const ModalWrapper =styled.div`
  
`

const TitleContent = styled.div`
  
`

const TitleText = styled.span`
  
`

const X = styled.span`
  
`

const Wallet = styled.span`

`
  


const BtnContainer = styled.div`

`

const Btn = styled.div`
  
`


export const Modal = ({show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [account, setAccount] = useRecoilState(WalletInfo);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <ModalContainer>
      < ModalWrapper>  
      <TitleContent>
        <TitleText>
          Connected as
        </TitleText>
        <X>
          X
        </X>
      </TitleContent>
      <Wallet>
        0x
      </Wallet>
      <BtnContainer>
        <Btn onClick={DisconnectWallet}>
          Disconnect
        </Btn>
      </BtnContainer>
      </ModalWrapper>
    </ModalContainer>
  ) :null;

  if(isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }else{
    return null;
  }
};
