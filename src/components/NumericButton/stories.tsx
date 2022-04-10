import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NumericButton from '.';

export default {
    title: 'NumericButton',
    component: NumericButton,
    argTypes: {
        value: { control: 'number' },
    },
} as ComponentMeta<typeof NumericButton>;

export const Button: ComponentStory<any> = (args) => <NumericButton {...args} />;

Button.bind({});

Button.args = {
    value: 1,
};
