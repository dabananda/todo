import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header/Header';
import Lists from './components/lists/Lists';
import Footer from './components/footer/Footer';
import './app.scss';

function App() {
  const [value, setValue] = useState('');
  const [lists, setLists] = useState([]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleLists = () => {
    if (value !== '') {
      const newLists = [...lists, value];
      setLists(newLists);
      setValue('');
    }
  };

  const handleDelete = item => {
    const todos = lists;
    const newToDos = todos.filter(todo => todo !== item);
    setLists(newToDos);
  };

  return (
    <div className="container-fluid bg-light">
      <div className="app">
        <Header
          value={value}
          handleChange={handleChange}
          handleLists={handleLists}
        />
        <Lists lists={lists} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
