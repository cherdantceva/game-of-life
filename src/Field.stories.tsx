import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from '@storybook/addon-knobs';

import { Field } from "./Field";

export default {
    title: "Field",
    decorators: [withKnobs],
};

export const CellStory: React.FC<{}> = () => {
    const count = number("Number", 0);

    return (
        <Field />
    );
};