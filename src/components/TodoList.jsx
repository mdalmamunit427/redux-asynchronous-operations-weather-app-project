import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, removeTodo } from '../redux/features/todos/todoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Todo List</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {items.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center px-4 py-2 border-b ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.title || todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
