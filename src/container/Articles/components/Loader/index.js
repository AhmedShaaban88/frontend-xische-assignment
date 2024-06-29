import React from 'react'
import { Row, Spinner } from 'react-bootstrap'

export default function Loader() {
    return (
        <Row className='d-flex justify-content-center'>
            <Spinner animation="border" role="status-loading">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Row>

    )
}
