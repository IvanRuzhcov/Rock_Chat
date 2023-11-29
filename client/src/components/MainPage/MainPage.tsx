import React from 'react';
import style from './css/MainPage.module.css';

import InformationLine from './components/InformationLine/InformationLine';
import PhotoStream from './components/PhotoStream/PhotoStream';
import Footer from './components/Footer/Footer';
import RockSlider from './components/RockSlider/RockSlider';
import MainText from './components/MainText/MainText';
import NavBar from './components/NavBar/NavBar';

function MainPage() {
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <NavBar />
          <MainText />
        </div>
      </div>
      <InformationLine />
      <PhotoStream />
      <RockSlider />
      <Footer />
    </>
  );
}

export default MainPage;
