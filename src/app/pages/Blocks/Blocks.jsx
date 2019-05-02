import React from 'react';
import ContainsBlocksTop from "./ContainsBlocksTop";
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
       <ContainsBlocksTop/>
       <ContainsBlocksMid/>
    </div>
   );
 }
}
export default Blocks;
