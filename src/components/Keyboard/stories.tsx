import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'Keyboard',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Keyboard: ComponentStory<any> = (args) => <Component {...args} />;
