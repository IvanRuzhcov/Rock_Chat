import React from 'react';
import style from './css/Footer.module.css';
import face from '../../../../img/Ellipse 1.png';
import logo from '../../../../img/logo.png';
import apple from '../../../../img/apple 1.png'
import instagram from '../../../../img/instagram 1.png'
import twitter from '../../../../img/twitter 1.png'
import facebook from '../../../../img/facebook 1.png'
import youtube from '../../../../img/youtube 1.png'

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.container}>

        
        <div className={style.logo}>
          <div className={style.logo_img}>
            <img src={face} alt="" />
          </div>
          <div className={style.logo_logo}>
            <img src={logo} alt="" />
          </div>
        </div>


        <div className={style.name_autor}>
          <div className={style.left}>
            <div className={style.work}>Developer :</div>
            <div className={style.email}>EMAIL:</div>
          </div>
          <div className={style.right}>
            <div className={style.name}>Ivan Ryzhkov</div>
            <div className={style.email_developer}>vanya.ruzhcov@gmail.com</div>
          </div>
        </div>


        <div className={style.socialNetwork}>
            <div className={style.greyCircle}>
                <div className={style.purpleCircle}>
                    <img src={apple} alt="" className={style.logo_brand}/>
                </div>
            </div>
            <div className={style.greyCircle}>
                <div className={style.purpleCircle}>
                    <img src={instagram} alt="" className={style.logo_brand}/>
                </div>
            </div>
            <div className={style.greyCircle}>
                <div className={style.purpleCircle}>
                    <img src={twitter} alt="" className={style.logo_brand}/>
                </div>
            </div>
            <div className={style.greyCircle}>
                <div className={style.purpleCircle}>
                    <img src={facebook} alt="" className={style.logo_brand}/>
                </div>
            </div>
            <div className={style.greyCircle}>
                <div className={style.purpleCircle}>
                    <img src={youtube} alt="" className={style.logo_brand}/>
                </div>
            </div>
        </div>
        <div className={style.footer}>©  2023 DJ bright lights.</div>
      </div>
    </div>
  );
}

export default Footer;
