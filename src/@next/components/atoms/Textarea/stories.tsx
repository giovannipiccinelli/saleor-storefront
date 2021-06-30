import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Textarea } from ".";

storiesOf("@components/atoms/Textarea", module)
  .addParameters({ component: Textarea })
  .add("default", () => <Textarea value="" label="Empty" />)
  .add("with value", () => (
    <Textarea
      label="Text goes here"
      value={text("value", "Example text")}
      contentRight={<div>Content right</div>}
    />
  ))
  .add("error", () => (
    <Textarea value="Some text" label="Text goes here" error />
  ))
  .add("disabled", () => <Textarea value="" label="Text goes here" disabled />);
