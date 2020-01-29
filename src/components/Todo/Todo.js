import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({
  onClick, completed, text, onToggleImportant, important, onToggleDelete
}) => {
  let classNames = 'todo-list-item';

  if (important) {
    classNames += ' important';
  }

  if (completed) {
    classNames += ' done';
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onClick}
      >
        {text}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onToggleDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  important: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
