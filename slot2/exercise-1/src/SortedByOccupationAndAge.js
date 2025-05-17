import React from 'react';

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 15, occupation: "teacher" },
  { name: "Charlie", age: 30, occupation: "doctor" },
  { name: "Nike", age: 20, occupation: "teacher" },
  { name: "Adidas", age: 12, occupation: "student" },
  { name: "Louis", age: 35, occupation: "doctor" }
];

const SortedByOccupationAndAge = () => {
  // Clone and sort the array
  const sortedPeople = [...Person].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    // If occupations are equal, sort by age
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted by Occupation and Age</h2>
      <ul>
        {sortedPeople.map((p, index) => (
          <li key={index}>
            {p.name} – {p.occupation}, Age: {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortedByOccupationAndAge;
