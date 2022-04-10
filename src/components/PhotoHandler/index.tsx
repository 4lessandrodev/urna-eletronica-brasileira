import Image from 'next/image';
import React from 'react';
import Style, { DivProps } from './style';

interface Props extends DivProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const imgLoader = ({ src }: { src: string }) => {
    if (src.includes('http')) return src;
    return `assets/${src}`;
};

export default function PhotoHandler({
    alt, src, height, width, withBorder,
}: Props) {
    const lazyRoot = React.useRef(null);
    return (
        <Style ref={lazyRoot} withBorder={withBorder}>
            <Image
                loader={imgLoader}
                alt={alt}
                src={src}
                width={width}
                height={height}
            />
        </Style>
    );
}
