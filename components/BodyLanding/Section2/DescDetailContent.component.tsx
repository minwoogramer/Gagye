import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #000000;
  color: #fff;
  width: 100%;
  height: 30vw;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  line-height: 2;
  margin-top: 0%;
`;
const Title = styled.span`
  font-size: 40px;
  margin: 10px;
`;

const ImgBox = styled.div`
  margin-top: 150px;
  @media screen and (max-width: 1370px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 1100px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 300px;
  }
`;
const DescBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  flex-direction: column;
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
          flavorful happiness. Donut Gagye releases a significant amount of
          serotonin and suppresses depression and anxiety. Nevertheless, it can
          be difficult not to stress in modern society, as this is certainly an
          unavoidable part nowadays. Therefore, happiness should be one of the
          most important values to consider, and our Donut Gagye NFT can be a
          key to making your web 3.0 world a more valuable memory. Let us find
          out happier memories of your childhood through our favorite foods.
          moments when you ate doughnuts. Recall happy So, what would you need?
          Donut Gagye, of course!
        </Desc>
      </DescBox>
      <ImgBox>
        <Img
          src="/InteriorImage.png"
          width={1200}
          height={585}
          alt="interior"
          layout="intrinsic"
          objectFit="cover"
        />
      </ImgBox>
    </Container>
  );
};
