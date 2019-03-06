function leftClick() {
  var activeImg = $(".picture-container > img.active")
  activeImg.removeClass("active")

  var prevImg = activeImg.prev("img")
  if (activeImg.hasClass("first")) {
    prevImg = $(".picture-container > img.last")
  }
  prevImg.addClass("active")
  updateDots()
}

function rightClick() {
  var activeImg = $(".picture-container > img.active")
  activeImg.removeClass("active")

  var nextImg;
  if (activeImg.hasClass("last")) {
    nextImg = $(".picture-container > img.first")
  } else {
    nextImg = activeImg.next("img");
  }
  nextImg.addClass("active")
  updateDots()
}

function dotClick() {
  var me = $(this)
  var meIndex = me.index();

  var activeImg = $(".picture-container > img.active")
  activeImg.removeClass("active")

  var imgs = $("picture-container > img")
  var nextImg = imgs.eq(meIndex)

  nextImg.addClass("active");
  updateDots()

}


function updateDots() {
  var imgs = $(".picture-container > img");
  console.log(imgs);
  var activeIndex;
  for (var i = 0; i < imgs.length; i++) {
    if (imgs.eq(i).hasClass("active")){
      activeIndex = i;
    }
  }
  var oldDot = $(".link-wrapper > i.fas")
  oldDot.removeClass("fas").addClass("far");

  var dots = $(".link-wrapper > i");
  var nextDot = dots.eq(activeIndex);
  nextDot.removeClass("far").addClass("fas");
}



function init() {

   var leftPart = $(".left-part > i")
   var rightPart = $(".right-part > i")

   leftPart.click(leftClick)
   rightPart.click(rightClick)
}
$(document).ready(init);
