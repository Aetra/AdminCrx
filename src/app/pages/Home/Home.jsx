import React from 'react';
import ContainsHome from './ContainsHome';
import ContainsTableR from './ContainsTableR';
import './styleHome.css';

  class Home extends React.Component{

   render(){
     return(
       <div className="homee">
        <h1 className="text-center"> Cruxpool Servers </h1>
        <hr className=" styleHr"/>
         <div className="pt-3 row">
           <div className="col-6">
             <ContainsHome/>
           </div>
           <div className=" col-6">
             <ContainsTableR/>
           </div>
         </div>
       </div>
     );
   }
  }
export default Home;
