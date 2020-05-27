import React from 'react';
import styles from './CTASection.module.sass';
import CONSTANTS from '../../../constants';
import CustomButton from '../СustomButton/СustomButton';

const CTASection = (

  <div className={styles.CTAImgSpaceWrapper}>

    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/left_top.svg`} alt="left side" className={styles.leftTop} />

    <section id="CTASection" className={styles.CTASectionWrapper}>
      <h3>Ready to get started?</h3>
      <p>
        Fill out your contest brief and begin receiving custom name suggestions within minutes.
      </p>
       <div className={styles.upIndex}>
           <CustomButton action="Start A Contest" href="https://www.squadhelp.com/start-contest" color="isWhiteBlack" />
       </div>

    </section>

    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/right_bottom.svg`} alt="right side" className={styles.rightBottom} />

  </div>
);

export default CTASection;
