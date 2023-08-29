import './toggle-mode.js'
// Importando tudo e colocando no objeto, nesse caso nomeado de FocusTimer
import * as FocusTimer from './FocusTimer/index.js'

// Pegar o objeto que foi importado, nesse caso o FocusTimer e executar a função passando os parâmetros
FocusTimer.start(0, 10)
