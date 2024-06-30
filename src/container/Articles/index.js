import React from 'react'
import Article from './components/Article'
import { Container } from 'react-bootstrap'
import Loader from './components/Loader'

export default function ArticlesContainer({ articles, loading }) {
    return (
        <Container data-testid="articles-container">
            {loading ? <Loader /> : articles?.map((article) => <Article key={article?.id} article={article} />)}
        </Container>

    )
}
