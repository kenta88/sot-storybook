import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  onClick,
  disabled,
  label,
  color,
  size,
  isLoading,
}) => (
  <button
    className={classnames('button', color, size, {
      'is-loading': isLoading,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** Boolean indicating whether the button is loading */
  isLoading: PropTypes.bool,
  /** button label. */
  label: PropTypes.string.isRequired,
  /** onClick handler */
  onClick: PropTypes.func,
  /** color of the button */
  color: PropTypes.string,
  /** size of the button */
  size: PropTypes.string,
};

export default Button;