import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  background-color: #000000;
  color: #fff;
  width: 100%;
  height: 100vw;
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
  margin: 25px 0px;
`;

const Desc = styled.span`
  font-size: 23px;
  letter-spacing: 0em;
  margin: 0;
  line-height: 1.5;
`;

const FlowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  height: 300px;
  background-color: #000000;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Span = styled.span`
  padding-top: 7px;
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
            src="/Metaverse.png"
            width={590}
            height={350}
            alt="video"
            layout="intrinsic"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Span>
            <Img
              src="/Spatial.png"
              width={71}
              height={74}
              alt="video"
              layout="intrinsic"
            />
          </Span>
          <Span>
            <Img
              src="/Mona.png"
              width={220}
              height={74}
              alt="video"
              layout="intrinsic"
              objectFit="cover"
            />
          </Span>
          <Span>
            <Img
              src="/Decentraland.png"
              width={424}
              height={105}
              alt="video"
              layout="intrinsic"
              objectFit="cover"
            />
          </Span>
        </Box>
      </FlowBox>
    </Container>
  );
};