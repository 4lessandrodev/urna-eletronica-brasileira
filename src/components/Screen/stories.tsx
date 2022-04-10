import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Components from '.';

export default {
    title: 'Screen',
    component: Components,
    argTypes: { },
} as ComponentMeta<typeof Components>;

export const Screen: ComponentStory<any> = (args) => <Components {...args} />;

Screen.bind({});

Screen.args = {
    value: 1,
};
