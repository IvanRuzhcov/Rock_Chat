import React from 'react';
import style from './css/MainPage.module.css';
import profilePicture from '../../img/Ellipse 1.png';
import logo from '../../img/logo.png';
import Polygon from '../../img/Polygon 1.png';
import InformationLine from './components/InformationLine/InformationLine';
import PhotoStream from './components/PhotoStream/PhotoStream';
import Rock_Slider from './components/Rock_Slider/Rock_Slider';

function MainPage() {
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.navbar}>
            <div className={style.container_img}>
              <img
                src={profilePicture}
                alt=""
                className={style.profilePicture}
              />
              <img src={logo} alt="" className={style.logo} />
            </div>
            <div className={style.container_nav}>
              <span> About</span>
              <span> News</span>
              <span> Music</span>
              <span> Media</span>
              <span> Tours</span>
            </div>
          </div>
          <div className={style.text_1}>New Chat</div>
          <div className={style.text_2}>Welcome My Friends</div>
          <div className={style.line_Polygon}>
            <img src={Polygon} alt="" className={style.polygon} />
            <div className={style.line_1}></div>
            <div className={style.line_2}></div>
            <div className={style.line_3}></div>
            <span className={style.time_music}>00:22-02:54</span>
          </div>
        </div>
      </div>
      <InformationLine />
      <PhotoStream />
      <Rock_Slider/>
    </>
  );
}

export default MainPage;
