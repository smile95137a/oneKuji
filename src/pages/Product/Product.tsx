import Card from '@/components/MCard';
import ProductCard from '@/components/ProductCard';
import React from 'react';
import pImg from '@/assets/image/p.png';
import { FaFilter } from 'react-icons/fa';
const products1 = [
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '《我的英雄學院》~闖入~(日版)',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時...',
    customClass: '',
  },
];
const Product = () => {
  return (
    <div className="product">
      <div className="product__title">
        <div className="product__text">一番賞</div>
      </div>
      <div className="product__btns">
        <div className="product__btn product__btn--active">官方一番賞</div>
        <div className="product__btn">3C一番賞</div>
        <div className="product__btn">紅利賞</div>
      </div>

      <Card
        content={
          <>
            <div className="product__list">
              <div className="product__list-title">
                <div className="product__text">官方一番賞</div>
                <div className="product__list-filter">
                  <FaFilter />
                </div>
              </div>

              <div className="product__list-products">
                {products1.map((product, index) => (
                  <ProductCard
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
        }
      />
    </div>
  );
};

export default Product;
