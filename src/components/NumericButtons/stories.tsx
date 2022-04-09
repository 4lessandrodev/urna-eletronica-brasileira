import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NumericButton from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'NumericButton',
    component: NumericButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: { control: 'number' },
    },
} as ComponentMeta<typeof NumericButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<any> = (args) => <NumericButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    value: 1,
};
