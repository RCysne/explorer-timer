// Importando o state para que as funções atualizem o estado da aplicação
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js' 

// As funções tem que ter o mesmo nome do data, já que estão sendo lidas nos eventos através do dataset

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()

}

export function set() {
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus()
  console.log('setRunning Function')
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}
