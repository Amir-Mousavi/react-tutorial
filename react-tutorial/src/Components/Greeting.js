import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({
  age,
  name,
}) => {
  return (
    <div>
      {`Hello ${name}, you are ${age} years old.`}
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

Greeting.defaultProps = {
  name: 'User',
};

export default Greeting;
