const buttons = document.querySelectorAll('.key-button');
const displayPagerMessage = document.querySelector('#pagerMessage');
const phoneMessage = document.querySelector('#phoneMessge');
const submitResetButtons = document.querySelectorAll('.btn');
const notification = new Audio('assets/sound/pager.wav')


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    const buttonValue = buttons[i].innerText;
    phoneMessage.textContent += buttonValue;
  });
}


for (let i = 0; i < submitResetButtons.length; i++) {
  submitResetButtons[i].addEventListener('click', function() {
    const button = submitResetButtons[i];
    if (button.id === 'submit') {
      sentToPage()
    } else if (button.id === 'reset') {
      resetPagerAndPhone()
    }
  });
}


function sentToPage(){
  if(!phoneMessage.innerText) {
    alert("You can't sent empty message")
  } else {
    displayPagerMessage.innerText = phoneMessage.innerText
    phoneMessage.innerText = ''
    notification.play()

  }
}

function resetPagerAndPhone() {
  phoneMessage.innerText = ''
  displayPagerMessage.innerText = ''
}