import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommandButton from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'CommandButton',
    component: CommandButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CommandButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<any> = (args) => <CommandButton {...args} />;

export const Orange = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Orange.args = {
    color: 'orange',
    value: 'Corrige',
};

export const White = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
White.args = {
    color: 'white',
    value: 'Branco',
};
