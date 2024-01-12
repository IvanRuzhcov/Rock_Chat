import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './css/RegiserPage.module.css';
import NavBar from '../MainPage/components/NavBar/NavBar';
import { useAppDispatch } from '../../store';
import { RegisterData } from './type/RegisterData';
import { registerUser } from './regiserSlace';
import { useNavigate } from 'react-router-dom';
function RegiserPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [telephone, setTelephone] = useState('');

  const { register, handleSubmit } = useForm<RegisterData>();

  const onSubmit = async (data: RegisterData) => {
    const dispatchResult = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  };
  return (
    <div className={style.container}>
      
      <NavBar />
      <div className={style.border}>
        <div className={style.one_layer}>
          <div className={style.two_layer}>
            <div className={style.three_layer}>
              <div className={style.registr_form}>
                <div className={style.heading}>Sing in</div>
                <form
                  className={style.imput_form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register('login')}
                    type="text"
                    placeholder="Your login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />

                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    {...register('passwordRepeat')}
                    type="password"
                    placeholder="Password"
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                  />

                  <input
                    {...register('telephone')}
                    type="tel"
                    placeholder="Telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                  <div className={style.container_btn}>
                    <div className={style.text_btn}>
                      Music is waiting for you
                    </div>
                    <div className={style.box_btn}>
                      <button type="submit" className={style.btn}>
                        Sing
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegiserPage;
