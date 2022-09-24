import { FC } from "react";
import { ContentWrapper } from "../components/BodyLanding/ContentWrapper.component";
import { DescDetailContent } from "../components/BodyLanding/Section2/DescDetailContent.component";
import { MintInfoContent } from "../components/BodyLanding/Section1/MintinfoContent.component";
import { TitleContent } from "../components/BodyLanding/Section1/TitleContent.component";
import { PropertiesContent } from "../components/BodyLanding/Section3/Properties.component";
import { DescWhatContent } from "../components/BodyLanding/Section3/DescWhatContent.copnent";
import { SampleContent } from "../components/BodyLanding/Section3/SampleContent.component";
import { DescMetaverseContent } from "../components/BodyLanding/Section4/DescMetaverse.component";
import { FlowContent } from "../components/BodyLanding/Section5/FlowContent.component";
import { Section1 } from "../components/BodyLanding/Section1/Section1.comonent";
import { Section2 } from "./../components/BodyLanding/Section2/Section2.component";
import { Section3 } from "../components/BodyLanding/Section3/Section3.component";
import { Section4 } from "../components/BodyLanding/Section4/Section4.component";
import { Section5 } from "./../components/BodyLanding/Section5/Section5.component";
interface LayoutProps {}

export const BodyLanding: FC<LayoutProps> = () => {
  return (
    <ContentWrapper>
      <Section1>
        <TitleContent />
        <MintInfoContent />
      </Section1>
      <Section2>
        <DescDetailContent />
      </Section2>
      <Section3>
        <DescWhatContent />
        <PropertiesContent />
        <SampleContent />
      </Section3>
      <Section4>
        <DescMetaverseContent />
      </Section4>
      <Section5>
        <FlowContent />
      </Section5>
    </ContentWrapper>
  );
};
