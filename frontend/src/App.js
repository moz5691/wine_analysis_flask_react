import './App.css';

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import config from './config';

const baseUrl = config.baseUrl

function App() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  // const data = { data: 'this is sample text' };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    axios
        .post(baseUrl + '/predict', {data: description}, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          mode: 'no-cors',
        })
        .then((res) => {
          console.log(res);
          setResult(res.data.prediction);
        })
        .catch((err) => console.log(err));
  };

  return (
    <div class='ui container'>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <br />
          <h2>Enter wine description here...</h2>{' '}
          <span>
            <p>(TFIDF & Random Forest)</p>
          </span>
          <br />
          <textarea
  type = 'text'
  name = 'description'
  value = {description} onChange = {handleChange} placeholder =
      'Bragging your wine here...'
  rows = '3' > {' '}</textarea>
        </div><div className = 'input-field'>
          <button class = 'ui button' type = 'submit'>
              Submit</button>
        </div>
          </form>
      <h3>Predcited your wine score class is </h3>
          <h1 class = 'ui blue header center aligned'>{result}<
              /h1>

      <table class="ui celled collapsing very basic table">
        <thead class="">
          <tr class="">
            <th class="">Score Class</th>
          <th class = ''>Range</th>
          </tr>
          </thead>
        <tbody class="">
          <tr class="">
            <td class="">
              <h4 class="ui image header">
                <div class="content">1</div>
          </h4>
            </td><td class = ''>~84 < /td>
          </tr >
          <tr class = ''><td class = ''><h4 class = 'ui image header'>
          <div class = 'content'>2 < /div>
              </h4 >
          </td>
            <td class="">84 ~ 88</td>
          </tr>
          <tr class="">
            <td class="">
              <h4 class="ui image header">
                <div class="content">3</div>
          </h4>
            </td><td class = ''>88 ~92 < /td>
          </tr >
          <tr class = ''><td class = ''><h4 class = 'ui image header'>
          <div class = 'content'>4 < /div>
              </h4 >
          </td>
            <td class="">92 ~ 96</td>
          </tr>
          <tr class="">
            <td class="">
              <h4 class="ui image header">
                <div class="content">5</div>
          </h4>
            </td>
          <td class = ''>96 and above</td>
          </tr>
          </tbody>
      </table>

          <div><h3>Sample descriptions to try<
              /h3>
        <div class="ui red segment">
          Score: 96 ||| Ripe aromas of fig, blackberry and cassis are softened
          and sweetened by a slathering of oaky chocolate and vanilla. This is
          full, layered, intense and cushioned on the palate, with rich flavors
          of chocolaty black fruits and baking spices. A toasty, everlasting
          finish is heady but ideally balanced. Drink through 2023.
        </div>
          <div class = 'ui orange segment'>Score: 86 ||
      |Juicy kiwi,
  lime blossom and sour apple candy aromas
  show on the nose of this ripe white—the first 2016 submitted from the
  region.The palate is oily in texture,
      with honeydew and more lime - kiwi -
          bubblegum flavors.<
              /div>
        <div class="ui yellow segment">
          Score: 93 ||| From a seven-acre section of the vineyard, this offers
          plenty of saddle leather and cedar amidst spicy cardamom layers, a
          soft, juicy core and tingling acidity. The structure and weight
          suggest the ability to cellar comfortably through 2020.
        </div>
          <div class = 'ui olive segment'>Score: 90 ||
      |The aromas that come together are those of scorched
  earth, grilled porcini, roasted coffee bean and a bit of burnt
  rubber.The mature palate offers dried cherry, blackberry confiture, mocha,
      vanilla and a hint of game alongside tongue - drying tannins
  that clench the finish.Give this a few years to unfold then drink
          sooner rather than later.
        </div>
        <div class="ui green segment">
          Score: 83 ||| This soft, robustly ripe wine shows a raisin-like prune
          character, tasting somewhat chalky on the palate.
        </div>
      </div>
    </div>
  );
}

export default App;
