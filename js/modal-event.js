const communicationBtn = document.querySelector('.add-slide-button--admin');
const modal = document.querySelector('.modal-box');
const modalClose = modal.querySelector('.modal-close');
const blur = document.querySelector('.blur-background');

communicationBtn.addEventListener('click', function() {
  modal.classList.add('modal-show');
  blur.classList.add('blur-background--show');
});


modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-show');
  blur.classList.remove('blur-background--show');
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      blur.classList.remove('blur-background--show');
    }
  }
});

blur.addEventListener('click', function() {
    modal.classList.remove('modal-show');
    blur.classList.remove('blur-background--show');
});
