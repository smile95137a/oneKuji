import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Card from '@/components/MCard';
import ProductCard from '@/components/ProductCard'; // Ensure this path is correct
import pImg from '@/assets/image/p.png';
import pImg2 from '@/assets/image/pd3.png';
import bg from '@/assets/image/bg1.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ProductCard3 from '@/components/ProductCard3';

const products1 = [
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
  {
    imagePath: pImg,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '[日版] 一番賞《HUNTER×HUNTER 獵人》REVENGE OF SCARLET',
    content:
      '台灣最人氣【一番賞】線上抽選網站與日本0時差同步開抽！即時、方便、公開！台灣最人氣【一番賞】線上',
    customClass: '',
  },
];

const products2 = [
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

const products3 = [
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '大耳狗拿鐵色動物造型吊飾',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '大耳狗拿鐵色動物造型吊飾',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '大耳狗拿鐵色動物造型吊飾',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
  {
    imagePath: pImg2,
    imgStatus: '開抽中',
    balanceText: '剩餘100抽',
    money: '250',
    unitIcon: '金',
    unitText: '/抽',
    title: '遊戲王桌上小物系列收藏(BOX)(隨機出貨)',
    content: '',
    customClass: 'productCard3--style2 m-y-36',
    path: '1',
  },
];

const MainPage = () => {
  return (
    <>
      <div className="slider">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="slider__item">
                <img
                  src={bg}
                  className="slider__item-img"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mainpage">
        <Card
          title="一番賞"
          customClass="mcard--mainpage"
          content={
            <div className="mainpage__products">
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
          }
        />
        <Card
          title="盲盒"
          customClass="mcard--mainpage"
          content={
            <div className="mainpage__products">
              {products2.map((product, index) => (
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
          }
        />{' '}
        <Card
          title="扭蛋"
          customClass="mcard--mainpage"
          content={
            <div className="mainpage__products p-y-64">
              {products3.map((product, index) => (
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
                  path={product.path}
                />
              ))}
            </div>
          }
        />
      </div>
    </>
  );
};

export default MainPage;
