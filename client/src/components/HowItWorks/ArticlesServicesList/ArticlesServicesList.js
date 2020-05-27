import React from 'react';
import article from './articleServices.json';
import ImgIcon from '../ImgIcon/ImgIcon';
import styles from './ArticleServicesList.module.sass';
import CustomButton from '../СustomButton/СustomButton';

const ArticlesServicesList = article.map((liItem) => (
  <div className={styles.articleContainer}>
    <ImgIcon size="72px" url={liItem.srcPicture} />
    <h3 key={liItem.title}>{liItem.title}</h3>
    <p key={liItem.content}>{liItem.content}</p>
    <CustomButton action={liItem.action} href={liItem.href} color="isBlue" />
  </div>
));

export default ArticlesServicesList;
