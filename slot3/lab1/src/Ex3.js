const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
function Ex3 (){
    return(
        <div>
            <h2>Table of employee</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee,id)=>(
                        <tr key={id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Ex3;