import Counter from "./Components/Ex1";
import Input from "./Components/Ex2";
import Toggle from "./Components/Ex3";
import TodoApp from "./Components/Ex4";
import ColorSwitcher from "./Components/Ex5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SearchFilter from "./Components/Ex6";
import DragAndDropList from "./Components/Ex7";
function App() {
  return(
    <div>
    <Counter/>
    <Input/>
    <Toggle/>
    <TodoApp/>
    <ColorSwitcher/>
    <SearchFilter/>
<DragAndDropList/>
    </div>

  )
}
  
export default App;
