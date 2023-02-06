const buttonMetro = document.querySelector('.row .btn_mod.effect--6');
const metroContent = document.querySelector('.metro__content');

buttonMetro.addEventListener('click', () => {
  setTimeout(() => {
    console.log('hello')
    metroContent.classList.toggle('metro-content');

  }, 100)
});

window.addEventListener('load', function() {
  setTimeout(() => {
    metroContent.classList.toggle('metro-content');
  }, 1000)
});





const tabsMainPage = document.querySelectorAll('.btn-navigation-page-block');
const tabsMainPageContent = document.querySelector('.main__tabs');

tabsMainPage.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    let activeTab = tabsMainPageContent.querySelector('.main__button_active');

    activeTab.classList.remove('main__button_active');
    tabsMainPage[index].classList.add('main__button_active');
  })
})





const mainCircle = document.querySelector('.main__circle');

window.addEventListener('load', function () {
  setTimeout(() => {
    mainCircle.style.backgroundColor = '#fff';
  }, 1500);
  setTimeout(() => {
    mainCircle.style.removeProperty("backgroundColor");
    mainCircle.style.backgroundColor = '';
  }, 2000);
})


const flowerImage = document.querySelector('.flowers');
const girlImage = document.querySelector('.girl-img');
const swipeParentImage = document.querySelector('.swipe-parent');
const treesImage = document.querySelector('.trees');
const homeImage = document.querySelector('.home-img');
const sunImage = document.querySelector('.sun-animation');

const animationBlock = document.querySelector('.animation-block_first');

let target = document.querySelector('.main__section_top-animation');
const config = {
  attributes: true,
  childList: true,
  subtree: true
};

const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
    } else if (mutation.type === 'attributes') {
      let coordinates = animationBlock.getBoundingClientRect();

      if (coordinates.top < 280) {
        observer.disconnect();

        setTimeout(() => {
          sunImage.classList.add('main__animation_active');
        }, 0);

        setTimeout(() => {
          treesImage.classList.add('main__animation_active');
        }, 1000);

        setTimeout(() => {
          flowerImage.classList.add('main__animation_active');
          girlImage.classList.add('main__animation_active');
        }, 2000);

        setTimeout(() => {
          homeImage.classList.add('main__animation_active');
        }, 3000);

        setTimeout(() => {
          swipeParentImage.classList.add('main__animation_active');
        }, 4000);
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);

const motoRed = document.querySelector('.moto-red');
const carRed = document.querySelector('.car-red');
const transportsWrappers = document.querySelectorAll('.main__cars-wrapper');

const transportWrapper = document.querySelector('.section-gray');

let targetTransport = document.querySelector('.main__section_top-animation');

const configTransport = {
  attributes: true,
  childList: true,
  subtree: true
};

const callbackTransport = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
    } else if (mutation.type === 'attributes') {
      let coordinates = transportWrapper.getBoundingClientRect();

      if (coordinates.top < 280) {
        observer.disconnect();

        setTimeout(() => {
          motoRed.classList.add('main__animation_active');
        }, 0);

        setTimeout(() => {
          carRed.classList.add('main__animation_active');
        }, 1000);

        setTimeout(() => {
          transportsWrappers.forEach(() => {
            transportsWrappers[0].classList.add('main__animation_active_second_primary')
            transportsWrappers[1].classList.add('main__animation_active_second_secondary')
          })
        }, 3500);
      }

    }
  }
};

const observerTransport = new MutationObserver(callbackTransport);
observerTransport.observe(targetTransport, configTransport);














const descriptionsSections = document.querySelectorAll('.main__section');
const descriptions = document.querySelectorAll('.main__description');

descriptions.forEach((description, index) => {
  const configDescription = {
    attributes: true,
    childList: true,
    subtree: true
  };

  const callbackTransport = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {

      } else if (mutation.type === 'attributes') {
        let coordinates = descriptionsSections[index].getBoundingClientRect();

        if (coordinates.top < 450) {
          observer.disconnect();

          description.classList.add('main__description_active');
        }

      }
    }
  };

  console.log(description);

  descriptionsSections.forEach((descriptionSection, index) => {
    const observerTransport = new MutationObserver(callbackTransport);
    observerTransport.observe(descriptionSection, configDescription);
  })
});







const mainHeaderText = document.querySelector('.main__header-modal-text');
const modalHeaderBlock = document.querySelector('.main__header-modal');

mainHeaderText.addEventListener('mouseover', () => {
  modalHeaderBlock.classList.toggle('main__header-modal_active');

  console.log('навёл');
});

mainHeaderText.addEventListener('mouseout', () => {
  modalHeaderBlock.classList.toggle('main__header-modal_active');

  console.log('отвёл');
});