import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'NUmericButtons',
    component: Component,
} as ComponentMeta<typeof Component>;

export const NUmericButtons: ComponentStory<any> = (args) => <Component {...args} />;
