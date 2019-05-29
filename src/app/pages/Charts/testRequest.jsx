import React from 'react';
import './style.css';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatBalance} from '../../helpers/helpers';

  class testRequest extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       postsHr:[],
     };
  }

axiosResult(){

    componentDidMount(){
      this.axiosResult = this.axiosResult.bind(this);
      this.axiosResult();
      this.interval=setInterval(this.axiosResult, config.get("refreshIntervalUsers"))
    }

    componentWillUnmount() {
       clearInterval(this.interval);
       this.setState({postsHr[]})
    }

 render(){
   /** Part NiceHash */
   
