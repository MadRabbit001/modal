'use strict';

const shows = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
let hide = document.querySelector('.hidden');

// select the button you want to simulate the click event on
const close = document.querySelector('.close-modal');

// add the event listener
addEventListener('keyup', function (event) {
  if (event.key === 'Escape') {
    // create a new click event
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    // dispatch the click event on the button
    close.dispatchEvent(clickEvent);
  }
});

// action for opening the modal
for (let index = 0; index < shows.length; index++) {
  shows[index].addEventListener('click', function () {
    if (hide.classList.contains('hidden')) {
      hide.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  });
}

// closing the modal
close.addEventListener('click', function () {
  if (!hide.classList.contains('hidden')) {
    hide.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
