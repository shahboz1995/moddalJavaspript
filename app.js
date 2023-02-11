const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalContainer = document.querySelector('.modal-container')
const faTimes = document.querySelector('.fa-times')

modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal')
})
modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal')
})
modalContainer.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log(event)
})
faTimes.addEventListener('click', () => {
  // console.log(1);
  modalOverlay.classList.remove('open-modal')
})

// function onCilick() {

// }
