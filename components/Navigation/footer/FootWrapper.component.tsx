import { FC } from "react";
import styled from "styled-components";

const FootContainer = styled.div`
  display: flex;
  bottom: 0;
  left: 0;
  background-color: #c0c0c0;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 100%;
  margin-top: 30px;
  padding: 20px 30px;
  color: white;
`;

export const FootWrapper: FC = () => {
  return <FootContainer>Footer</FootContainer>;
};
