import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Cell } from "./Cell";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const CellStory: React.FC<Record<string, never>> = () => {
  const count = number("Number", 0);

  return <Cell>{count}</Cell>;
};
