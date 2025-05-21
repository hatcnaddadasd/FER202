import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const Ex7 = () => {
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Sorted Employees</h2>
      <ul>
        {sortedEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} – {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex7;
