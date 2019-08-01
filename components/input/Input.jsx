import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Input = ({
  color,
  size,
  isLoading,
  disabled,
  placeholder,
  type,
  onChange,
}) => (
  <div 
    className={classnames('control', {
      'is-loading': isLoading,
    })}
  >
    <input
      className={classnames('input', color, size)}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  /** Boolean indicating whether it should be disabled */
  disabled: PropTypes.bool,
  /** Boolean indicating whether it should be loading */
  isLoading: PropTypes.bool,
  /** input placeholder. */
  placeholder: PropTypes.string,
  /** input type. */
  type: PropTypes.string,
  /** onChange handler */
  onChange: PropTypes.func,
  /** color of the button */
  color: PropTypes.string,
  /** size of the button */
  size: PropTypes.string,
};

export default Input;