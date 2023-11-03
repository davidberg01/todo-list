import './App.css';
import Search from './search.js'
import Dropdown from './dropdown.js'
import Theme from "./theme.js"
import Todo from "./todo.js"

function App() {

    return (
            <div  className="App">
        <div >
          
      <h1 class='text-5xl font-bold mt-16'>TODO LIST</h1>


<form class='flex items-center space-x-3.5 h-10 mt-4'>
    <Search/>
    <Dropdown/>
    <Theme/>

</form>


<Todo name='Read recommended book'/>



        </div>



        <
        /div>
    );
}

export default App;