import { render } from '@testing-library/react';
import Articles from './index';

describe('Article Testing', () => {
    test('if articles loading loader indicator will be shown', () => {
        const props = { loading: true }
        const component = render(<Articles {...props} />)
        const loaderComponent = component.getByRole('status-loading');
        expect(loaderComponent).toBeInTheDocument();
    });
    test('if articles is send with empty array will not shown at all', () => {
        const props = { articles: [] }
        const component = render(<Articles {...props} />)
        const element = component.getByTestId("articles-container");
        expect(element).toBeEmptyDOMElement();
    });
    test('if articles is send with 2 elements will have 2 elements shown', () => {
        const props = { articles: [{ id: 1 }, { id: 2 }] }
        const { container } = render(<Articles {...props} />)
        const abstractParagraphs = container.querySelectorAll('.abstract-paragraph')
        expect(abstractParagraphs).toHaveLength(2);
    });
})
