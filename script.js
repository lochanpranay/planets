function subNavSelection(selection) {
 let elems = document.querySelectorAll('.sub-nav__link');
 for(let ele of elems) {
   ele.classList.remove('sub-nav__link--highlight');
   if(ele.textContent === selection) {
     ele.classList.add('sub-nav__link--highlight');
     if(selection.includes('structure')) {
      document.querySelector('.planet-details__planet-img').src = 'img/earth_core.png'
     } else {
      document.querySelector('.planet-details__planet-img').src = 'img/earth.png'
     }
   }
 }
}

function hamMenuClicked() {
  if(document.querySelector('.js-ham-check').checked) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }
}