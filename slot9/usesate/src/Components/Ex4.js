import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please input a Task"
          className="p-2 rounded shadow w-72"
        />
        <button
          onClick={handleAddTodo}
          className="btn btn-warning bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Add Todo
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md w-80">
        <h2 className="text-lg font-semibold text-center mb-3">Todo List</h2>
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="btn btn-warning bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
