import React from 'react';
import './header.scss';

const Header = props => {
  return (
    <div className="header container text-center py-3">
      <h1>ToDo List</h1>
      <div className="input-group mb-3">
        <input
          id="input"
          type="text"
          className="form-control"
          placeholder="Add Task..."
          value={props.value}
          onChange={props.handleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              props.handleLists();
            }
          }}
        />
        <span className="input-group-text">
          <i
            className="bi bi-plus-square-fill icon"
            onClick={props.handleLists}></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
