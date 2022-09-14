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
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #615d5d;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid wheat;
`;
export const DescMetaverseContent: FC = () => {
  return (
    <Container>
      <Title>Donut Gagye is for Metaverse</Title>
      <Desc>
        Dough huts can take you to multiple virtual worlds to play around and
        invite your friends to have fun. Why not? You can even start your own
        brand’s dream virtual world doughnut café and do a lot more in
        Metaverse. Dough-Hut is a dessert factory with beautifully detailed
        interiors, that are just perfect for the Metaverse platforms. Each of
        our models fabricated by architects contains a package of high-fidelity
        3D files and the required model data to build in both the virtual and
        real world. Let’s dunk into our favourite doughnuts in the metaverse. Do
        nut stop!! Take your favourite dough hut from virtual and build it real.
        Yes, it’s possible with our NFT.
      </Desc>
      <FlowBox>
        <Box>Image of Metaverse</Box>
        <Box>Flow</Box>
      </FlowBox>
    </Container>
  );
};
