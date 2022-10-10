import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ConnectWallet } from "../../../utils/Wallet/connectWallet";
import { useRecoilState } from "recoil";
import { WalletInfo } from "../../../utils/Atoms/atoms";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modals } from "./../../Modal/Modal.component";
const ConnectWalletContainer = styled.div`
  display: flex;
  width: 15rem;
  margin: 0;
  padding-left: 20px;
  padding-top: 1rem;
  @media screen and (max-width: 500px) {
    margin-top: 0rem;
    margin-right: 1rem;
  }
`;
const Accounts = styled.button`
  background-color: #0350f0;
  border-radius: 45px;
  width: 14rem;
  height: 3rem;
  font-family: "Inter";
  font-style: normal;
  color: #fff;
  font-weight: 100;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;
const Btn = styled.button`
  background-color: #0350f0;
  border-radius: 45px;
  width: 14rem;
  height: 3rem;
  font-family: "Inter";
  font-style: normal;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  margin: 0;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;
export const HeadWallet: FC = () => {
  const [account, setAccount] = useRecoilState(WalletInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    console.log(showModal);
  };
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("account"))
        await ConnectWallet(setAccount, account);
    })();
  }, []);
  useEffect(() => {
    if (isLoading == true) {
      const showToast = () => {
        toast.info("!🦄 Your Wallet Connected", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };

      if (account != "") {
        setTimeout(() => {
          showToast();
        }, 500);

        router.push("Minting");
        //replace로 바꿔야함
        console.log("연결성공");
      }
    } else {
      if (!account) {
        router.push("/");
      }
    }
  }, [account]);

  return (
    <ConnectWalletContainer>
      {account != "" ? (
        <Accounts
          onClick={() => {
            openModal();
            setIsLoading(false);
            console.log(account);
          }}
        >
          {account.slice(0, 6)}...
          {account.slice(account.length - 5, account.length)}
        </Accounts>
      ) : (
        <Btn
          onClick={() => {
            ConnectWallet(setAccount, account);
            setIsLoading(true);
            console.log(isLoading, "연결");
          }}
        >
          Connect Wallet
        </Btn>
      )}
      {showModal && (
        <Modals
          show={showModal}
          closeModal={closeModal}
          setAccount={setAccount}
          accounts={account}
        ></Modals>
      )}
    </ConnectWalletContainer>
  );
};
