import React from 'react'
import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
