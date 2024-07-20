import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProductCardProps {
  customClass?: string;
  imagePath: string;
  imgStatus?: string;
  balanceText?: string;
  money?: string;
  unitIcon?: string;
  unitText?: string;
  title?: string;
  content?: string;
  path?: string;
}

const ProductCard3: FC<IProductCardProps> = ({
  customClass = '',
  imagePath,
  imgStatus = '',
  balanceText = '',
  money = '',
  unitIcon = '',
  unitText = '',
  title = '',
  content = '',
  path = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate('/productDetail1');
    } else {
      navigate('/productDetail2');
    }
  };

  return (
    <div className={`productCard3 ${customClass}`} onClick={handleClick}>
      <div className="productCard3__img">
        <img src={imagePath} alt="productCard3 Image" />
        <div className="productCard3__img-status">{imgStatus}</div>
        <div className="productCard3__img-detail">
          <div className="productCard3__img-balance">
            <p className="productCard3__text">{balanceText}</p>
          </div>
          <div className="productCard3__img-price">
            <p className="productCard3__img-money">
              <span className="productCard3__text">{money}</span>
            </p>
            <p className="productCard3__img-unit">
              <span className="productCard3__text productCard3__text--icon">
                {unitIcon}
              </span>
              <span className="productCard3__text">{unitText}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="productCard3__detail">
        <div className="productCard3__detail-title">{title}</div>
        <div className="productCard3__detail-content">{content}</div>
      </div>
    </div>
  );
};

export default ProductCard3;
