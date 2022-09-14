import { FC } from "react";
import { FooterContent } from "../components/Navigation/footer/FooterContent.component";
import { FootWrapper } from "../components/Navigation/footer/FooterWrapper.component";

interface LayoutProps {}
export const Footer: FC<LayoutProps> = () => {
  return (
    <FootWrapper>
      <FooterContent></FooterContent>
    </FootWrapper>
  );
};
