import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import { increment, decrement } from '../actions';

const propTypes={
    onPlus:PropTypes.func,
    onSubtract:PropTypes.func,
    onRandomizeColor:PropTypes.func
};

function createWarning(funcName) {
    return ()=> console.warn(`${funcName} is not defined`)

}

const defaultProps={
    onPlus:createWarning('onPlus'),
    onSubtract:createWarning('onSubtract'),
    onRandomizeColor:createWarning('onRandomizeColor')
};

class Control extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>

        );

    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        onPlus: () => dispatch(increment()),
        onSubtract: () => dispatch(decrement())
    }
}


Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

Control = connect(undefined, mapDispatchToProps)(Control);

export default Control;
