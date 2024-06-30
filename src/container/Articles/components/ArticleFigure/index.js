import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Figure } from 'react-bootstrap';
import './index.css';

function ArticleFigure({ images, caption, byline, source, lastUpdated }) {
    const [image, setImage] = useState({});
    const getImage = () => {
        const screenWidth = window?.screen.width;
        if (screenWidth > 992) return setImage(images[images?.length - 1]);
        else if (screenWidth < 991 && screenWidth > 600) return setImage(images[images?.length - 2]);
        return setImage(images?.[0]);
    }
    useEffect(() => {
        window.addEventListener('resize', getImage)
        return () => window.removeEventListener('resize', getImage)
    })
    useEffect(() => {
        getImage();
    }, [caption])
    return (
        <Figure>
            <Figure.Image
                width={image?.width}
                height={image?.height}
                alt="image"
                src={image?.url}
            />
            <Figure.Caption data-testid="caption">
                {caption} {byline ? `- ${byline}` : ''} {source ? `, For ${source}` : ''}
            </Figure.Caption>
            <small className='read-article'>{moment(lastUpdated).fromNow(true)} read</small>
        </Figure>
    )
}

export default ArticleFigure