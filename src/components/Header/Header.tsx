import React from 'react';
import logoImg from '@/assets/image/logo1.png';
import { IoMenu } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__menu">
          <IoMenu />
        </div>
        <div className="header__logo">
          <img src={logoImg} className="header__logo-img" />
        </div>
        <div className="header__nav">
          <div className="header__nav-items">
            <div className="header__nav-item header__nav-item--logo">
              <img src={logoImg} className="header__logo-img" />
            </div>
            <div className="header__nav-item">
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </div>
            <div className="header__nav-item">
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </div>
            <div className="header__nav-item">
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="header__btns">
          <div className="header__btn header__btn--login">登入</div>
          <div className="header__btn header__btn--register">註冊</div>
        </div>
      </div>
      <div className="header__marquee">
        <p className="header__text">
          一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈一番賞通知跑馬燈...
        </p>
      </div>
    </div>
  );
};

export default Header;
