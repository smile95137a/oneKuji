import React, { FC } from 'react';
import logoImg from '@/assets/image/logo1.png';
import Dialog from './Dialog';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  customClass?: string;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  customClass,
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} className={customClass}>
      <div className="confirmDialog">
        <div className="confirmDialog__header">
          <div className="confirmDialog__logo">
            <img src={logoImg} className="confirmDialog__logo-img" />
          </div>
        </div>

        <div className="confirmDialog__main">
          <div className="confirmDialog__main-content">
            <div className="confirmDialog__main-balance">
              <p className="confirmDialog__text">
                目前剩餘
                <span className="confirmDialog__text confirmDialog__text--red">
                  71
                </span>
                抽
              </p>
            </div>
            <div className="confirmDialog__main-count">
              <p className="confirmDialog__text">
                連續次數
                <span className="confirmDialog__text  confirmDialog__text--red">
                  3
                </span>
                抽
              </p>
            </div>
            <div className="confirmDialog__main-total">
              <p className="confirmDialog__text ">
                共花費
                <span className="confirmDialog__text  confirmDialog__text--red confirmDialog__text--bold">
                  1080
                </span>
              </p>
            </div>
          </div>
          <div className="confirmDialog__main-btns">
            <div
              className="confirmDialog__main-btn confirmDialog__main-btn--cancel"
              onClick={onClose}
            >
              取消
            </div>
            <div
              className="confirmDialog__main-btn confirmDialog__main-btn--confirm"
              onClick={onConfirm}
            >
              確認
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
