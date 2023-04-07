"use strict";
/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");//ハンバーガーメニューを取得
const navigation = document.querySelector(".js_navigation");//ナビゲーションを取得
const body = document.querySelector(".js_body");//bodyを取得


//ハンバーガーをクリックしたら
hamburger.addEventListener("click", () => {
//それぞれに対してis-activeクラスをつけ外しする
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
	body.classList.toggle("is-active");
});


// /*---------- オープニングアニメーション ----------*/

gsap
    .timeline()
    .from(".js_opening-txt", {
			//1.2秒かけて
        duration: 2.0,
			//透明度0から
        autoAlpha: 0,
			//y軸40px下から
        y: 40,
    }).to(".js_opening", {
        autoAlpha: 0,
        duration: 1.0,
    })
		//以下は先ほどのワイプインと同じコード
    .from(".js_copy", {
        duration: 0.6,
        autoAlpha: 0,
        x: -100,
    })
    .from(".js_sub-copy", {
        duration: 0.6,
        autoAlpha: 0,
        x: -100,
    });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
