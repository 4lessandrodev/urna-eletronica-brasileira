import React from 'react';
import PhotoHandler from '../PhotoHandler';
import Title from '../Title';
import Style, { Flex } from './style';

interface Props {
    src: string;
}

export default function Logo({ src }: Props) {
    return (
        <Style>
            <Flex>
                <PhotoHandler
                    alt="logo"
                    src={src}
                    width={90}
                    height={90}
                    withBorder={false}
                />
            </Flex>
            <Flex>
                <Title value="justiça" />
                <Title value="eleitoral" />
            </Flex>
        </Style>
    );
}
