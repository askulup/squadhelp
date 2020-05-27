import React from 'react';
import ImgIcon from '../ImgIcon/ImgIcon';
import styles from './StatisticsSection.module.sass';
import CONSTANTS from '../../../constants';

const StatisticsSection = (
  <section className={styles.statisticsSection}>
    <div className={styles.statContainer}>
      <ImgIcon size="72px" url={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/stars.svg`} />
      <p className={styles.statParagraph}>
        <mark>4.9 out of 5 stars</mark>
        {' '}
        from 25,000+ customers.
      </p>
    </div>

    <div className={styles.statContainer}>

      <ImgIcon size="72px" url={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/community.png`} />
      <p className={styles.statParagraph}>
        Our branding community stands
        {' '}
        <mark>200,000+</mark>
        {' '}
        strong.
      </p>
    </div>

    <div className={styles.statContainer}>
      <ImgIcon size="72px" url={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/ind_supported.svg`} />
      <p>
        <mark>140+ Industries</mark>
        {' '}
        supported across more than
        {' '}
        <mark>85 countries</mark>
        {' '}
        – and counting.
      </p>
    </div>
  </section>
);

export default StatisticsSection;
