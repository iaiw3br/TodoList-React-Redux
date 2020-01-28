import React from "react";
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, onToggleImportant, important}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: important ? 'red' : 'none'
        }}
    >
        {text}
        <button onClick={onToggleImportant}>important</button>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;