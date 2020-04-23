import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonText, primary } = props;
  let btnClass = '';

  if (primary) {
    btnClass = 'bg-transparent hover:bg-blue-500 text-indigo-100 font-semibold hover:text-white py-2 px-4 border border-indigo-100 hover:border-transparent rounded';
  }
  return (
    <button type="button" className={`${btnClass}`}>
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
};


export default Button;
