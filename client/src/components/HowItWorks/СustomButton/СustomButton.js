import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './СustomButton.module.sass';

const CustomButton = (props) => {
  const {
    href, action, color, isPill,
  } = props;

  const customButtonClassName = classNames(
    styles.containedButton,
    {
      [styles.buttonBlue]: color === 'isBlue',
      [styles.buttonWhiteBlack]: color === 'isWhiteBlack',
      [styles.buttonWhiteBlue]: color === 'isWhiteBlue',
      [styles.buttonBorderRound]: isPill === 1,
    },
  );

  return (
    <div className={customButtonClassName}>
      <a className={styles.customLabel} href={href} rel="noopener noreferrer" target="_blank">
        {action}
      </a>
    </div>
  );
};

export default CustomButton;


CustomButton.propTypes = {
  href: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  color: PropTypes.string,
  isPill: PropTypes.number,
};

CustomButton.defaultProps = {
  color: 'isBlue',
  isPill: 0,
};
