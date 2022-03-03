import React from 'react';
import List from '../list/List';

const Lists = props => {
  const { lists } = props;
  const { handleDelete } = props;
  return (
    <div>
      {lists.map((item, idx) => (
        <List key={idx} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Lists;
