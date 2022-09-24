import { FC } from "react";
import { MintContent } from "../components/BodyMinting/MintContent.component";
import { MintDate } from "../components/BodyMinting/MintDate.compoent";
import { MintFooter } from "../components/BodyMinting/MintFooter.component";
import { MintWrapper } from "../components/BodyMinting/MintWrapper.component";
import { Header } from "./Header";

interface LayoutProps {}
export const BodyMinting: FC<LayoutProps> = () => {
  return (
    <MintWrapper>
      <Header />
      <MintDate />
      <MintContent />
      <MintFooter />
    </MintWrapper>
  );
};
