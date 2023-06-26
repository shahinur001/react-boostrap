import { useEffect, useState } from 'react';
import './App.css';
import ButtonPractice from './Components/Button/ButtonPractice';
import Cards from './Components/Cards/Cards';
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  const [news , setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-26&sortBy=publishedAt&apiKey=da038a4401b24d67af342102fb153c48')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])

  console.log(news);
  return (
    <div>
      <h1>Breaking News: {news.length}</h1>
      {/* <ButtonPractice></ButtonPractice> */}
      {
        news.map(article => <Cards article={article}></Cards>)
      }
    </div>
  );
}

export default App;
