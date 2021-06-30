import { storiesOf } from "@storybook/react";
import React from "react";

import { action } from "@storybook/addon-actions";
import { TextareaField } from ".";

const DEFAULT_PROPS = {
  errors: [],
  label: "Label",
  onChange: action("onChange"),
  value: "Value",
};

const ContentLeft = () => <span>Content Left</span>;
const ContentRight = () => <span>Content Right</span>;

storiesOf("@components/molecules/TextareaField", module)
  .addParameters({ component: TextareaField })
  .add("default", () => <TextareaField {...DEFAULT_PROPS} />)
  .add("with errors", () => (
    <TextareaField
      {...DEFAULT_PROPS}
      errors={[{ field: "field", message: "Some error" }]}
    />
  ))
  .add("with content left", () => (
    <TextareaField {...DEFAULT_PROPS} contentLeft={<ContentLeft />} />
  ))
  .add("with content right", () => (
    <TextareaField {...DEFAULT_PROPS} contentRight={<ContentRight />} />
  ));
