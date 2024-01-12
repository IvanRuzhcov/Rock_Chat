import React, { useState } from 'react';
import style from '../../css/MainPage.module.css'
import { Link } from 'react-router-dom';
import profilePicture from '../../../../img/Ellipse 1.png';
import logo from '../../../../img/logo.png';

function NavBar() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = () => {
    // Ваш код для проверки аутентификации, например, извлечение токена из локального хранилища.
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  };
  

console.log(isAuthenticated)

    return (
        <>
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
              <Link to={'/'} className={style.links}>
                About
              </Link>
              <Link to={'/'} className={style.links}>
                News
              </Link>
              <Link to={'/'} className={style.links}>
                Music
              </Link>
              <Link to={'/'} className={style.links}>
                Media
              </Link>
              <div className={style.registr}>
                <div>
                  <Link to={'/register'} className={style.links}>
                    Sign Up
                  </Link>
                </div>
                <div>
                  <Link to={'/'} className={`${style.links} ${style.lastLink}`}>
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default NavBar;