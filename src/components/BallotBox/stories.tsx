import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'BallotBox',
    component: Component,
} as ComponentMeta<typeof Component>;

export const BallotBox: ComponentStory<any> = (args) => <Component {...args} />;

BallotBox.bind({});

BallotBox.args = {
    value: '',
};
