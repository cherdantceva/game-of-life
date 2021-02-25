import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from '@storybook/addon-knobs';

import { Cell } from "./Cell";

export default {
    title: "Cell",
    decorators: [withKnobs],
};

export const CellStory: React.FC<{}> = () => {
    const count = number("Number", 0);

    return (
        <Cell >
            {count}
        </Cell>
    );
};