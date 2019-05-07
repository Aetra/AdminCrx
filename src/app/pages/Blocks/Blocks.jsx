import React from 'react';
import ContainsBlocksMid from "./ContainsBlocksMid";
import './style.css';

class Blocks extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   return(
     <div className="blocks">
       <ContainsBlocksMid/>
    </div>
   );
 }
}
export default Blocks;
