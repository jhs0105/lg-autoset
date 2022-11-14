const tab = $(".tab");
const tabMenu = $(".tab .menu li");
const tabContents = $(".tab .contents > li");

tabMenu.on("click", function () {
  const idx = $(this).index();
  const siblings = $(this).siblings();
  $(this).addClass("on");
  siblings.removeClass("on");

  const selectedContents = tabContents.eq(idx);
  const contetnsSiblings = selectedContents.siblings();
  selectedContents.addClass("on");
  contetnsSiblings.removeClass("on");
});

const gnb = $("#gnb");
const btnAll = $(".btn-all");
btnAll.on("click", function (e) {
  e.preventDefault();
  const icon = $(this).find(".material-icons");
  //icon.text("close"); //이렇게 하면 내용이 바뀐다. text는 글자 바꾸는 것이다.
  // if (icon.text() === "menu") {
  //   icon.text("close");
  // } else {
  //   icon.text("menu");
  // }
  if (gnb.hasClass("on")) {
    icon.text("menu");
  } else {
    icon.text("close");
  }

  gnb.toggleClass("on");
});

//js에서 크기를 제어해야 한다.

$(window).on("resize", function () {
  console.log($(window).width());
  const w = $(window).width(); //const w=$(window).outerWidth(); scroll을 포함한 width. 이렇게 쓰면 아래 17을 안 빼도 된다.
  if (w > 1280 - 17) {
    $("html").removeClass("m").addClass("pc");
    $("#gnb .depth02").removeAttr("style"); //style해서 나온거 싹 없애준다.
    //gnb에 on을 제거하고 btn-all 안에 있는 material-icons의 텍스트 menu로 바꾸기
    $("#gnb").removeClass("on");
    const icon = $(".btn-all .material-icons");
    icon.text("menu");
  } else {
    $("html").removeClass("pc").addClass("m");
  }
});

//outerWidth도 있다.

const depth01 = $("#gnb .depth01");

depth01.on("click", function (e) {
  if ($("html").hasClass("m")) {
    const depth02 = $(this).next();
    const siblings = $(this).parent().siblings().find(".depth02");
    //const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
    // $(this).toggleClass("on");
    // siblingsDepth01.removeClass("on");
    siblings.slideUp();
    console.log(depth02.length);
    if (depth02.length > 0) {
      e.preventDefault();
      depth02.stop().slideToggle();
    }
  }
});

$(window).trigger("resize");

const familySlider = new Swiper("footer #family-site .container", {
  spaceBetween: 30,
  slidesPerView: "auto",
  freeMode: true,
});
