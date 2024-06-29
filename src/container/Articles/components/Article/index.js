import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './index.css';
import ArticleFigure from '../ArticleFigure';
export default function Article({ article }) {
    const { url, source, updated, byline, title, abstract, media } = article;
    return (
        <Row className='pt-3'>
            <Col md={6} xs={12}>
                <a href={url} target='_blank'>{title}</a>
                <p className='abstract-paragraph' data-testid="desc-abstract">{abstract}</p>
            </Col>
            <Col md={6} xs={12}>
                {media?.map(mediaItem => <ArticleFigure images={mediaItem?.["media-metadata"]}
                    caption={mediaItem?.caption}
                    key={mediaItem?.caption}
                    byline={byline}
                    source={source}
                    lastUpdated={updated}
                />)}
            </Col>
        </Row>

    )
}
