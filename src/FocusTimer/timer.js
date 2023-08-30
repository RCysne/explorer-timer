import state from './state.js'
import * as el from './elements.js'

export function countdown() {
  if (!state.isRunning) {
    return
  }

  console.log('Contando')

  // Função recursiva, quando uma função chama ela mesma em algum momento. E aqui ele vai chamando e contando o setimeout de 1 segundo
  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
