import Card from '@/components/MCard';
import ProductCard from '@/components/ProductCard';
import React from 'react';
import pImg from '@/assets/image/pd3.png';
import { FaCaretDown, FaFilter } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import ProductCard3 from '@/components/ProductCard3';
const products1 = [
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 productCard3--like',
  },
];
const Product3 = () => {
  return (
    <div className="product3">
      <div className="product3__title">
        <div className="product3__text">扭蛋抽獎</div>
      </div>

      <>
        <div className="product3__list">
          <div className="product3__list-products">
            {products1.map((product, index) => (
              <ProductCard3
                key={index}
                customClass={product.customClass}
                imagePath={product.imagePath}
                imgStatus={product.imgStatus}
                balanceText={product.balanceText}
                money={product.money}
                unitIcon={product.unitIcon}
                unitText={product.unitText}
                title={product.title}
                content={product.content}
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Product3;
