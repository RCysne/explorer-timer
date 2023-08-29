// Importando o state para que as funções atualizem o estado da aplicação
import state from "./state.js"

// As funções tem que ter o mesmo nome do data, já que estão sendo lidas nos eventos através do dataset

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function set() {
    console.log('setRunning Function')
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
}