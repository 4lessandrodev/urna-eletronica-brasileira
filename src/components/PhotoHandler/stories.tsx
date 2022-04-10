import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PhotoHandler from '.';

export default {
    title: 'PhotoHandler',
    component: PhotoHandler,
    argTypes: {
        value: { control: 'number' },
    },
} as ComponentMeta<typeof PhotoHandler>;

export const LocalImage: ComponentStory<any> = (args) => <PhotoHandler {...args} />;

LocalImage.bind({});

LocalImage.args = {
    src: 'image.jpg',
    alt: 'image',
    width: 200,
    height: 200,
    withBorder: true,
};

export const InvalidImage: ComponentStory<any> = (args) => <PhotoHandler {...args} />;

InvalidImage.bind({});

InvalidImage.args = {
    src: 'invalid',
    alt: 'image',
    width: 200,
    height: 200,
    withBorder: true,
};

export const RemoteImage: ComponentStory<any> = (args) => <PhotoHandler {...args} />;

RemoteImage.bind({});

RemoteImage.args = {
    src: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
    alt: 'image',
    width: 200,
    height: 200,
    withBorder: true,
};
