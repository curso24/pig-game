//seleccionar elementos del DOM

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.getElementsByClassName('btn--hold')[0]

console.log(btnNew, btnRoll, btnHold)

btnRoll.addEventListener('click', () => {
  console.log('Roll dice')
})

btnNew.addEventListener('click', () => {
  console.log('New Game')
})

btnHold.addEventListener('click', () => {
  console.log('Pasar turno')
})
