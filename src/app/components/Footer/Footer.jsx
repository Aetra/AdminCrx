import React from 'react';
import './styleFooter.css';
import logoCrux from './img/LogoCrux.png';


  class Footer extends React.Component{

 render(){
   return(
     <footer className="wn-footer">
       <div className="container-fluid">
         <div className="row">
           <div className="rounded mx-auto">
             <img src={logoCrux} alt="logoCrux" class="logoCruxF"/>
           </div>
         </div>
         <hr className="hrOne"/>
         <div clasName="col-lg-12">
           <div className="row justify-content-center">
             <p className="text-muted">Cruxpool 2019 - All right Reserved</p>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}
export default Footer;
