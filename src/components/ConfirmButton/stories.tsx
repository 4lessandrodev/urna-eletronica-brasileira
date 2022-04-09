import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfirmButton from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ConfirmButton',
    component: ConfirmButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: { control: 'number' },
    },
} as ComponentMeta<typeof ConfirmButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Button: ComponentStory<any> = (args) => <ConfirmButton {...args} />;

Button.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
    value: 'confirma',
};
