import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
import PeriodFilter from './components/PeriodFilter';
import ArticlesContainer from './container/Articles';
import { getPopularArticles } from './services';


function App() {
  const [period, setPeriod] = useState('1');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getArticles() {
      setLoading(true);
      try {
        const response = await getPopularArticles(period);
        const json = await response.json();
        setArticles(json.results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getArticles()
  }, [period])
  return (
    <Container>
      <Row className='p-5'>
        <Col xs={9} className='title'>The New York Times</Col>
        <Col xs={3}>
          <PeriodFilter setPeriod={setPeriod} />
        </Col>
      </Row>
      <ArticlesContainer articles={articles} loading={loading} />
    </Container>
  );
}

export default App;
