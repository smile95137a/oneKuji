import Card from '@/components/MCard';
import ProductCard from '@/components/ProductCard';
import React from 'react';
import pImg from '@/assets/image/p.png';
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
const Product2 = () => {
  return (
    <div className="product2">
      <div className="product2__title">
        <div className="product2__text">盲盒</div>
      </div>
      <div className="product2__btns">
        <div className="product2__btns-selects">
          <div className="product2__input product2__input--select">
            <div className="product2__input-main">全部狀態</div>
            <div className="product2__input-icon">
              <FaCaretDown />
            </div>
          </div>
          <div className="product2__input product2__input--select">
            <div className="product2__input-main">全部廠商</div>
            <div className="product2__input-icon">
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="product2__btns-search">
          <div className="product2__input">
            <div className="product2__input-main">
              <input type="text" />
            </div>
            <div className="product2__input-icon font-size-28">
              <CiSearch />
            </div>
          </div>
        </div>
      </div>

      <Card
        content={
          <>
            <div className="product2__list">
              <div className="product2__list-title">
                <div className="product2__list-filter">
                  <FaFilter />
                </div>
              </div>

              <div className="product2__list-products">
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
        }
      />
    </div>
  );
};

export default Product2;
