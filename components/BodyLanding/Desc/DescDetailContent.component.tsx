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
  margin-top: 10%;
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
const DescBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
export const DescDetailContent: FC = () => {
  return (
    <Container>
      <Title>About Donut Gagye</Title>
      <DescBox>
        <Desc>
          Desserts make our inner child happy. Donut Gagye are a bunch of
          flavorful happiness.
        </Desc>
        <Desc>
          Donut Gagye releases a significant amount of serotonin and suppresses
          depression and anxiety.
        </Desc>
        <Desc>
          Nevertheless, it can be difficult not to stress in modern society, as
          this is certainly an unavoidable part nowadays.
        </Desc>
        <Desc>
          Therefore, happiness should be one of the most important values to
          consider, and our Donut Gagye NFT can be a key to making your web 3.0
          world a more valuable memory.
        </Desc>
        <Desc>moments when you ate doughnuts.</Desc>
        <Desc>
          Let us find out happier memories of your childhood through our
          favorite foods.
        </Desc>
        <Desc>Recall happy So, what would you need?</Desc>
        <Desc>Donut Gagye, of course!</Desc>
      </DescBox>
    </Container>
  );
};
