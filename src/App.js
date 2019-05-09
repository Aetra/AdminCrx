import React from 'react';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import Blocks from "./app/pages/Blocks/Blocks";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import LogInPage from "./app/pages/Connect/LogInPage";
import Users from "./app/pages/Users/Users";
import isLoggedIn from "./app/helpers/isLoggedIn"
import {Route, Switch, Redirect} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>

          <Route exact path="/" render={() => (
          !isLoggedIn ?(
           <Redirect to="/home"/>
          ) : (
            <LogInPage/>
          )
          )}/>

        if(isLoggedIn()){
          <Route path="/blocks" exact component={Blocks} />,
          <Route path="/liveMiners" exact component={LiveMiners}/>,
          <Route path="/payments" exact component={Payments}/>,
          <Route path="/users" exact component={Users}/>,
          console.log("Error required to connect")
        }
        else{
          <Redirect to="/"/>
        }
        </Switch>

      <Footer/>
    </div>
  );
}

export default App;
