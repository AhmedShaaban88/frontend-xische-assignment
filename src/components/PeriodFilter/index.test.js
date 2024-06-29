import { render, fireEvent } from '@testing-library/react';
import PeriodFilter from './index';

describe('Period Testing', () => {
    test('select box for period exits in the document', () => {
        const component = render(<PeriodFilter />)
        const selectBoxElement = component.getByLabelText('Select period');
        expect(selectBoxElement).toBeInTheDocument();
    });
    test('select box for period exits today is selected by default', () => {
        const component = render(<PeriodFilter />)
        const selectBoxElement = component.getByLabelText('Select period');
        expect(selectBoxElement).toHaveValue('1');
    });
    test('select box for period can change value', () => {
        const setPeriod = jest.fn();
        const props = { setPeriod };
        const component = render(<PeriodFilter {...props} />);
        const selectBoxElement = component.getByLabelText('Select period');
        fireEvent.change(selectBoxElement, {
            target: { value: "30" }
        });
        let options = component.getAllByTestId('select-option')
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeTruthy();
    });

})
