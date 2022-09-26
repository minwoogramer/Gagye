import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #000;
  width: 100%;
  min-width: 420px;
  height: auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vh;
  }
`;
const SampleBox = styled.div``;
export const SampleContent: FC = () => {
  return (
    <Container>
      <SampleBox>
        <Img
          src="/Sample1.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Sample2.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Sample3.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Sample4.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Sample5.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Sample6.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Sample7.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Sample8.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/Sample9.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/Sample10.png"
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
