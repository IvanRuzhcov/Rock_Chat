import React, { useState } from 'react';
import style from './css/RegiserPage.module.css';
import NavBar from '../MainPage/components/NavBar/NavBar';
function RegiserPage() {

const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [secPassword , setSecPassword] = useState('')
const [telephone , setTelephone] = useState('')



  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.border}>
        <div className={style.one_layer}>
          <div className={style.two_layer}>
            <div className={style.three_layer}>
              <div className={style.registr_form}>
                <div className={style.heading}>Sing in</div>
                <div className={style.imput_form}>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className={style.imput_form}>
                  <input type="email" placeholder="Your email" />
                </div>
                <div className={style.imput_form}>
                  <input type="password" placeholder="Password" />
                </div>
                <div className={style.imput_form}>
                  <input type="password" placeholder="Password" />
                </div>
                <div className={style.imput_form}>
                  <input type="tel" placeholder="Telephone" />
                </div>
                <div className={style.container_btn}>
                  <div className={style.text_btn}>Music is waiting for you</div>
                  <div className={style.box_btn}>
                    <button className={style.btn}>Sing</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegiserPage;
