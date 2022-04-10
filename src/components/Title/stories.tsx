import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from '.';

export default {
    title: 'Title',
    component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<any> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    value: 'Some Title',
};
