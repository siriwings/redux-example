import React,{Component, PropTypes} from 'react';
import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';


class Counter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

export default Counter;
