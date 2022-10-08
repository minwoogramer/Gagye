import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import duration from "dayjs/plugin/duration";
import * as dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { MintingTimeInfo } from "../../utils/Atoms/atoms";
dayjs.extend(duration);
const MintingDateContainer = styled.div`
  display: flex;
  width: 80vh;
  max-width: 1200px;
  height: 13%;
  max-height: 1200px;
  color: white;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    margin-top: 100px;
    height: 300px;
  }
  @media screen and (max-width: 520px) {
    margin-top: 200px;
  }
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 300px;
  @media screen and (max-width: 1000px) {
    margin-top: 20px;
    width: 100vh;
    height: 100px;
  }
`;
const TimeBox = styled.div``;
const Coming = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
`;
const ComingText = styled.span`
  font-size: 50px;
`;
const TimeText = styled.span`
  font-size: 50px;
  width: 100px;
  height: 100px;
`;
const TimeText2 = styled.span`
  width: 50px;
  height: 90px;
  font-size: 30px;
`;

export const MintDate: FC = () => {
  const [D, setD] = useState(0);
  const [H, setH] = useState(0);
  const [M, setM] = useState(0);
  const [S, setS] = useState(0);
  const [remainTime, setRemainTime] = useRecoilState(MintingTimeInfo);
  const Timer = () => {
    let date = dayjs.default("2022-10-21");
    //설정한 날짜
    let now = dayjs.default();
    let MintingTime = date.diff(now);
    const Duration = dayjs.duration(MintingTime);
    //현재 시간
    setD(Duration.days());
    setH(Duration.hours());
    setM(Duration.minutes());
    setS(Duration.seconds());
  };

  useEffect(() => {
    let date = dayjs.default("2022-10-21");
    let now = dayjs.default();
    let MintingTime = date.diff(now);
    setRemainTime(MintingTime);
    const interval = setInterval(Timer, 1000);
    if (MintingTime < 0) return clearInterval(interval);
  }, []);
  return (
    <MintingDateContainer>
      <Time>
        <Coming>
          <ComingText>Donut Gagye is Coming...</ComingText>
        </Coming>
        <TimeBox>
          <TimeText>{D}</TimeText>
          <TimeText2>day</TimeText2>
          <TimeText>{H}</TimeText>
          <TimeText2>h</TimeText2>
          <TimeText>{M}</TimeText>
          <TimeText2>m</TimeText2>
          <TimeText>{S}</TimeText>
          <TimeText2>s</TimeText2>
        </TimeBox>
      </Time>
    </MintingDateContainer>
  );
};
