import { FC } from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  margin-top: 35px;
  background-color: #0350f0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MintBtn: FC = () => {
  return <Btn>MintBtn</Btn>;
};
