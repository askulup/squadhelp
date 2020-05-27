import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImgIcon.module.scss';


const ImgIcon = (props) => {
  const { url, size, styleClassName } = props;

  const [isError, setIsError] = useState(null);

  const handleError = () => {
    setIsError(true);
  };

  const containerStyle = {
    width: size,
    height: size,
  };

  return (
    <div style={containerStyle} className={styles.container}>
      {
                isError
                  ? null
                  : (
                    <img
                      src={url}
                      alt="SVG"
                      onError={handleError}
                      className={styleClassName}
                    />
                  )
}
    </div>
  );
};

ImgIcon.propTypes = {
  size: PropTypes.string,
  url: PropTypes.string,
  styleClassName: PropTypes.string,
};

ImgIcon.defaultProps = {
  size: '72px',
  url: 'https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png',
  styleClassName: '',
};

export default ImgIcon;
