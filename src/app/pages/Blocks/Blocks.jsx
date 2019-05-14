import React from 'react';
import ContainsBlocksLeft from "./ContainsBlocksLeft";
import ContainsBlocksRight from "./ContainsBlocksRight";

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
      <div className="row">
        <ContainsBlocksLeft/>
        <ContainsBlocksRight/>
      </div>
    </div>
   );}
}
export default Blocks;
