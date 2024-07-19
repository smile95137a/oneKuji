import React from 'react';
import logoImg from '@/assets/image/logo1.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <div className="footer__logo-img">
          <img src={logoImg} />
          <p className="footer__text">@2024 再來一抽 版權所有</p>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__nav">
          <div className="footer__link">關於我們</div>
          <div className="footer__link">常見問題</div>
          <div className="footer__link">優惠說明</div>
          <div className="footer__link">交易說明</div>
          <div className="footer__link">合作咨詢</div>
          <div className="footer__link">服務條款</div>
          <div className="footer__link">隱私權政策</div>
        </div>

        <div className="footer__infos">
          <div className="footer__info">
            <div className="footer__info-text">公司信箱：</div>
            <div className="footer__info-text">abc@gmail.com</div>
          </div>
          <div className="footer__info">
            <div className="footer__info-text">公司電話：</div>
            <div className="footer__info-text">091234567</div>
          </div>
          <div className="footer__info">
            <div className="footer__info-text">公司名稱：</div>
            <div className="footer__info-text">再來一抽有限公司</div>
          </div>
          <div className="footer__info">
            <div className="footer__info-text">客服服務時間：</div>
            <div className="footer__info-text">週一至週五 8:00-17:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
