import lua from "./assets/lua.svg"
import sol from "./assets/sol.svg"
import { useState } from "react"

function Theme() {

    const [isActive, setIsActive] = useState(false)

    function trocar() {
        let lua = document.getElementById("lua");
        let sol = document.getElementById("sol");
        if (isActive) {
            sol.classList.add("hidden")
            lua.classList.remove("hidden");
            setIsActive(false)
        } else {
            lua.classList.add("hidden");
            sol.classList.remove("hidden");
            setIsActive(true)
        }
    }

    return (
        <div class="flex items-center">
        	<button onClick={trocar}>
        		<img id='lua' class="bg-[#6C63FF] w-10 h-9 p-3 rounded-lg" src={lua} alt="icon_lua"/>
        		<img id='sol' class="hidden bg-[#6C63FF] w-10 h-9 p-3 rounded-lg"src={sol} alt="icon_sol"/>
        	</button>
        </div>
    )
}


export default Theme;