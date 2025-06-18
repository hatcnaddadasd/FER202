
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './ValidatedInput';
import ValidatedLoginForm from './ValidatedLoginForm ';
import ValidatedFullForm from './ValidatedFullForm';

function App() {
  return (
    <div className='mt-5'>
      <ValidatedInput/>
      <ValidatedLoginForm/>
      <ValidatedFullForm/>
    </div>
  );
}

export default App;
