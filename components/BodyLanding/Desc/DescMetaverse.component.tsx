import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  background-color: #000000;
  color: #fff;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid black;
  line-height: 2;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Title = styled.span`
  font-size: 40px;
  margin: 0;
`;
const TitleBold = styled.span`
  font-size: 40px;
  margin: 0;
  font-weight: 600;
  margin-right: 15px;
  line-height: 1;
`;
const DescBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 25px 0px;
`;

const Desc = styled.span`
  font-size: 23px;
  letter-spacing: 0em;
  margin: 0;
  line-height: 1.5;
`;
const DescBold = styled.span``;
const FlowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  height: 300px;
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
      <TitleBox>
        <TitleBold>Donut Gagye is for Metaverse </TitleBold>
      </TitleBox>
      <DescBox>
        <Desc>
          Dough huts can take you to multiple virtual worlds to play around and
          invite your friends to have fun.
        </Desc>
        <Desc>Why not?</Desc>
        <Desc>
          You can even start your own brand’s dream virtual world doughnut café
          and do a lot more in Metaverse.
        </Desc>
        <Desc>
          Dough-Hut is a dessert factory with beautifully detailed interiors,
          that are just perfect for the Metaverse platforms.
        </Desc>
        <Desc>
          Each of our models fabricated by architects contains a package of
          high-fidelity 3D files and the required model data to build in both
          the virtual and real world.
        </Desc>
        <Desc>Let’s dunk into our favourite doughnuts in the metaverse.</Desc>
        <Desc>
          Take your favourite dough hut from virtual and build it real.
        </Desc>
        <Desc> Yes, it’s possible with our NFT.</Desc>
      </DescBox>

      <FlowBox>
        <Box>Image of Metaverse</Box>
        <Box>Flow</Box>
      </FlowBox>
    </Container>
  );
};
