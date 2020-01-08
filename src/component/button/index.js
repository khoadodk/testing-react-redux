import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, emitEvent }) => {
  const handleClick = () => {
    emitEvent();
  };
  return (
    <button data-test="buttonComponent" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;
