import React from 'react';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';

import Blocks from "./app/pages/Blocks/Blocks";
import Finances from "./app/pages/Finances/Finances";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import Users from "./app/pages/Users/Users";
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
        <Route path="/home" exact component={Home} />
        <Route path="/blocks" exact component={Blocks} />
        <Route path="/liveMiners" exact component={LiveMiners} />
        <Route path="/users" exact component={Users}/>
        <Route path="/payments" exact component={Payments} />
        <Route path="/finances" exact component={Finances} />
      <Footer/>


    </div>
  );
}

export default App;
