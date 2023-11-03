function Dropdown() {
    function show() {
        let botao = document.getElementById("dropdown");
        botao.classList.remove("hidden")
    }

    return (
        <div>
   	
<button onClick={show} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full h-9 text-white bg-[#6C63FF] hover:bg-blue-800 
focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-xl rounded-lg text-sm pl-4 pr-4 py-3
 text-center inline-flex items-center "
 type="button">All
 <div class='h-5 w-[1px] bg-gray-100 ml-14'></div>
 <svg class="w-2.5 h-2.5 ml-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">complete</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">uncomplte</a>
      </li>
   
    </ul>
</div>

   </div>


    );
}


export default Dropdown;