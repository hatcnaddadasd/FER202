const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const total = ages.reduce((sum, age) => sum + age, 0);
  return total / ages.length;
};

function Ex4(){
    const ages=employees.map(emp => emp.age);
    const avg= averageAge(...ages);
    return(
        <div>
            <h2>Average Age</h2>
            <p>Average age : {avg.toFixed(2)}</p>
        </div>
    )
}
export default Ex4;