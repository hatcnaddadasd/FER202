import React, { useState } from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const Ex5 = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h2>Select an Employee</h2>
      <select value={selected} onChange={handleChange}>
        <option value="">-- Choose a name --</option>
        {employees.map((emp, index) => (
          <option key={index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
};

export default Ex5;
