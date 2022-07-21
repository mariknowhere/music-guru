import React from 'react';
import './App.css';
import Header from "./client/blocks/header/Header";
import { store } from './client/store';

function App() {
  const { headerData } = store;

  return (
    <div className="App">
      <Header {...headerData} />
    </div>
  );
}

export default App;
