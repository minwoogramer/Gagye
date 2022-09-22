import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #000;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const SampleBox = styled.div``;
export const SampleContent: FC = () => {
  return (
    <Container>
      <SampleBox>
        <Img
          src="/Images/SampleImg1.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Images/SampleImg2.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Images/SampleImg3.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Images/SampleImg4.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Images/SampleImg5.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Images/SampleImg6.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Images/SampleImg7.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Images/SampleImg8.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Images/SampleImg9.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Images/SampleImg10.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
    </Container>
  );
};
//이미지는 각각 2개씩 5개가 들어감
