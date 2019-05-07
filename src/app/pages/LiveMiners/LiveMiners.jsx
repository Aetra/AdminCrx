import React from 'react';
import './style.css';
import ContainsMinersTop from './ContainsMinersTop';
import ContainsMinersMid from './ContainsMinersMid';

  class LiveMiners extends React.Component{
   render(){
     return(
       <div className="liveMiners">
         <ContainsMinersTop/>
         <ContainsMinersMid/>

      </div>
     );
   }
}
export default LiveMiners;
