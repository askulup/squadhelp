import React from 'react';
import styles from './PlayButton.module.sass';

const PlayButton = (
  <div className={styles.btnWrapper}>
    <a href="https://fast.wistia.com/embed/medias/l2bhtku7e6" rel="noopener noreferrer" target="_blank">
      <small className="fas fa-play mr-2" />
      Play Video
    </a>
  </div>
);

export default PlayButton;
