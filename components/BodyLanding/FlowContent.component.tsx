import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 35px;
  background-color: #000000;
  color: #fff;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  line-height: 2;
`;
const Title = styled.span`
  font-size: 40px;
  margin: 0;
`;
const Desc = styled.span`
  font-size: 23px;
  font-weight: 100;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
const FlowBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #615d5d;
`;
export const FlowContent: FC = () => {
  return (
    <Container>
      <Title>Your Donut Gagye can be utilized for the real world.</Title>
      <Desc>
        Each of our models fabricated by architects contains a package of an
        original SketchUp file. The users can not only utilize it in the real
        world but also covert it to another file formats for their own uses.{" "}
      </Desc>
      <FlowBox>Flow</FlowBox>
    </Container>
  );
};
