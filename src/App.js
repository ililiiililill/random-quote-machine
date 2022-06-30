import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState('#282c34');

  useEffect(() => {
    getQuote();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    if (data) {
      setQuote({
        text: data.content,
        author: data.author
      });

      var color = colors[Math.floor(Math.random() * colors.length)];
      setColor(color);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: color, color: color }}>
      <div id="quote-box">
        <div class="quote-text" style={{ color: color }}>
          <i class="fa fa-quote-left"></i>
          <span id="text">{quote.text}</span>
          <i class="fa fa-quote-right"></i>
        </div>
        <div class="quote-author" style={{ color: color }}>
          <span id="author">- {quote.author}</span>
        </div>
        <div class="buttons">
          <button
            id="new-quote"
            className="button"
            style={{ backgroundColor: color }}
            onClick={getQuote}
          >
            New Quote
          </button>
          <a
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
              encodeURIComponent('"' + quote.text + '" ' + quote.author)
            }
            className="button"
            style={{ backgroundColor: color }}
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
