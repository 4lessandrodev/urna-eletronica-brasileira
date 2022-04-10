import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'Logo',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Logo: ComponentStory<any> = (args) => <Component {...args} />;

Logo.bind({});

Logo.args = {
    src: 'logo.png',
};
