import { FC } from "react";
import { HeadWrapper } from "./../components/Navigation/header/HeadWrapper.component";
import { HeadLogo } from "./../components/Navigation/header/HeadLogo.component";
import { HeadWallet } from "./../components/Navigation/header/HeadWallet.component";
import { HeadLChildWrapper } from "../components/Navigation/header/HeadChildWrapper.componet";

interface LayoutProps {}
export const Header: FC<LayoutProps> = () => {
  return (
    <HeadWrapper>
      <HeadLChildWrapper>
        <HeadLogo />
        <HeadWallet />
      </HeadLChildWrapper>
    </HeadWrapper>
  );
};
