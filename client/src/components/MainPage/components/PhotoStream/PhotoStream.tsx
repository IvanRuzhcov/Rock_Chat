import React from 'react';
import style from './css/PhotoStream.module.css';
import f from '../../../../img/Rectangle 20.png';

function PhotoStream() {
  return (
    <div className={style.container}>
      <div className={style.photo_card}>
        <div className={style.card_1}></div>
        <div className={style.card_2}></div>
        <div className={style.card_3}></div>
        <div className={style.card_4}></div>
        <div className={style.card_5}>
          <div className={style.card_text}>EDC Las Vegas Mainstage</div>
        </div>
      </div>
    </div>
  );
}

export default PhotoStream;
