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

  // Popup
  // ----------------------------------------------
  const offcanvasLinks = document.querySelectorAll('._open-modal');
  const offcanvasCloseIcon = document.querySelectorAll('._close-modal');
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 200;

  if (offcanvasLinks.length > 0) {
    for (let index = 0; index < offcanvasLinks.length; index++) {
      const offcanvasLink = offcanvasLinks[index];
      offcanvasLink.addEventListener('click', function(e) {
        e.preventDefault();
        let offcanvasName;
        if (this.hasAttribute('href')) {
          offcanvasName = offcanvasLink.getAttribute('href').replace('#', '');
        } else {
          offcanvasName = offcanvasLink
            .getAttribute('data-href')
            .replace('#', '');
        }

        const curentoffcanvas = document.getElementById(offcanvasName);
        offcanvasOpen(curentoffcanvas);
      });
    }
  }

  if (offcanvasCloseIcon.length > 0) {
    for (let index = 0; index < offcanvasCloseIcon.length; index++) {
      const el = offcanvasCloseIcon[index];
      el.addEventListener('click', function(e) {
        offcanvasClose(el.closest('._modal'));
        e.preventDefault();
      });
    }
  }

  function offcanvasOpen(curentoffcanvas) {
    if (curentoffcanvas && unlock) {
      const offcanvasActive = document.querySelector('._modal._open');
      if (offcanvasActive) {
        offcanvasClose(offcanvasActive, false);
      } else {
        bodyLock();
      }
      curentoffcanvas.classList.add('_open');
      setTimeout(() => {
        curentoffcanvas.classList.add('_animate');
      }, 50);
      curentoffcanvas.addEventListener('click', function(e) {
        if (!e.target.closest('._modal__content')) {
          offcanvasClose(e.target.closest('._modal'));
        }
      });
    }
  }

  function offcanvasClose(offcanvasActive, doUnlock = true) {
    if (unlock) {
      offcanvasActive.classList.remove('_animate');

      setTimeout(() => {
        offcanvasActive.classList.remove('_open');
      }, 250);
      if (doUnlock) {
        // если открыто фиксированное меню то...
        bodyUnLock();
      }
    }
  }

  function bodyLock(classEl = 'lock') {
    const lockPaddingValue =
			window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    html.classList.add(classEl);

    unlock = false;
    setTimeout(function() {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock(classEl = 'lock') {
    setTimeout(function() {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      html.classList.remove(classEl);
    }, timeout);

    unlock = false;
    setTimeout(function() {
      unlock = true;
    }, timeout);
  }

  document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
      const offcanvasActive = document.querySelector('._modal._open');
      offcanvasClose(offcanvasActive);
    }
  });

  (function() {
    // проверяем поддержку
    if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function(css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function() {
    // проверяем поддержку
    if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
    }
  })();
});
