import React, { useCallback } from "react";
import { useIntl } from "react-intl";

import { TextField } from "@components/molecules";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { PropsWithFormik } from "./types";

export const PersonalizationFormContent: React.FC<PropsWithFormik> = ({
  formRef,
  handleChange,
  handleBlur,
  formId,
  errors,
  handleSubmit,
  values,
  testingContext,
}) => {
  const basicInputProps = useCallback(
    () => ({ onBlur: handleBlur, onChange: handleChange }),
    [handleChange, handleBlur]
  );
  const intl = useIntl();
  const fieldErrors: any = {};

  if (errors) {
    errors.map(({ field, message }: { field: string; message: string }) => {
      fieldErrors[field] = fieldErrors[field]
        ? [...fieldErrors[field], { message }]
        : [{ message }];
    });
  }

  return (
    <S.PersonalizationForm
      id={formId}
      ref={formRef}
      onSubmit={handleSubmit}
      data-test={testingContext}
    >
      <S.Wrapper>
        <S.RowWithTwoCells>
          <TextField
            name="firstName"
            label={intl.formatMessage(commonMessages.firstName)}
            value={values!.firstName}
            autoComplete="given-name"
            errors={fieldErrors!.firstName}
            {...basicInputProps()}
          />
          <TextField
            name="email"
            label={intl.formatMessage(commonMessages.shortEmail)}
            value={values!.email}
            autoComplete="email"
            errors={fieldErrors!.email}
            {...basicInputProps()}
          />
        </S.RowWithTwoCells>
        <S.RowWithOneCell>
          <TextField
            name="description"
            label={intl.formatMessage({ defaultMessage: "Description" })}
            value={values!.description}
            autoComplete="description"
            errors={fieldErrors!.description}
            {...basicInputProps()}
          />
        </S.RowWithOneCell>
      </S.Wrapper>
    </S.PersonalizationForm>
  );
};
