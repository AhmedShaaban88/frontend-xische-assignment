import React from 'react'
import { Form } from 'react-bootstrap'

export default function PeriodFilter({ setPeriod }) {
    const handlePeriodChange = (e) => {
        setPeriod(e.target.value)
    }
    return (
        <>
            <Form.Label htmlFor="day-filter">Select period</Form.Label>
            <Form.Select aria-label="day filter" id='day-filter' onChange={e => handlePeriodChange(e)}>
                <option value="1" data-testid="select-option">Today</option>
                <option value="7" data-testid="select-option">Last Week</option>
                <option value="30" data-testid="select-option">Last Month</option>
            </Form.Select>
        </>

    )
}
