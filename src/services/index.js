const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/";

const getPopularArticles = (period) => fetch(`${BASE_URL}${period}.json?api-key=${process.env.REACT_APP_API_KEY}`);

export { getPopularArticles };