import { render } from '@testing-library/react';
import Articles from './index';

test('if articles loading loader indicator will be shown', () => {
    const props = { loading: true }
    const component = render(<Articles {...props} />)
    const loaderComponent = component.getByRole('status-loading');
    expect(loaderComponent).toBeInTheDocument();
});