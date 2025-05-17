import React from 'react';

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 25, occupation: "teacher" },
  { name: "Charlie", age: 30, occupation: "doctor" }
];

const FirstTeenager = () => {
  // Find the first person who is a teenager
  const teenager = Person.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {teenager ? (
        <div>
          <p>Name: {teenager.name}</p>
          <p>Age: {teenager.age}</p>
          <p>Occupation: {teenager.occupation}</p>
        </div>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
};

export default FirstTeenager;
