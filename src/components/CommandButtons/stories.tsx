import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'CommandButtons',
    component: Component,
} as ComponentMeta<typeof Component>;

export const CommandButtons: ComponentStory<any> = (args) => <Component {...args} />;
