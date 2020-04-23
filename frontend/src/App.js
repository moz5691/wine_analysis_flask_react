import './App.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from './config';
import Samples from './components/Samples';
import ScoreTable from './components/ScoreTable';

const baseUrl = config.baseUrl;

function App() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('TBD');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  // const data = { data: 'this is sample text' };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    axios
      .post(
        baseUrl + '/predict',
        { data: description },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          mode: 'no-cors',
        }
      )
      .then((res) => {
        console.log(res);
        setResult(res.data.prediction);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="ui container">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <br />
          <h2>
            Enter wine description here...(First requests may get delayed.
            Server needs to wake up.)
          </h2>{' '}
          <span>
            <p>(TFIDF & Random Forest)</p>
          </span>
          <br />
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Bragging your wine here..."
            rows="3"
          >
            {' '}
          </textarea>
        </div>
        <div className="input-field">
          <button class="ui button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <h3>Predcited your wine score class is </h3>
      <h1 class="ui blue header center aligned">{result}</h1>
      <button
        class="ui button"
        tabindex="0"
        onClick={() => {
          setDescription('');
          setResult('TBD');
        }}
      >
        Clear
      </button>
      <ScoreTable />
      <Samples />
    </div>
  );
}

export default App;
