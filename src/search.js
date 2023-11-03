import lupa from './assets/lupa.svg'



function Search() {
    return (<div
        >
        <div class="flex space-x-2 h-10 ">
        
        <div class="relative w-46 flex items-center  ">
            <input type="search" id="search-dropdown" class=" block p-2.5 w-full h-9  text-xl pl-12 text-gray-900 bg-white
             rounded-lg  border border-[#6C63FF] focus:ring-blue-500 focus:border-blue-500   " placeholder="Search Note..." />
            
                <img src={lupa} alt="icon_lupa" class='dark:fill-white absolute left-3 h-6'/>
          
        </div>
    </div>

        </div>);
}


export default Search;