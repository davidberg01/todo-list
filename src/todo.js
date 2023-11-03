import icon_lapis from "./assets/lapis.svg"
import icon_lixeira from "./assets/lixeira.svg"
import icon_concluido from "./assets/concluido.png"

function Todo(props) {
    return (
        <div class="flex items-center space-x-9 mt-5">
        <button class='w-8 h-8 rounded-sm bg-[#6C63FF] border border-[#6C63FF] px-2 py-2'>
        	<img src={icon_concluido} alt="icon_concluido" />
        </button>
        <h1 class='text-2xl'>{props.name}</h1>
        <img src={icon_lapis} alt="icon_lapis"/>
<img src={icon_lixeira} alt="icon_lixeira"/>
    	</div>
    )
}

export default Todo;