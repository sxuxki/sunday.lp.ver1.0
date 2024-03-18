"use strict";

/*---------- ハンバーガーメニュー ----------*/
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav"); 
// const body = document.querySelector(".js_body");
  ham.addEventListener("click", function ()  { //ハンバーガーメニューをクリックしたら
    ham.classList.toggle("active"); // ハンバーガーメニューにactiveクラスを付け外し
    nav.classList.toggle("active"); // ナビゲーションメニューにactiveクラスを付け外し
  });


  let mySwiper = new Swiper ('.swiper', {

    // オプション設定
    loop: true,
    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: '.swiper-pagination', //ページネーション要素
      type: 'bullets', //ページネーション種類
      clickable: true, //クリックに反応させる
    },
  
    //ナビゲーションボタン（矢印）表示設定
    navigation: {
      nextEl: '.swiper-button-next', //「次へボタン」要素指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素指定
    },
  
    //スクロールバー表示設定
    scrollbar: {
      el: '.swiper-scrollbar', //要素指定
    },
  });
