import React from 'react';
import styles from './ClientsSection.module.sass';
import CONSTANTS from '../../../constants';


const ClientsSection = (
  <section id="clients" className={styles.sectionClients}>
    <div className={styles.title}>
      <h4>Featured In</h4>
    </div>
    <div className={styles.clients}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/forbes.svg`} alt="forbes" />
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/TNW.svg`} alt="TNW" />
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/chicago.svg`} alt="chicago" />
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/Mashable.svg`} alt="Mashable" />
    </div>
  </section>
);


export default ClientsSection;
