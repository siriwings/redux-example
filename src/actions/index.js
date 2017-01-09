//import {INCREMENT, DECREMENT,SET_COLOR} from './ActionTypes';
//위 코드와 같은 의미임...
import * as types from './ActionTypes';

//액션 생성자는 함수이다.
//액션 생성자를 다른 곳에서 불러올 수 있도록 export한다.

export function increment() {

    //객체를 리턴한다.
    return {
        type:types.INCREMENT
    };
}

export function decrement() {

    //객체를 리턴한다.
    return {
        type:types.DECREMENT
    };
}

export function setColor(color) {

    //객체를 리턴한다.
    return {
        type:types.SET_COLOR,
        color
    };

}