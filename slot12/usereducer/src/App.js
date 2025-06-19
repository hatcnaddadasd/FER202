
import './App.css';
import Counter from './Counter';
import ChangeNameAge from './formReducer';
import ItemList from './ItemList';
import QuestionBank from './QuestionBank';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Counter/>
      <ChangeNameAge/>
      <ItemList/>
      <QuestionBank/>
    </div>
  );
}

export default App;
