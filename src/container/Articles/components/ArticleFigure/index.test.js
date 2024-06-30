import { render } from "@testing-library/react";
import ArticleFigure from ".";

describe('Article Figure Testing', () => {
    test('caption to be exists if pass as props and have the value passed', () => {
        const props = { caption: 'test caption' }
        const component = render(<ArticleFigure {...props} />)
        const captionElement = component.getByTestId("caption");
        expect(captionElement).toBeInTheDocument();
        expect(captionElement).toHaveTextContent("test caption");
    });

    test('image must be shown in the ArticleFigure if it passes', () => {
        const media = [
            {
                "type": "image",
                "subtype": "",
                "caption": "",
                "copyright": "",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/06/24/multimedia/promo-1719248120904/promo-1719248120904-thumbStandard.png",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/06/24/multimedia/promo-1719248120904/promo-1719248120904-mediumThreeByTwo210.png",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/06/24/multimedia/promo-1719248120904/promo-1719248120904-mediumThreeByTwo440.png",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ];
        const props = { images: media }
        const component = render(<ArticleFigure {...props} />)
        const captionElement = component.getByAltText("image");
        expect(captionElement).toBeInTheDocument();
    });
})
