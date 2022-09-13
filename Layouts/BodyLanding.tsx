import { FC } from "react";
import { ContentWrapper } from "../components/BodyLanding/ContentWrapper.component";
import { DescDetailContent } from "../components/BodyLanding/Desc/DescDetailContent.component";
import { MintInfoContent } from "../components/BodyLanding/MintinfoContent.component";
import { TitleContent } from "../components/BodyLanding/TitleContent.component";
import { PropertiesContent } from "../components/BodyLanding/Properties.component";
import { DescHowContent } from "../components/BodyLanding/Desc/DescHowContent.copnent";
import { SampleContent } from "../components/BodyLanding/SampleContent.component";
import { DescMetaverseContent } from "../components/BodyLanding/Desc/DescMetaverse.component";
import { FlowContent } from "../components/BodyLanding/FlowContent.component";

interface LayoutProps {}

export const BodyLanding: FC<LayoutProps> = () => {
  return (
    <ContentWrapper>
      <TitleContent />
      <MintInfoContent />
      <DescDetailContent />
      <DescHowContent />
      <PropertiesContent />
      <SampleContent />
      <DescMetaverseContent />
      <FlowContent />
    </ContentWrapper>
  );
};
