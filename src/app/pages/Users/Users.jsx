import React from 'react';
import './style.css';
import ContainsUsersMid from './ContainsUsersMid'

class Users extends React.Component{
 render(){
   return(
     <div className="users">
      <ContainsUsersMid/>
    </div>
   );
 }
}
export default Users;
