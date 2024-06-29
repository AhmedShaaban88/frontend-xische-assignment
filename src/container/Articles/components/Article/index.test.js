import { render } from '@testing-library/react';
import Article from './index';

describe('Article Testing', () => {
    test('title anchor to be exists if pass as props', () => {
        const props = { article: { url: 'www.google.com', title: 'test title' } }
        const component = render(<Article {...props} />)
        const titleElement = component.getByText(/test title/i);
        expect(titleElement).toBeInTheDocument();
    });
    test('abstract details to have text pass as props', () => {
        const props = { article: { abstract: 'desc text' } }
        const component = render(<Article {...props} />)
        const abstractElement = component.getByTestId('desc-abstract');
        expect(abstractElement).toHaveTextContent('desc text');
    });
    test('title must have attribute href with value pass in url', () => {
        const props = { article: { url: 'www.google.com', title: 'test title' } }
        const component = render(<Article {...props} />)
        const titleElement = component.getByText(/test title/i);
        expect(titleElement).toHaveAttribute('href', 'www.google.com');
    });
})
