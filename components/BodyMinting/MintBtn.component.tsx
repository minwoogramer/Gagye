import { FC } from "react";
import styled from "styled-components";

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
export const MintBtn: FC = () => {
  return <Btn>MintBtn</Btn>;
};
