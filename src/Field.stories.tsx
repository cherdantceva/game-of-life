import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Field } from "./Field";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const CellStory: React.FC<Record<string, never>> = () => {
  return <Field />;
};
