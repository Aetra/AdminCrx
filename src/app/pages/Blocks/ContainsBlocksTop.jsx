import React from 'react';
import './style.css';

  class ContainsBlocksTop extends React.Component{

 render(){
   return(
     <div className="topBlocks text-center">
       <p>Pool always pay full block reward including TX fees and uncle rewards</p>
      <p><b>Block maturity requires </b> <u>up to</u> 520 <b>blocks.
      Usually it's less indeed. </b>
      </p>
    </div>
   );
 }
}
export default ContainsBlocksTop;
