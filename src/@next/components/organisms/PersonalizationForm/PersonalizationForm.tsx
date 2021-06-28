import { Formik } from "formik";
import React from "react";
import { PersonalizationFormContent } from "./PersonalizationFormContent";
import { IProps } from "./types";

export const PersonalizationForm: React.FC<IProps> = ({
  handleSubmit,
  formId,
  ...props
}: IProps) => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", description: "" }}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        if (handleSubmit) {
          handleSubmit(values);
        }
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        setFieldTouched,
      }) => {
        return (
          <PersonalizationFormContent
            {...{
              formId,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldTouched,
              values,
            }}
            {...props}
          />
        );
      }}
    </Formik>
  );
};
