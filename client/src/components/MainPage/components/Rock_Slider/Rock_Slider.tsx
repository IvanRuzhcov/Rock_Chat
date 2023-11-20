import React from 'react';
import style from './css/Rock_Slider.module.css';
import tuda from '../../../../img/Group 23.png';
import suda from '../../../../img/Group 24.png';
import photo_1 from '../../../../img/Rectangle 27.png';
import photo_2 from '../../../../img/Rectangle 28.png';
import photo_3 from '../../../../img/Rectangle 29.png';

function Rock_Slider() {
  return (
    <div className={style.container}>
      <div className={style.card_block}>
        <div className={style.suda}>
          <img src={suda} alt="" />
        </div>
        <div className={style.cards}>
          <div className={style.rock_festival_card}>
            <img src={photo_1} alt="" />
            <div>
              <div className={style.card_text}>
                <div className={style.text_sity}>Chandler, AZ</div>
                <div className={style.text_place}>
                  The Park at Wild Horse Pass
                </div>
              </div>
              <div className={style.futer_card}>
                <div className={style.contsiner_card_data} >
                  <div className={style.card_data}>
                  Apr 02 2021
                  </div>
                  </div>
                <div className={style.card_btn}>
                  <button>Tickets</button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rock_festival_card}>
            <img src={photo_2} alt="" />
            <div>
              <div className={style.card_text}>
                <div className={style.text_sity}>Ibiza, IBZ</div>
                <div className={style.text_place}>
                Swag Ibiza Club
                </div>
              </div>
              <div className={style.futer_card}>
                <div className={style.contsiner_card_data} >
                  <div className={style.card_data}>
                  Jul 08 2021
                  </div>
                  </div>
                <div className={style.card_btn}>
                  <button>Tickets</button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rock_festival_card}>
            <img src={photo_3} alt="" />
            <div>
              <div className={style.card_text}>
                <div className={style.text_sity}>Ibiza, IBZ</div>
                <div className={style.text_place}>
                El Swing Ibiza
                </div>
              </div>
              <div className={style.futer_card}>
                <div className={style.contsiner_card_data} >
                  <div className={style.card_data}>
                  Jul 10 2021
                  </div>
                  </div>
                <div className={style.card_btn}>
                  <button>Tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.tuda}>
          <img src={tuda} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rock_Slider;
