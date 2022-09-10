import { FC } from "react";
import styled from "styled-components";

const FootContainer = styled.div`
  display: flex;
  bottom: 0;
  flex-direction: column;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 100%;
  padding: 20px 0;
  z-index: 99;
  color: white;
`;

export const FootWrapper: FC = () => {
  return <FootContainer>Footer</FootContainer>;
};
