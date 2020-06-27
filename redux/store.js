import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return state;
        default:
            return state; 
    }
};

const initializeStore = (initialState) => {
    const store = createStore(reducer, initialState, applyMiddleware(saga));
    
    // saga.run();

    return store;
};

export default initializeStore;