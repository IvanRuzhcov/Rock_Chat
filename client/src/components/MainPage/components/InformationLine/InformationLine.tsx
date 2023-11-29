import React from 'react';
import style from './css/InformationLine.module.css';

function InformationLine() {
  return (
    <div className={style.container}>
      <div className={style.markup}>
        <div className={style.box_info_1}>
          <div className={style.text_field}>
            <div className={style.text}>
              Working on my upcoming full-lenth album that`s releasing later
              this year.
            </div>
          </div>
        </div>
        <div className={style.box_info_2}>
          <div className={style.text_field}>
            <div className={style.text}>
                <div>Halloween vibes.</div>
                <div>Listen my new track!</div>
            </div>
          </div>
        </div>
        <div className={style.box_info_3}>
          <div className={style.text_field}>
            <div className={style.text}>
              <div>WarForLove is OUT NOW!!</div>
              <div>Stream it here!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationLine;
