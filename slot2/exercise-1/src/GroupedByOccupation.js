import React from 'react';

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 15, occupation: "teacher" },
  { name: "Charlie", age: 30, occupation: "doctor" },
  { name: "Nike", age: 20, occupation: "teacher" },
  { name: "Adidas", age: 12, occupation: "student" },
  { name: "Louis", age: 35, occupation: "doctor" }
];

const groupByOccupation = (people) => {
  return people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {});
};

const GroupedByOccupation = () => {
  const grouped = groupByOccupation(Person);

  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.keys(grouped).map((occupation) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {grouped[occupation].map((p, idx) => (
              <li key={idx}>
                {p.name}, Age: {p.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedByOccupation;
