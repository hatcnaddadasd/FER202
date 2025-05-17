import React from "react";

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 15, occupation: "teacher" },
  { name: "Charlie", age: 30, occupation: "doctor" },
  { name: "Nike", age: 20, occupation: "teacher" },
  { name: "Adidas", age: 12, occupation: "student" },
  { name: "Louis", age: 35, occupation: "doctor" }
];

const AverageAgeByOccupation = () => {
  const occupationData = {};

  Person.forEach((person) => {
    const job = person.occupation;

    if (!occupationData[job]) {
      occupationData[job] = {
        totalAge: 0,
        count: 0
      };
    }

    occupationData[job].totalAge += person.age;
    occupationData[job].count += 1;
  });

  const averageByOccupation = {};
  for (let job in occupationData) {
    const data = occupationData[job];
    averageByOccupation[job] = (data.totalAge / data.count).toFixed(2);
  }

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(averageByOccupation).map(([job, avg], index) => (
          <li key={index}>
            {job}: {avg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AverageAgeByOccupation;
