import { FC } from "react";
import { HeadWrapper } from "./../components/Navigation/header/HeadWrapper.component";
import { HeadLogo } from "./../components/Navigation/header/HeadLogo.component";
import { HeadWallet } from "./../components/Navigation/header/HeadWallet.component";
import { HeadLChildWrapper } from "../components/Navigation/header/HeadChildWrapper.componet";
import { HeadLTitleWrapper } from "../components/Navigation/header/HeadTitleWrapper.component";
import { HeadSubTitle } from "../components/Navigation/header/HeadSubTitle.component";
import { HeadTitle } from "../components/Navigation/header/HeadTitle.component";
import { HeadSubTitleWrapper } from "../components/Navigation/header/HeadSubTitleWrapper.component";
import { HeadList } from "../components/Navigation/header/HeadList.component";

interface LayoutProps {}

export const Header: FC<LayoutProps> = () => {
  return (
    <HeadWrapper>
      <HeadLChildWrapper>
        <HeadSubTitleWrapper>
          <HeadLTitleWrapper>
            <HeadLogo />
            <HeadTitle />
          </HeadLTitleWrapper>
          <HeadSubTitle />
        </HeadSubTitleWrapper>
        <HeadList />
        <HeadWallet />
      </HeadLChildWrapper>
    </HeadWrapper>
  );
};
