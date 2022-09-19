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
export const DescDetailContent: FC = () => {
  return (
    <Container>
      <Title>About Donut Gagye</Title>
      <Desc>
        Desserts make our inner child happy. Donut Gagye are a bunch of
        flavorful happiness. Donut Gagye releases a significant amount of
        serotonin and suppresses depression and anxiety. Nevertheless, it can be
        difficult not to stress in modern society, as this is certainly an
        unavoidable part nowadays. Therefore, happiness should be one of the
        most important values to consider, and our Donut Gagye NFT can be a key
        to making your web 3.0 world a more valuable memory. Recall happy
        moments when you ate doughnuts. Let us find out happier memories of your
        childhood through our favorite foods. So, what would you need? Donut
        Gagye, of course!
      </Desc>
    </Container>
  );
};
