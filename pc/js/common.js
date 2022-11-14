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
