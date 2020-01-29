import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

import './TodoList.css';

const TodoList = ({ todos, toggleTodo, toggleImportant }) => {
  const elements = todos.map((todo) => (
    <li key={todo.id} className="todo-list-item">
      <Todo
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onToggleImportant={() => toggleImportant(todo.id)}
      />
    </li>
  ));

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleImportant: PropTypes.func.isRequired,
};

export default TodoList;
