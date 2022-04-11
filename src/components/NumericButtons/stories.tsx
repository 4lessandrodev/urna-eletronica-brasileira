import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'NumericButtons',
    component: Component,
} as ComponentMeta<typeof Component>;

export const NumericButtons: ComponentStory<any> = (args) => <Component {...args} />;
