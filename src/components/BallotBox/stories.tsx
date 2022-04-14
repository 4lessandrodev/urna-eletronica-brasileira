import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'BallotBox',
    component: Component,
} as ComponentMeta<typeof Component>;

export const BallotBox: ComponentStory<any> = (args) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
        width: '100%',
    }}
    >
        <div style={{ display: 'flex' }}>
            <Component {...args} />
        </div>
    </div>
);

BallotBox.bind({});

BallotBox.args = {
    value: '',
};
