import React from 'react';
import { ToDoItem } from '../types/types';

type Props = {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
};

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        {todo.text}
      </label>
    </li>
  );
}
