const buttons = document.querySelectorAll('.key-button')
const phoneMessage = document.querySelector('#phoneMessge')

const submitResetBtn = document.querySelector("#btn")


buttons.forEach(button => {
  button.addEventListener('click', function(){
    const buttonValue = button.innerText
    phoneMessage.textContent += buttonValue
  });
});
