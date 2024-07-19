import React from 'react';
import pd1 from '@/assets/image/pd1.png';
import pd2 from '@/assets/image/pd2.png';
import pImg2 from '@/assets/image/pd3.png';
import ProductCard from '@/components/ProductCard';
const ProductDetail1 = () => {
  const imagepst = [pd2, pd2, pd2, pd2, pd2, pd2, pd2, pd2];

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
      customClass: 'productCard--style2 productCard--like',
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
      customClass: 'productCard--style2 productCard--like',
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
      customClass: 'productCard--style2 productCard--like',
    },
  ];
  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__items">
          <div className="breadcrumbs__item">首頁</div>
          <div className="breadcrumbs__item">扭蛋抽獎</div>
          <div className="breadcrumbs__item breadcrumbs__item--active">
            一番賞關於我轉生變成史萊姆這檔事(代理版)_FVAA
          </div>
        </div>
      </div>
      <div className="product-detail">
        <div className="product-detail__main">
          <div className="product-detail__img">
            <img src={pd1} alt="" />
          </div>
          <div className="product-detail__title">
            <p className="product-detail__text">
              一番賞關於我轉生變成史萊姆這檔事(代理版)_FVAA
            </p>
          </div>
          <div className="product-detail__other">
            {imagepst.map((image, index) => (
              <div className="product-detail__other-img" key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail__action">
          <div className="product-detail__price">
            <p className="product-detail__price-money">
              <span className="product-detail__text">250</span>
            </p>
            <p className="product-detail__price-unit">
              <span className="product-detail__text product-detail__text--icon">
                金
              </span>
              <span className="product-detail__text">/抽</span>
            </p>
          </div>

          <div className="product-detail__action-btn">開抽！</div>
        </div>
        <div className="product-detail__infos">
          <div className="product-detail__info product-detail__info--one ">
            <div className="product-detail__item">
              <div className="product-detail__item-name">獎項剩餘總數</div>
              <div className="product-detail__item-num"></div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">A賞 角色模型</div>
              <div className="product-detail__item-num">2/3</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">B賞 角色模型</div>
              <div className="product-detail__item-num">1/1</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">C賞 角色模型</div>
              <div className="product-detail__item-num">1/2</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">D賞 坐墊玩具</div>
              <div className="product-detail__item-num">0/1</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">E賞 角色模型</div>
              <div className="product-detail__item-num">3/5</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">F賞 壓克力立牌</div>
              <div className="product-detail__item-num">7/14</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">G賞 毛巾</div>
              <div className="product-detail__item-num">10/22</div>
            </div>

            <div className="product-detail__item">
              <div className="product-detail__item-name">H賞 文件夾貼紙組</div>
              <div className="product-detail__item-num">15/22</div>
            </div>
            <div className="product-detail__item">
              <div className="product-detail__item-name">合計</div>
              <div className="product-detail__item-num">39/70</div>
            </div>
          </div>
          <div className="product-detail__info product-detail__info--two ">
            <div className="product-detail__item">
              <div className="product-detail__item-name">商品簡介</div>
              <div className="product-detail__item-other">
                <p>1. 有效日期：2024/6/6-2024/7/31</p>
                <p>2. 獎盃中獎證：角色模型</p>
                <p>
                  3. 出貨時依照抽獎結果附「雙重中獎鑑紙」，活動結束則不附鑑紙。
                </p>
                <p>4. 雙重中獎追加特典</p>
                <p>5. 獲獎使用期限請自行參考獎票具反應。</p>
                <p>※ 最終另加隨機抽選一張。</p>
              </div>
            </div>
            <div className="product-detail__item">
              <div className="product-detail__item-name m-t-24">注意事項</div>
              <div className="product-detail__item-other">
                <p>1. 拍蛋盒玩商品均隨機商品，不可挑款。</p>
                <p>2. 盒玩商品均隨機出貨不拆盒。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail__likes">
          <div className="product-detail__likes-title">
            <p className="product-detail__text">你可能會喜歡</p>
          </div>
          <div className="product-detail__likes-products">
            {products3.map((product, index) => (
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
      </div>
    </>
  );
};

export default ProductDetail1;
