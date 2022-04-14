import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Components from '.';

export default {
    title: 'Screen',
    component: Components,
    argTypes: { },
} as ComponentMeta<typeof Components>;

export const Screen: ComponentStory<any> = (args) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
        width: '100%',
    }}
    >
        <div style={{ display: 'flex' }}>
            <Components {...args} />
        </div>
    </div>
);

Screen.bind({});

Screen.args = {
    value: 1,
};
