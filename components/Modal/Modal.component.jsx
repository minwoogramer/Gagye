import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DisconnectWallet } from "../../utils/Wallet/connectWallet";
const ModalContainer = styled.div`
width: 500px;
height: 300px;
position:fixed;
top:30%; 
left:40%;
box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px;
z-index : 900;
background-color: #ffffffe1;
border-radius: 25px;
border:2px solid #e7e7e7;
`
const ModalWrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
  height: 100%;
  
`

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleText = styled.span`
font-size: 23px;
 padding:5px;
 font-weight: 600;
`
const ModalHead = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family:sans-serif;

`
const X = styled.p`
font-size: 23px;
padding-left: 50px;
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
:hover {
    transition: 0.2s;
    opacity: 0.8;
  }

`

const Wallet = styled.span`
font-weight: 600;
color: black;
`
  


const BtnContainer = styled.div`

`

const Btn = styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: #0350f0;
  border-radius: 45px;
  width: 13rem;
  height: 3rem;
  font-family: "Inter";
  font-style: normal;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`


export const Modals = ({show, onClose,setAccount, accounts}) => {
  const [isBrowser, setIsBrowser] = useState(false);


  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose(false);
  };

  const modalContent = show ? (
    <ModalContainer>
      < ModalWrapper> 
      <ModalHead>
      <TitleText>
          Connected as
        </TitleText>
        <X onClick={handleCloseClick}>
          X
        </X>
        </ModalHead> 
      <TitleContent>
        
      <Wallet>
        {accounts}
      </Wallet>
      </TitleContent>
      <BtnContainer>
        <Btn onClick={()=>{DisconnectWallet(setAccount)}}>
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
