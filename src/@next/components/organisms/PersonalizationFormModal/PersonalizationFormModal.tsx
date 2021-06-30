import React from "react";

import { PersonalizationForm } from "../PersonalizationForm";
import { Modal } from "../Modal";

import { IProps } from "./types";

export const PersonalizationFormModal: React.FC<IProps> = ({
  hideModal,
  submitBtnText,
  target,
  title,
  userId,
  formId,
  ...props
}: IProps) => {
  const [show, setShow] = React.useState(true);
  const errors: any[] | undefined = [];

  return (
    <Modal
      submitButtonTestingContext="submitPersonalizationFormModalButton"
      testingContext="submitPersonalizationFormModal"
      title={title}
      hide={() => {
        hideModal();
        setShow(false);
      }}
      formId={formId}
      disabled={false}
      show={show}
      target={target}
      submitBtnText={submitBtnText}
    >
      <PersonalizationForm
        {...props}
        {...{ errors }}
        formId={formId}
        handleSubmit={() => hideModal()}
      />
    </Modal>
  );
};
