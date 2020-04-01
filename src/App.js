import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact name='Guy Ross' avatar='https://randomuser.me/api/portraits/men/25.jpg' online />
      <Contact name='Cindy Hanson' avatar='https://randomuser.me/api/portraits/women/90.jpg' />
      <Contact name='Beatrice Thompson' avatar='https://randomuser.me/api/portraits/women/34.jpg' online />
    </div>
  );
}

export default App;
