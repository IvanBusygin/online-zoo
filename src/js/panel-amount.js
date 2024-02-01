const amountProgressBar = document.querySelector('.amount__progress-bar');
const inputAnotherAmount = document.querySelector('.another__amount');

const amountPoints = document.querySelectorAll('.amount__point');
const amountNumbers = document.querySelectorAll('.amount__number');

const amountPintsArr = [];
for (const item of amountPoints) {
  amountPintsArr.push(item.dataset.amount);
}

amountProgressBar.addEventListener('click', ({target}) => {
  const amountPoint = target.closest('.amount__point');
  if (amountPoint) {
    const amount = amountPoint.dataset.amount;
    inputAnotherAmount.value = amount;
    selectElem(amount);
  }
});

function selectElem(val) {
  const sel = amountPintsArr.indexOf(val);
  amountPoints.forEach(i => i.classList.remove('amount__point--selected'));
  amountNumbers.forEach(i => i.classList.remove('amount__number--selected'));

  if (sel >= 0) {
    // console.log('selselsel', val, sel)
    amountPoints[sel].classList.add('amount__point--selected');
    amountNumbers[sel].classList.add('amount__number--selected');
  }
}

inputAnotherAmount.oninput = function () {
  const val = this.value;
  this.value = Math.round(val);
  if (val.length > 4) {
    this.value = val.slice(0, 4);
  }
  selectElem(val);
};
