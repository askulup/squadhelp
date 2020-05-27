import React from 'react';
import styles from './NamingContestsSection.module.sass';
import ImgIcon from '../ImgIcon/ImgIcon';
import CONSTANTS from '../../../constants';
import liItems from './NamingContestsSection.json';

const actionLiItems = liItems.map(({ step, action }) => (
  <li>
    <span>{step}</span>
    <p>{action}</p>
  </li>
));


const NamingContestsSection = (
  <div className={styles.sectionBorder}>
    <section id="naming" className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <ImgIcon size="72px" url={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/cup.svg`} />
        <h2>How Do Naming Contests Work?</h2>
      </div>
      <div className={styles.contentContainer}>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/support_man.svg`} alt="support man" className={styles.namingImg} />
        <ul>
          {actionLiItems}
        </ul>
      </div>
    </section>
  </div>


);

export default NamingContestsSection;
