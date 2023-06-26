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
  const [addedLink, setAddedLink] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-26&sortBy=publishedAt&apiKey=da038a4401b24d67af342102fb153c48')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])

  const addLink = (added) => {
    console.log(added);
    const newAdded = [...addedLink, added];
    setAddedLink(newAdded);
  };

  // console.log(news);
  return (
    <div>
      
      <h1>Breaking News: {news.length}</h1>
      <button type="button" className="btn btn-primary position-relative">
        Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+{addedLink.length} <span class="visually-hidden">unread messages</span></span>
      </button>
      {/* <ButtonPractice></ButtonPractice> */}
      {
        news.map(article => <Cards article={article} addLink={addLink}></Cards>)
      }
    </div>
  );
}

export default App;
