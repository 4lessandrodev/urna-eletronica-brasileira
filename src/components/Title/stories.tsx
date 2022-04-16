import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '.';

export default {
    title: 'Title',
    component: Title,
    size: {
        control: { type: 'select' }, // Automatically inferred when 'options' is defined
        options: ['SMALL', 'MEDIUM', 'REGULAR', 'LARGE', 'XLARGE'],
    },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<any> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    value: 'Some Title',
    size: 'REGULAR',
};
