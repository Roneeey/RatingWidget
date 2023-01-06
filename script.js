'use strict';

const btnRating = document.querySelectorAll('.btn-rating');
const submitBtn = document.querySelector('.btn');
const thankYouHTML = document.querySelector('.rating--selected');
const thankYouCard = document.querySelector('.card--thank-you');

let ratingNum = 0;

btnRating.forEach(function (btn, i) {
  btn.onclick = function () {
    ratingNum = i + 1;
  };
});

const thankYouMessage = function () {
  thankYouCard.style.zIndex = '1';
  thankYouCard.classList.remove('hidden');
  thankYouHTML.innerHTML = `You selected ${ratingNum} out of ${btnRating.length}`;
};

submitBtn.addEventListener('click', thankYouMessage);
