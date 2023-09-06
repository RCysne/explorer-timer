import state from './state.js'
import * as events from './events.js'
import * as timer from "./timer.js"

export function start(minutes, seconds) {
    // Iniciou a função atualizando o estado. Depois leu a função updateDisplay para ver se tem algum novo valor e atualizar.
    state.minutes = minutes;
    state.seconds = seconds;

    // função updateDisplay no arquivo timer
    timer.updateDisplay()

    // função registerControls no arquivo events
    events.registerControls();
    events.setMinutes();
}
