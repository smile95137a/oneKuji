import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IproductCard2Props {
  customClass?: string;
  imagePath: string;
  imgStatus?: string;
  balanceText?: string;
  balanceNum?: string;
  title?: string;
}

const ProductCard2: FC<IproductCard2Props> = ({
  customClass = '',
  imagePath,
  imgStatus = '',
  balanceText = '',
  balanceNum = '',
  title = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/productDetail2');
  };

  return (
    <div className={`productCard2 ${customClass}`} onClick={handleClick}>
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

export default ProductCard2;
