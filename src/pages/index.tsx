import { ReactElement } from 'react';
import PhotoHandler from '@components/PhotoHandler';

export default function Home(): ReactElement {
    return (
        <div>
            <PhotoHandler
                alt="image"
                src="image.jpg"
                height={500}
                width={500}
            />
        </div>
    );
}
