import { FC } from "react";
import styled from "styled-components";
interface HeadProps {}
const Ul = styled.ul`
  display: flex;
  align-items: center;
`;
const Li = styled.li`
  list-style: none;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  cursor: auto;
`;

export const HeadList: FC<HeadProps> = () => {
  return (
    <Ul>
      <Li>All Gagye</Li>
      <Li>Design</Li>
      <Li>Utilization</Li>
      <Li>Minting</Li>
      <Li>Plan</Li>
    </Ul>
  );
};
