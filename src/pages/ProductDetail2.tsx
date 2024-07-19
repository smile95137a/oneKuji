import React from 'react';
import pd1 from '@/assets/image/pd1.png';
import pd2 from '@/assets/image/pd2.png';
import btnIcon from '@/assets/image/btn-icon.png';
import ticket1 from '@/assets/image/ticket1.png';
import ticketE from '@/assets/image/ticketE.png';
import boxOpen from '@/assets/image/box-open.png';
import boxClose from '@/assets/image/box-close.png';
import Card from '@/components/MCard';
import ProductCard2 from '@/components/ProductCard2';
import { useDialog } from '@/context/DialogContext';
const ProductDetail2 = () => {
  const imagepst = [
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
    pd2,
  ];

  const products3 = [
    {
      imagePath: pd1,
      balanceText: 'A賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: 'productCard2--a',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: 'productCard2--last',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
  ];
  const products4 = [
    {
      imagePath: pd1,
      balanceText: 'A賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: 'productCard2--a',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: 'productCard2--last',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
    {
      imagePath: pd1,
      balanceText: '最後賞',
      balanceNum: '3/3',
      title: '《我的英雄學院》~闖入~(日版)',
      customClass: '',
    },
  ];

  const products6 = [
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
    {
      imagePath: boxOpen,
    },
    {
      imagePath: boxClose,
    },
  ];

  const products5 = [
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticketE,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
    {
      imagePath: ticket1,
    },
  ];

  const { openConfirmDialog } = useDialog();
  const handleClick = async () => {
    const result = await openConfirmDialog();
    if (result) {
      // 在這裡處理刪除操作
      console.log('Confirmed: Deleting item...');
    } else {
      console.log('Cancelled: Delete action aborted.');
    }
  };
  return (
    <div>
      <div className="product-detail-one">
        <div className="product-detail-one__main">
          <div className="product-detail-one__img">
            <img src={pd1} alt="" />
          </div>
          <div className="product-detail-one__title">
            <p className="product-detail-one__text">
              一番賞關於我轉生變成史萊姆這檔事(代理版)_FVAA
            </p>
          </div>
          <div className="product-detail-one__action">
            <div className="product-detail-one__price">
              <p className="product-detail-one__price-money">
                <span className="product-detail-one__text">250</span>
              </p>
              <p className="product-detail-one__price-unit">
                <span className="product-detail-one__text product-detail-one__text--icon">
                  金
                </span>
                <span className="product-detail-one__text">/抽</span>
              </p>
            </div>
            <div className="product-detail-one__action-btns">
              <div className="product-detail-one__action-btn">開抽！</div>
              <div className="product-detail-one__action-btn product-detail-one__action-btn--status">
                <img src={btnIcon} alt="" />
                <span>檢視抽況</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-one__infos">
          <div className="product-detail-one__info product-detail-one__info--one ">
            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">獎項剩餘總數</div>
              <div className="product-detail-one__item-num"></div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">A賞 角色模型</div>
              <div className="product-detail-one__item-num">2/3</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">B賞 角色模型</div>
              <div className="product-detail-one__item-num">1/1</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">C賞 角色模型</div>
              <div className="product-detail-one__item-num">1/2</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">D賞 坐墊玩具</div>
              <div className="product-detail-one__item-num">0/1</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">E賞 角色模型</div>
              <div className="product-detail-one__item-num">3/5</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">
                F賞 壓克力立牌
              </div>
              <div className="product-detail-one__item-num">7/14</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">G賞 毛巾</div>
              <div className="product-detail-one__item-num">10/22</div>
            </div>

            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">
                H賞 文件夾貼紙組
              </div>
              <div className="product-detail-one__item-num">15/22</div>
            </div>
            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">合計</div>
              <div className="product-detail-one__item-num">39/70</div>
            </div>
          </div>
          <div className="product-detail-one__info product-detail-one__info--two ">
            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name">商品簡介</div>
              <div className="product-detail-one__item-other">
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
            <div className="product-detail-one__item">
              <div className="product-detail-one__item-name m-t-24">
                注意事項
              </div>
              <div className="product-detail-one__item-other">
                <p>1. 拍蛋盒玩商品均隨機商品，不可挑款。</p>
                <p>2. 盒玩商品均隨機出貨不拆盒。</p>
              </div>
            </div>
          </div>
        </div>

        <Card
          title="商品一覽"
          customClass="mcard--mainpage"
          content={
            <div className="product-detail-one__products">
              {products3.map((product, index) => (
                <ProductCard2
                  key={index}
                  customClass={product.customClass}
                  imagePath={product.imagePath}
                  balanceText={product.balanceText}
                  balanceNum={product.balanceNum}
                  title={product.title}
                />
              ))}
            </div>
          }
        />

        <Card
          title="賞品介紹"
          customClass="mcard--mainpage"
          content={
            <>
              <div className="product-detail-one__productIntroduce">
                {products4.map((product, index) => (
                  <div key={index} className="product-detail-one__productIntroduce-img">
                    <img src={product.imagePath} alt="" />
                  </div>
                ))}
              </div>
            </>
          }
        />

        <Card
          title="檢視抽況"
          customClass="mcard--mainpage"
          content={
            <>
              <div className="product-detail-one__tickets">
                {products5.map((product, index) => (
                  <div key={index} className="product-detail-one__tickets-img">
                    <img src={product.imagePath} alt="" />
                  </div>
                ))}
              </div>
            </>
          }
        />

        <Card
          title="檢視抽況2"
          customClass="mcard--mainpage"
          content={
            <>
              <div className="product-detail-one__boxs">
                {products6.map((product, index) => (
                  <div key={index} className="product-detail-one__boxs-img">
                    <img src={product.imagePath} alt="" />
                  </div>
                ))}
              </div>
            </>
          }
        />
      </div>
      <div className="product-detail-one__option">
        <div className="product-detail-one__btns">
          <div className="product-detail-one__btn product-detail-one__btn--random">
            隨機選擇
          </div>
          <div
            className="product-detail-one__btn product-detail-one__btn--im"
            onClick={handleClick}
          >
            立即兌換
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail2;
