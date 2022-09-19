import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
const TitleBold = styled.span`
  font-size: 40px;
  margin: 0;
  font-weight: 600;
`;
const Desc = styled.span`
  font-size: 23px;
  font-weight: 100;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
export const DescHowContent: FC = () => {
  return (
    <Container>
      <Title>What We offer</Title>
      <Desc>
        Donut Gagye is a fusion of periodic and contemporary architectural
        styles in Café design.
      </Desc>
      <Desc>
        Donut Gagye is designed carefully concentrating on each detail of it.
      </Desc>
      <Desc>
        There are almost more than 30 architectural elements in each Gagye.
      </Desc>
      <Desc>
        Five of the element properties are chosen as variables and 50 unique
        Gagye’s are generated.
      </Desc>
      <Desc>
        The element properties include Wall Colour, Column Color, Roof colour
        and design, Materials, and Outdoor elements.
      </Desc>
      <Desc>
        Choosing the Donut Gagye from the following five flavours of donuts
        (chocolate, vanilla, strawberry, maple and sugar) represents you and can
        also make you know yourself better.
      </Desc>
      <Desc>
        Authenticated by web3 technology, these 3D models are specially crafted
        by leading experienced architects and interior designers.
      </Desc>
      <Desc>
        These 3D models can be a great addition to your digital collection.
      </Desc>
      <Desc>
        These assets can be collected, traded, or used across in multiple
        metaverse ecosystems and even more, can be built in the real world.
      </Desc>
    </Container>
  );
};
