import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  margin-top: 35px;
  background-color: #000000;
  color: #fff;
  min-width: 400px;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  line-height: 2;

  @media screen and (max-width: 1000px) {
    width: 100vh;
  }
  min-width: 400px;
  height: auto;
`;
const Title = styled.span`
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 1;
  margin-left: 0;
`;
const Desc = styled.span`
  line-height: 1.5;
  font-size: 23px;
  text-align: left;
`;
const FlowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: #000;
`;
const ImgBox = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1200px) {
    margin-top: 50px;
  }
`;

export const FlowContent: FC = () => {
  return (
    <Container>
      <Title>Your Donut Gagye can be utilized for the real world.</Title>
      <Desc>
        Each of our models fabricated by architects contains a package of an
        original SketchUp file. The users can not only utilize it in the real
        world but also covert it to another file formats for their own uses.
      </Desc>
      <FlowBox>
        <ImgBox>
          <Img
            src="/Last123.png"
            width={1200}
            height={600}
            alt="Column"
            layout="intrinsic"
          />
        </ImgBox>
      </FlowBox>
    </Container>
  );
};
