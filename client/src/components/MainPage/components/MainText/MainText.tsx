import React from 'react';
import style from '../../css/MainPage.module.css'
import Polygon from '../../../../img/Polygon 1.png';


function MainText() {
    return (
        <>
        <div className={style.text_1}>New Chat</div>
          <div className={style.text_2}>Welcome My Friends</div>
          <div className={style.line_Polygon}>
            <img src={Polygon} alt="" className={style.polygon} />
            <div className={style.line_1}></div>
            <div className={style.line_2}></div>
            <div className={style.line_3}></div>
            <span className={style.time_music}>00:22-02:54</span>
          </div>
          </>
    );
}

export default MainText;