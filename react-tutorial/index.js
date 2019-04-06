import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './src/Components/Greeting';
import Clocl from './src/Components/Clock';

const App = () => (
  <div>
    <Greeting age={30} />
    <Clocl />
  </div>
);

const htmlRoot = document.getElementById('root');



ReactDOM.render(<App />, htmlRoot);