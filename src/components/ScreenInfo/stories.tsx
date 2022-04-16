import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'ScreenInfo',
    component: Component,
} as ComponentMeta<typeof Component>;

export const ScreenInfo: ComponentStory<any> = (args) => <Component {...args} />;

ScreenInfo.bind({});

ScreenInfo.args = {

};
