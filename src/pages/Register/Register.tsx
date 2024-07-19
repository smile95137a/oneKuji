import Card from '@/components/MCard';
import React from 'react';

const Register = () => {
  return (
    <>
      <div className="register">
        <Card
          title="註冊"
          customClass="mcard--register"
          content={
            <div className="register__container">
              <div className="register__main">
                <div className="register__tab">
                  <div className="register__tab-btn register__tab-btn--mail">
                    信箱
                  </div>
                  <div className="register__tab-line"></div>
                  <div className="register__tab-btn register__tab-btn--phone register__tab-btn--active">
                    手機
                  </div>
                </div>
                <div className="register__btn">
                  <div className="register__btn-icon">Ｘ</div>
                  <div className="register__btn-text">使用手機登入</div>
                </div>

                <div className="register__divider">
                  <div className="register__divider-line"></div>
                  <div className="register__divider-text">OR</div>
                </div>
                <div className="register__btns">
                  <div className="register__btn">
                    <div className="register__btn-icon">Ｘ</div>
                    <div className="register__btn-text">使用 Google 登入</div>
                  </div>
                  <div className="register__btn">
                    <div className="register__btn-icon">Ｘ</div>
                    <div className="register__btn-text">使用 Apple ID 登入</div>
                  </div>
                  <div className="register__btn">
                    <div className="register__btn-icon">Ｘ</div>
                    <div className="register__btn-text">使用 Facebook 登入</div>
                  </div>
                </div>

                <div className="register__register">
                  <p className="register__text">註冊</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Register;
