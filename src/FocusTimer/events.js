// Importando o módulo elements.js que capturou todos os elementos que estão dentro da section controls
import { controls } from "./elements.js"
import * as actions from "./actions.js"



// Um função que captura o click que acontece dentro do módulo elements. E com o target, ele diz exatamente onde está clicando.
export function registerControls() {
    controls.addEventListener('click', (event) => {
        // Para acessar o data se utiliza o dataset. E para acessar a ação desejada, se coloca o nome dado em seguida.
        // console.log(event.target.dataset.action)

        // Bloqueando o click fora do alvo desejado. Só permite continuar na função depois do if, o que não for undefined. O que for undefined ele sai da função.
        const action = event.target.dataset.action
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]()

        
    })
}