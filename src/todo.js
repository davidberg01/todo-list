import icon_lapis from "./assets/lapis.svg"
import icon_lixeira from "./assets/lixeira.svg"
import icon_concluido from "./assets/concluido.png"
import { useState } from 'react'

function Todo(props) {
    const [concluido, setconcluido] = useState(false)

    function concluir() {
        let botao = document.getElementById("button_concluir")
        let icon_concluido = document.getElementById("icon_concluido")
        if (concluido) {
            botao.classList.remove("bg-[#6C63FF]")
            icon_concluido.classList.add("hidden")
            setconcluido(false)

        } else {
            icon_concluido.classList.remove("hidden")
            botao.classList.add("bg-[#6C63FF]")
            setconcluido(true)
        }

    }
    return (
        <div class="flex items-center space-x-9 mt-5">
        <button id="button_concluir" onClick={concluir} class='w-8 h-8 rounded-sm border border-[#6C63FF] px-2 py-2'>
        	<img id="icon_concluido" class="hidden" src={icon_concluido} alt="icon_concluido" />
        </button>
        <h1 class='text-2xl'>{props.name}</h1>
        <img src={icon_lapis} alt="icon_lapis"/>
<img src={icon_lixeira} alt="icon_lixeira"/>
    	</div>
    )
}

export default Todo;