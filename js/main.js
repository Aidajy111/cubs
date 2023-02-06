$(document).ready(function () {

  if ($(window).width() > '1700') {
    $dir = 40;
  }
  if ($(window).width() > '1800') {
    $dir = 80;
  }
  if ($(window).width() > '1850') {
    $dir = 90;
  }
  if ($(window).width() > '1900') {
    $dir = 120;
  }else{
    $dir = 0;
  }

  $("#ID").mask("9 9 9 9 / 9 9 9 9 9 9 9 9 9 9");
  $("#Switch").mask("9 9 9 9 9 9 9");


  //menu-main-animation
  const target = document.querySelector("#block-main--navivation .target");
  const links = document.querySelectorAll("#block-main--navivation .navivation_block a");
  function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
        links[i].style.opacity = "0.25";
      }
      this.parentNode.classList.add("active");
      this.style.opacity = "1";
      const width = this.getBoundingClientRect().width;
      const height = this.getBoundingClientRect().height;
      const left = this.getBoundingClientRect().left + window.pageXOffset - $dir;//120

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.transform = "none";
    }
  }
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }


  /*language*/
  let imgRes = $('#btn-language img');
  $('#language .tabcontent a').on('click', function(e){
    e.preventDefault();
    let imgUrl = $(this).children('img').attr('src');
    imgRes = imgRes.attr('src', imgUrl);
    localStorage.setItem('src', imgUrl);
    $('.js-close').trigger('click');
  });

  if( localStorage.getItem('src') != null ) {
    imgRes = imgRes.attr('src', localStorage.getItem('src'));
  }

  $('#mobile-menu ul li a').on('click', function(){
    $('#mobile-menu .js-close').trigger('click');
  });

  $('#mobile-menu .menu-mobile__get-in-touch').on('click', function(){
    $('#mobile-menu .js-close').trigger('click');
  });

  $('.js-lightbox .wrapper-modale-page a').on('click', function(){
    $('#mobile-menu .js-close').trigger('click');
  });

  $('.f_second_menu .menu_dop').on('click', function(){
    $('.f_second_menu._dop ul').toggleClass('active');
  });

  //right_menu_open
  $('#btn-language .btn').on('click', function(){
    $('#language-list').css({'transform':'translateX(0px)', 'z-index': '999'});
    $(document).mouseup(function (e){
      let div = $('#language-list');
      if (div.has(e.target).length === 0) {
        div.css('transform', 'translateX(500px)');
      }
    });
  });

  //
  $('.table_price_2 .more span').on('click', function(){
    $(this).parent().toggleClass('open');
    if($(this).parent().hasClass('open')) {
			$(this).text('скрыть');
		 }else {
			$(this).text('подробнее');
		}
  });

  //select_menu_right
  $('#language-list li a').on('click', function(e){
    e.preventDefault();
    let leng = $(this).data('attr');
    $('#language-list li a').removeClass('active');
    $(this).addClass('active');
    $('#btn-language .btn__content').text(leng);
  });

//slider
if(document.querySelector(".img_random")) {
  const slides = document.querySelectorAll('.img_random .img');
  let index = 0;
  const activeSlide = n => {
    for(slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  }
  const prepareCurrentSlide = ind => {
    activeSlide(index);
  }
  const nextSlide = () => {
    if(index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    }else {
      index++;
      prepareCurrentSlide(index);
    }
  }
  const prevSlide = () => {
    if(index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    }else {
      index++;
      prepareCurrentSlide(index);
    }
  }
  setInterval( nextSlide, 4000 );
  }


  //slider2
  let itemsLength = $('.block_all_table').length - 1;
  $('.block_all_table').not('.slick-initialized').slick({
    infinite: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    appendArrows: $('.block_navivation_2 .navivation_comment'),
    prevArrow: '<span class="prev"><svg class="icon icon-arrow-down" width="22" height="22" role="presentation"><use href="/img/icons.svg?kyenc#arrow-down"></use></svg></span>',
    nextArrow: '<span class="next"><svg class="icon icon-arrow-down" width="22" height="22" role="presentation"><use href="/img/icons.svg?kyenc#arrow-down"></use></svg></span>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          variableWidth: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: false
        }
      }
    ]
  });

  //slider-tabs-main
  $('.slider-tabs-main').not('.slick-initialized').slick({
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    appendArrows: $('.block_navivation_3'),
    // prevArrow: '<span class="prev"><svg class="icon icon-arrow-down" width="22" height="22" role="presentation"><use href="/img/icons.svg?kyenc#arrow-down"></use></svg></span>',
    // nextArrow: '<span class="next"><svg class="icon icon-arrow-down" width="22" height="22" role="presentation"><use href="/img/icons.svg?kyenc#arrow-down"></use></svg></span>',
    prevArrow: '<div class="leftBlock"></div>',
    nextArrow: '<div class="rightBlock"></div>',
    //adaptiveHeight: true
  });

  // $('.slider-tabs-main').on('afterChange', function(event, slick, currentSlide){
  //    if(currentSlide == 3) {
  //      $('.block_navivation_3 .next').hide();
  //    }else{
  //      $('.block_navivation_3 .next').show();
  //    }
  // });
  //
  // $('.block_navivation_3 .prev').on('click', function() {
  //   $('.slider-tabs-main').slick('slickPrev');
  // });
  //
  // $('.block_navivation_3 .next').on('click', function() {
  //   $('.slider-tabs-main').slick('slickNext');
  // });


  //slide_page
  $('.slide_page').not('.slick-initialized').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: true
    //adaptiveHeight: true
  });

  $('.slide_page_nav .prev').on('click', function() {
    $('.slide_page').slick('slickPrev');
  });

  $('.slide_page_nav .next').on('click', function() {
    $('.slide_page').slick('slickNext');
  });


  //
  $('.slide_main_2').not('.slick-initialized').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.slide_main_strategies .slide_icon').not('.slick-initialized').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1
    // variableWidth: true
  });

  $('.slide_main_strategies .next').on('click', function() {
    $('.slide_main_strategies .slide_icon').slick('slickNext');
  });

  // $('.ac-container label').on('click', function(){
  //
  //   $('.ac-container .ac-large').css('height', '0px');
  //   // $(this).next().css('height', '400px');
  //   if ( $('.ac-container input').is(':checked') ) {
  //     $(this).next().css({'height':'400px','opacity':'1'});
  //   } else {
  //     $(this).next().css({'height':'0','opacity':'0'});
  //   }
  // });

  $('#block-16-4 .nav_dropdown').on('click', function(){
    $('#block-16-4 .ac-container').toggleClass('open');
  });

  $('#block-6-3 .nav_dropdown_2').on('click', function(){
    $('#block-6-3 .ac-container').toggleClass('open');
  });

  $('.win_forum .js-close').on('click', function(){
    $('.win_forum').hide();
    $.cookie('neby', 'js-cookie', { expires: 365, path: '/' });
  });

  if ( $.cookie('neby') != null ) {
    $('.win_forum').hide();
  } else {
    setTimeout(function(){
      $('.win_forum').show().css('z-index', '999');
    }, 10000);
  };


  //
  $('.collapse .collapse_title').click(function(){
		$(this).next().slideToggle(600);
    $(this).toggleClass('active');
		return false;
	});

});

//бегущие цифры
var time = 2,
      cc = 1;
$(window).scroll(function() {
  $('#counter-timer').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow - 3000) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


//scroll position
$(window).scroll(function() {
  //
  $(".ball_animation .ball").each(function() {
  var
    cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow - 2200) {
      $(this).addClass("active");
    }else{
      $(this).removeClass("active");
    }
  });

  //
  // $("#section_btn").each(function() {
  // const windowInnerWidth = window.innerWidth
  // var
  //   cPos = $(this).offset().top,
  //   topWindow = $(window).scrollTop();
  //   if (cPos < topWindow - 0) {
  //     $(this).addClass("active");
  //   }else{
  //     $(this).removeClass("active");
  //   }
  //
  //   if ( windowInnerWidth < 1400 ) {
  //     // console.log(windowInnerWidth);
  //     if (cPos < topWindow - 4700) {
  //       $(this).removeClass("active");
  //     }
  //   }
  //   if ( windowInnerWidth < 1200 ) {
  //     if (cPos < topWindow - 4400) {
  //       $(this).removeClass("active");
  //     }
  //   } else {
  //     if (cPos < topWindow - 5400) {
  //       $(this).removeClass("active");
  //     }
  //   }
  // });

});

if(document.getElementById('bl-4')!= null){
$(window).scroll(function() {
  const element = $('#bl-3'); // сам элемент, который будем проверять
  const element2 = $('#bl-4'); // сам элемент, который будем проверять
  let element_top = element.offset().top; // координата верхней позиции элемента
  let element_top2 = element2.offset().top; // координата верхней позиции элемента
  let element_bottom = element.offset().top + element.height(); // координата нижней позиции элемента
  let element_bottom2 = element2.offset().top + element2.height(); // координата нижней позиции элемента
  let w_height = $(window).height(); // высота окна
  const visually = $('#section_btn_2');
  const visually2 = $('#section_btn');

  //console.log(element_bottom);
  if (element_bottom > 9700 || element_bottom < 850) {
    visually.removeClass('active');
  }else{
    visually.addClass('active');
  }

  if ( element_top2 < 0 && element_top2 > -8300) {
    visually2.addClass('active');
  }else{
    visually2.removeClass('active');
  }

});
}


//блокируем правую кнопку мыши
// if (window.Event)
// document.captureEvents(Event.MOUSEUP);
//
// function nocontextmenu() {
// event.cancelBubble = true, event.returnValue = false;
// return false;
// }
//
// function norightclick(e) {
// 	if (window.Event) {
// 	if (e.which == 2 || e.which == 3) return false;
// }
// 	else if (event.button == 2 || event.button == 3) {
// 	event.cancelBubble = true, event.returnValue = false;
// 	return false;
// 	}
// }
//
// if (document.layers)
// document.captureEvents(Event.MOUSEDOWN);
// document.oncontextmenu = nocontextmenu;
// document.onmousedown = norightclick;
// document.onmouseup = norightclick;

if(document.querySelector('.gallery_page_classo')!= null){
// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      // autoplay:{
      //   delay:3000
      // },
      loopAdditionalSlides: 10,
      grabCursor: true,
      //watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          //this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          //this.autoplay.start();
        },
        // slideChangeTransitionEnd: function(){
        //   let swiper = this,
        //       captions = swiper.el.querySelectorAll('.caption');
        //   for (let i = 0; i < captions.length; ++i) {
        //     captions[i].classList.remove('show');
        //   }
        //   swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        // },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;

            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  speed:1000,
  spaceBetween: 1,
  slidesPerView: 5,
  //centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: 'vertical',
  on: {
    imagesReady: function(){
      this.el.classList.remove('loading');
    },
    click: function(){
      //mainSlider.autoplay.stop();
    }
  }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
}


/*tabs*/
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*cursor*/
$(function() {

const cursorLeft = document.querySelector('#cursorLeft');
const cursorRight = document.querySelector('#cursorRight');

const tableLeft = document.querySelector('.leftBlock');
const tableRight = document.querySelector('.rightBlock');

const tableList = document.querySelector('#table-list-2');

  tableLeft.addEventListener('mousemove', (e) => {

    let x = e.offsetX,
        y = e.offsetY;

    cursorLeft.style.transform = `translate3d(${x}px, ${y}px, 0)`;

  }, {
    capture: true
  })

  tableLeft.onmouseout = function() {
    cursorLeft.style.opacity = 0;
    tableList.style.cursor = 'auto';
  }
  tableLeft.onmouseover = function() {
    cursorLeft.style.opacity = 1;
    tableList.style.cursor = 'none';
  }


  tableRight.addEventListener('mousemove', (e) => {
    let x = e.offsetX,
        y = e.offsetY;

    cursorRight.style.transform = `translate3d(${x}px, ${y}px, 0)`;

  }, {
    capture: true
  })

  tableRight.onmouseout = function() {
    cursorRight.style.opacity = 0;
    tableList.style.cursor = 'auto';
  }
  tableRight.onmouseover = function() {
    cursorRight.style.opacity = 1;
    tableList.style.cursor = 'none';
  }

});

// const moveCursor = (e)=> {
//   const mouseY = e.clientY - 60 ;
//   const mouseX = e.clientX - 40;
//   cursorLeft.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//   cursorRight.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//
//   console.log(cursorLeft.style.transform );
// }
//
// window.addEventListener('mousemove', moveCursor)
//
// window.onload = function(){
// const tableLeft = document.querySelector('.leftBlock');
// const tableRight = document.querySelector('.rightBlock');
//
//   tableLeft.onmouseover = function() {
//     cursorLeft.style.display = 'flex';
//     cursorRight.style.display = 'none';
//   }
//   tableRight.onmouseover = function() {
//     cursorRight.style.display = 'flex';
//     cursorLeft.style.display = 'none';
//   }
// }
