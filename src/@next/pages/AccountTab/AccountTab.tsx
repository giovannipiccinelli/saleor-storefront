import React from "react";

import { AccountTabTiles } from "@components/molecules";
import { LoadingBarLine } from "../../../components";
import * as S from "./styles";

export const AccountTab: React.FC = () => {
  return (
    <S.Wrapper>
      <LoadingBarLine />
      <AccountTabTiles />
    </S.Wrapper>
  );
};
