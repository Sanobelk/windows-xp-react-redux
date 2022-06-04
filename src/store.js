import { createStore } from 'redux';

const STORE = createStore(reducer,{
    xp_loaded : false
});

function reducer(state){
    return state;
}

export {STORE};