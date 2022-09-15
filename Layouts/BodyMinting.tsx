import { FC } from "react";
import { MintBtn } from "../components/BodyMinting/MintBtn.component";
import { MintWrapper } from "../components/BodyMinting/MintWrapper.component";
import { Header } from "./Header";

interface LayoutProps {}
export const BodyMinting: FC<LayoutProps> = () => {
  return (
    <MintWrapper>
      <Header />
      <MintBtn />
    </MintWrapper>
  );
};
