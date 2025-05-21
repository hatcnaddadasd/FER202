
import './App.css';
const employee = { name: "John Doe", age: 30, department: "IT" };
function App() {
  return (
    <div>
      <p>
        Name: {employee.name}
      </p>
      <p>
        Age: {employee.age}
      </p>
      <p>
        Department: {employee.department}
      </p>
    </div>
  );
}

export default App;
