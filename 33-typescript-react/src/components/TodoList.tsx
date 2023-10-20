import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
    setTodos(updatedTodos);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    // let selected = [...todos];
    // selected.forEach((e, i) => {
    //   if (e.id === id) {
    //     e.completed = !e.completed;
    //   }
    // });
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    addTodo();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeydown}
          placeholder='add new todo !'
          ref={inputRef}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />;
        })}
      </ul>
    </div>
  );
}
