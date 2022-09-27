import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #000000;
  color: #fff;
  width: 100%;
  min-width: 420px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  line-height: 2;
  padding: 0;
`;
const Title = styled.span`
  font-size: 40px;
  margin: 0;
`;
const DescBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;
const Desc = styled.span`
  font-size: 23px;
  letter-spacing: 0em;
  margin: 0;
  line-height: 1.5;
`;
export const DescWhatContent: FC = () => {
  return (
    <Container>
      <Title>What We offer</Title>
      <DescBox>
        <Desc>
          Donut Gagye is a fusion of periodic and contemporary architectural
          styles in Café design. Donut Gagye is designed carefully concentrating
          on each detail of it. There are almost more than 30 architectural
          elements in each Gagye. Five of the element properties are chosen as
          variables and 50 unique Gagye’s are generated. The element properties
          include Wall Color, Column Color, Roof color and design, Materials,
          and Outdoor elements. Choosing the Donut Gagye from the following five
          flavours of donuts (chocolate, vanilla, strawberry, maple and sugar)
          represents you and can also make you know yourself better.
          Authenticated by web3 technology, these 3D models are specially
          crafted by leading experienced architects and interior designers.
          These 3D models can be a great addition to your digital collection.
          These assets can be collected, traded, or used across in multiple
          metaverse ecosystems and even more, can be built in the real world.
        </Desc>
      </DescBox>
    </Container>
  );
};
