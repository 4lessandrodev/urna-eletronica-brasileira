import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputNumber from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'InputNumber',
    component: InputNumber,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: { control: 'number' },
    },
} as ComponentMeta<typeof InputNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Input: ComponentStory<any> = (args) => <InputNumber {...args} />;

Input.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
    value: '9',
};

export const EmptyInput: ComponentStory<any> = (args) => <InputNumber {...args} />;

EmptyInput.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyInput.args = {
    value: '',
};
