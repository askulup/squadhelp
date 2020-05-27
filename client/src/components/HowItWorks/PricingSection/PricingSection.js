import React from 'react';
import styles from './PricingSection.module.sass';
import CONSTANTS from '../../../constants';
import SatisfactionGaurenteedModal from '../SatisfactionGaurenteedModal/SatisfactionGaurenteedModal';
import CustomButton from '../СustomButton/СustomButton';


const PricingSection = (
  <section id="naming" className={styles.sectionContainer}>
    <div className={styles.infoPay}>
      <ul>
        <li>
          <span>
            <i className="fas fa-angle-right" />
          </span>
          <div className={styles.media}>
            <h4>Pay a Fraction of cost vs hiring an agency</h4>
            <p>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.</p>
          </div>
        </li>
        <li className={styles.borderTop} />
        <li>
          <span>
            <i className="fas fa-angle-right" />
          </span>
          <div className={styles.media}>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Of course! We have policies in place to ensure that you are satisfied with your experience.
              <SatisfactionGaurenteedModal />
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className={styles.contacts}>
      <h4>Questions?</h4>
      <p>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
      <CustomButton action="Shedule Consultation" href="tel:(877)355-3585" color="isWhiteBlue" isPill={1} />
      <a href="tel:(877)355-3585" className={styles.phone}>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/phone_icon.svg`}
          alt="phone"
        />
&nbsp;&nbsp;(877)&nbsp;355-3585
      </a>
      <p>Call us for assistance</p>
    </div>
  </section>
);

export default PricingSection;
