import './App.css';

function NamePerson () {
    const Person =
        {name: "Alice", age: 18,occupation:"student"}
    
    return (
        <div>
            <p>Name: {Person.name}</p>
            <p>Age : {Person.age}</p>
            <p>occupation : {Person.occupation}</p>
        </div>
    );
}
export default NamePerson;