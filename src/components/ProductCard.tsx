import React, { FC } from 'react';

interface IproductCardProps {
  customClass?: string;
  imagePath: string;
  imgStatus?: string;
  balanceText?: string;
  money?: string;
  unitIcon?: string;
  unitText?: string;
  title?: string;
  content?: string;
}

const productCard: FC<IproductCardProps> = ({
  customClass = '',
  imagePath,
  imgStatus = '',
  balanceText = '',
  money = '',
  unitIcon = '',
  unitText = '',
  title = '',
  content = '',
}) => {
  return (
    <div className={`productCard ${customClass}`}>
      <div className="productCard__img">
        <img src={imagePath} alt="productCard Image" />
        <div className="productCard__img-status">{imgStatus}</div>
        <div className="productCard__img-detail">
          <div className="productCard__img-balance">
            <p className="productCard__text">{balanceText}</p>
          </div>
          <div className="productCard__img-price">
            <p className="productCard__img-money">
              <span className="productCard__text">{money}</span>
            </p>
            <p className="productCard__img-unit">
              <span className="productCard__text productCard__text--icon">
                {unitIcon}
              </span>
              <span className="productCard__text">{unitText}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="productCard__detail">
        <div className="productCard__detail-title">{title}</div>
        <div className="productCard__detail-content">{content}</div>
      </div>
    </div>
  );
};

export default productCard;
