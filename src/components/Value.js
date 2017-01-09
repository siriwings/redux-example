import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';

const propTypes={
    number:PropTypes.number

};

const defaultProps={
    number:-1
};

class Value extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <h1>{this.props.number}</h1>
    }

}


let mapStateToProps=(state)=>{
    return {
        number:state.counter.number
    };
}


Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

Value = connect(mapStateToProps)(Value);

export default Value;