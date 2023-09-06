import state from './state.js'
import * as el from './elements.js'
import './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
  if (!state.isRunning) {
    return
  }




  // Como está chegando como string proveniente da função updateDisplay, é preciso alterar para número para usar o decremento
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  // Quando clicar ele vai decrementar o valor
  seconds--
  
  
  
  if (seconds < 0) {
    // Se os minutos forem maiores do que 1, os segundos tem que volar para o 59 e o minuto decrementar
    seconds = 59;
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }


  // Em seguida chama a função passando os valores atualizados como parâmetros
  updateDisplay(minutes, seconds)

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
