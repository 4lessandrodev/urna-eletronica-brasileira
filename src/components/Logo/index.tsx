import React from 'react';
import PhotoHandler from '../PhotoHandler';
import Title from '../Title';
import Style, { Flex } from './style';

export default function Logo() {
    return (
        <Style>
            <Flex>
                <PhotoHandler
                    alt="logo"
                    src="logo.png"
                    width={90}
                    height={90}
                    withBorder={false}
                />
            </Flex>
            <Flex>
                <Title value="justiça" size="REGULAR" />
                <Title value="eleitoral" size="REGULAR" />
            </Flex>
        </Style>
    );
}
