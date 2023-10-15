import { FC } from "react";
import styled from "styled-components";
interface HeadProps {}
const HeaderTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin: 0;
  min-width: 4rem;
  height: auto;
  color: #000;
`;

export const HeadTitle: FC<HeadProps> = () => {
  return <HeaderTitle>Gagye</HeaderTitle>;
};
