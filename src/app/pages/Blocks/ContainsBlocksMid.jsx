import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table'
import 'react-table/react-table.css'


  class ContainsBlocksMid extends React.Component{
 render(){
   const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },]
   const columns = [{

   Header: 'Height',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'name' // String-based value accessors!
 }, {
   Header: 'Time Found',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'age',
   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
 }, {
   Header:'Variance', // Custom header components!
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'friend.age'
 }]
   return(
      <div className="midBlocks">
      <h3> Recently Found Blocks </h3>
      <ReactTable
        data={data}
        columns={columns}/>
      </div>
   );
 }
}
export default ContainsBlocksMid;
