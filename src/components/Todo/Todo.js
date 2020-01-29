import React from "react";
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({onClick, completed, text, onToggleImportant, important}) => {

    let classNames = 'todo-list-item';

    if ( important ) {
        classNames += ' important'
    }

    if (completed) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onClick}>{text}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              // onClick={onDelete}
          >
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    )

    // <div>
    //     <li className="list-group-item"
    //         onClick={onClick}
    //         style={{
    //             textDecoration: completed ? 'line-through' : 'none',
    //             color: important ? 'red' : 'none'
    //         }}
    //     >
    //         {text}
    //     </li>
    //     <button onClick={onToggleImportant}>important</button>
    //
    // </div>

};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;