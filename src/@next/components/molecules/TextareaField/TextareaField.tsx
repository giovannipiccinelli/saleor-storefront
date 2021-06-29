import React from "react";

import { ErrorMessage, Textarea } from "@components/atoms";
import * as S from "./styles";
import { IProps } from "./types";

export const TextareaField: React.FC<IProps> = ({
  errors,
  helpText,
  ...rest
}: IProps) => {
  const hasErrors = !!(errors && errors.length);

  return (
    <>
      <S.TextareaField>
        <Textarea {...rest} error={hasErrors} />
        <S.ErrorMessages>
          <ErrorMessage errors={errors} />
          {helpText && <S.HelpText>{helpText}</S.HelpText>}
        </S.ErrorMessages>
      </S.TextareaField>
    </>
  );
};
