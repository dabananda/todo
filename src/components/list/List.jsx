import React from 'react';
import './list.scss';

const List = props => {
  const { item } = props;
  const { handleDelete } = props;

  return (
    <div className="list container my-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title mb-0">{item}</h5>
            </div>
            <div className="delete-icon">
              <i
                className="bi bi-trash-fill"
                onClick={() => handleDelete(item)}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
