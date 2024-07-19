import React, { FC } from 'react';

interface IproductCard2Props {
  customClass?: string;
  imagePath: string;
  imgStatus?: string;
  balanceText?: string;
  balanceNum?: string;
  title?: string;
}

const productCard2: FC<IproductCard2Props> = ({
  customClass = '',
  imagePath,
  imgStatus = '',
  balanceText = '',
  balanceNum = '',
  title = '',
}) => {
  return (
    <div className={`productCard2 ${customClass}`}>
      <div className="productCard2__img">
        <img src={imagePath} alt="productCard2 Image" />
        <div className="productCard2__img-detail">
          <div className="productCard2__img-balance">
            <p className="productCard2__text">{balanceText}</p>
            <p className="productCard2__text productCard2__text--num">
              {balanceNum}
            </p>
          </div>
        </div>
      </div>
      <div className="productCard2__detail">
        <div className="productCard2__detail-title">{title}</div>
      </div>
    </div>
  );
};

export default productCard2;
