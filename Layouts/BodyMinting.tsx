import { FC } from "react";
import { MintWrapper } from "../components/BodyMinting/MintWrapper.component";
import { NFTCard } from "../components/BodyMinting/NFTCard.component";

interface LayoutProps {}
export const BodyMinting: FC<LayoutProps> = () => {
  return (
    <MintWrapper>
      <NFTCard />
    </MintWrapper>
  );
};
