/**
 * Created by siri on 2017-01-09.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
//import *as actions from './actions';  //액션 불러오기

import App from './components/App';

//store 생성
const store = createStore(reducers);

//현재상태 기록
//console.log(store.getState());

//스토어에 변화가 있을 때 실행되는 함수
//store.subscribe(()=>console.log(store.getState()));

//액션 보내기
/*
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));
*/
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
