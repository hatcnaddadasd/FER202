import './App.css';

function PeopleList () {
    const Person =[
        {name:"Alice", age:14,occupation:"student"},
        {name :"Bob", age: 25,occupation:"teacher"},
        {name :"Charlie", age:30, occupation:"doctor"}
    ]
    return (
           <div>
            <h2>Table of Person</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {Person.map((Person,index)=>(
                        <tr key={index}>
                            <td>{Person.name}</td>
                            <td>{Person.age}</td>
                            <td>{Person.occupation}</td>
                        </tr>
                    ))}
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default PeopleList;