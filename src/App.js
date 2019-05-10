import React from 'react';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import Routing from "./Routing"


function App() {
  return (
    <div className="App">
      <Header/>
          <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
