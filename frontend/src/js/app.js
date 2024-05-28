document.addEventListener('DOMContentLoaded', function(event) {
  // Anchor navigation
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (
  //     location.pathname.replace(/^\//, '') ==
  // 			this.pathname.replace(/^\//, '') &&
  // 		location.hostname == this.hostname
  //   ) {
  //     var target = $(this.hash);
  //     var _this = this;
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate(
  //         {
  //           scrollTop: target.offset().top,
  //         },
  //         400,
  //         function() {
  //           location.hash = _this.hash;
  //         }
  //       );
  //       return false;
  //     }
  //   }
  // });
  // var targBox = 'box';
  // function init() {
  //   if (document.getElementById) {
  //     var atags = document.getElementsByTagName('A');
  //     for (var i = 0; i < atags.length; i++) {
  //       var ca = atags[i];
  //       if (ca.href.indexOf('#') > -1) {
  //         ca.onclick = function() {
  //           scrollDivToAnchor(this.href.split('#')[1]);
  //         };
  //       }
  //     }
  //   }
  // }

  const spollers = document.querySelectorAll('[data-spoller]');
  if (spollers) {
    for (var i = 0; i < spollers.length; i++) {
      const spoller = spollers[i];

      if (!spoller.classList.contains('is-active')) {
        spoller.nextElementSibling.hidden = true;
      } else {
        spoller.nextElementSibling.hidden = false;
      }
      spoller.addEventListener('click', function(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
          const spollerTitle = el.hasAttribute('data-spoller')
            ? el
            : el.closest('[data-spoller]');
          const spollersBlock = spollerTitle.closest('[data-spollers]');
          const oneSpoller = spollersBlock.hasAttribute('data-one-spollers')
            ? true
            : false;

          if (!spollersBlock.querySelectorAll('._slide').length) {
            if (oneSpoller && !spollerTitle.classList.contains('is-active')) {
              hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle('is-active');
          }
          e.preventDefault();
        }
      });
    }

    function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector(
        '[data-spoller].is-active'
      );
      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove('is-active');
      }
    }
  }

  if (document.querySelector('.conferences-swiper')) {
    new Swiper('.conferences-swiper ', {
      // Optional parameters
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 1,
    });
  }

  if (document.querySelector('.reviews-swiper')) {
    new Swiper('.reviews-swiper ', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: '.reviews-swiper__next',
        prevEl: '.reviews-swiper__prev',
      },
      observer: true,
      observeParents: true,
    });
  }

  if (document.querySelector('.features-swiper')) {
    new Swiper('.features-swiper ', {
      // Optional parameters
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 0,
    });
  }

  //  tabs
  const tabsButtons = document.querySelectorAll('[data-tabs-button]');
  const tabs = document.querySelectorAll('[data-tabs]');

  if (tabs) {
    for (var i = 0; i < tabsButtons.length; i++) {
      const tabsButton = tabsButtons[i];

      tabsButton.addEventListener('click', function(e) {
        const tabsButtonIndex = tabsButton.dataset.tabsButton;
        const tabsParent = e.target.closest('[data-tabs]');
        const tabsButtonActive = tabsParent.querySelector(
          '[data-tabs-button]._active'
        );
        const tabsBlockActive = tabsParent.querySelector(
          '[data-tabs-block]._active'
        );
        const tabsBlock = tabsParent.querySelectorAll('[data-tabs-block]');

        if (tabsButtonActive) {
          tabsButtonActive.classList.remove('_active');
        }
        if (tabsBlockActive) {
          tabsBlockActive.classList.remove('_active');
        }
        tabsButton.classList.add('_active');
        tabsBlock[tabsButtonIndex].classList.add('_active');

        e.preventDefault();
      });
    }
  }
});
