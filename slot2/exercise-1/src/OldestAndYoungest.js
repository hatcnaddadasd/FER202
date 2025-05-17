import React from 'react';

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 15, occupation: "teacher" },
  { name: "Charlie", age: 30, occupation: "doctor" },
  { name: "Nike", age: 20, occupation: "teacher" },
  { name: "Adidas", age: 12, occupation: "student" },
  { name: "Louis", age: 35, occupation: "doctor" }
];

const findOldestAndYoungest = (people) => {
  if (people.length === 0) return { oldest: null, youngest: null };

  let oldest = people[0];
  let youngest = people[0];

  for (const person of people) {
    if (person.age > oldest.age) {
      oldest = person;
    }
    if (person.age < youngest.age) {
      youngest = person;
    }
  }

  return { oldest, youngest };
};

const OldestAndYoungest = () => {
  const { oldest, youngest } = findOldestAndYoungest(Person);

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>

      {oldest && (
        <div>
          <h3>Oldest:</h3>
          <p>Name: {oldest.name}</p>
          <p>Age: {oldest.age}</p>
          <p>Occupation: {oldest.occupation}</p>
        </div>
      )}

      {youngest && (
        <div>
          <h3>Youngest:</h3>
          <p>Name: {youngest.name}</p>
          <p>Age: {youngest.age}</p>
          <p>Occupation: {youngest.occupation}</p>
        </div>
      )}
    </div>
  );
};

export default OldestAndYoungest;
