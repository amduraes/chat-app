import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact name='Guy' avatar='https://randomuser.me/api/portraits/men/25.jpg' online />
      <Contact name='Cindy' avatar='https://randomuser.me/api/portraits/women/90.jpg' />
      <Contact name='Beatrice' avatar='https://randomuser.me/api/portraits/women/34.jpg' online />
    </div>
  );
}

export default App;
