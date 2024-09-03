import './App.css';
import React from 'react';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';

//STATE = How to write a variable in React

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
