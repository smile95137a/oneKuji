import React from 'react';
import logoImg from '@/assets/image/logo1.png';
import { IoMenu } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSlidebar } from '@/context/SlidebarContext';
const Header = () => {
  const { isOpen, toggleSlidebar, closeSlidebar } = useSlidebar();

  return (
    <div className="header">
      <div className="header__main">
        <div className="header__menu" onClick={toggleSlidebar}>
          <IoMenu />
        </div>
        <div className="header__logo">
          <Link to={'/main'}>
            <img src={logoImg} className="header__logo-img" />
          </Link>
        </div>
        <div
          className={isOpen ? 'header__nav header__nav--open' : 'header__nav'}
          onClick={closeSlidebar}
        >
          <div className="header__nav-items">
            <div className="header__nav-item header__nav-item--logo">
              <img src={logoImg} className="header__logo-img" />
            </div>
            <Link className="header__nav-item" to={'/product'}>
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </Link>
            <Link className="header__nav-item" to={'/product'}>
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </Link>{' '}
            <Link className="header__nav-item" to={'/product'}>
              一番賞
              <div className="header__nav-item-icon">
                <FaAngleRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="header__btns">
          <Link className="header__btn header__btn--login" to={'/login'}>登入</Link>
          <Link className="header__btn header__btn--register" to={'/register'}>註冊</Link>
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
