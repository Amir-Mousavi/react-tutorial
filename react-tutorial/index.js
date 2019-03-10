import React from 'react';
import ReactDOM from 'react-dom';

const htmlRoot = document.getElementById('root');

const Greeting = (props) => {
  return (
    <div>
      {`Hello ${props.name}, you are ${props.age} years old.`}
    </div>
  );
};

ReactDOM.render(<Greeting name="John" age={30} />, htmlRoot);