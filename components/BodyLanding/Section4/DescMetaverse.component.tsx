import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  background-color: #000000;
  color: #fff;
  width: 100%;
  min-width: 420px;
  height: auto;
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

const DescBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Desc = styled.span`
  line-height: 1.5;
  font-size: 23px;
  text-align: left;
`;

const FlowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  margin-top: 50px;
  background-color: #000000;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 40px;
  }
`;
const Span = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescMetaverseContent: FC = () => {
  return (
    <Container>
      <TitleBox>
        <Title>Donut Gagye is for Metaverse </Title>
      </TitleBox>
      <DescBox>
        <Desc>
          Dough huts can take you to multiple virtual worlds to play around and
          invite your friends to have fun. Why not? You can even start your own
          brand’s dream virtual world doughnut café and do a lot more in
          Metaverse. Dough-Hut is a dessert factory with beautifully detailed
          interiors, that are just perfect for the Metaverse platforms. Each of
          our models fabricated by architects contains a package of
          high-fidelity 3D files and the required model data to build in both
          the virtual and real world. Let’s dunk into our favourite doughnuts in
          the metaverse. Take your favourite dough hut from virtual and build it
          real. Yes, it’s possible with our NFT.
        </Desc>
      </DescBox>

      <FlowBox>
        <Box>
          <Img
            src="/Metaverse123.png"
            width={800}
            height={420}
            alt="logo"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Span>
            <Img src="/Spatial.png" width={94} height={94} alt="logo" />
          </Span>
          <Span>
            <Img src="/Mona.png" width={210} height={94} alt="logo" />
          </Span>
          <Span>
            <Img src="/Decentraland.png" width={324} height={94} alt="logo" />
          </Span>
        </Box>
      </FlowBox>
    </Container>
  );
};
