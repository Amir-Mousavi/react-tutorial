import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './src/Components/Greeting';

const App = () => (
  <div>
    <Greeting age={30} />
  </div>
);

const htmlRoot = document.getElementById('root');



ReactDOM.render(<App />, htmlRoot);