
import React from 'react';

const Person = [
  { name: "Alice", age: 14, occupation: "student" },
  { name: "Bob", age: 15, occupation: "teacher" },
  { name: "Charlie", age: 16, occupation: "doctor" }
];

const AreAllTeenagers = () => {
  // Check if all persons are teenagers
  const allTeenagers = Person.every(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  );
};

export default AreAllTeenagers;
