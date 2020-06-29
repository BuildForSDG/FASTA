import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";

// const saga = createSagaMiddleware();

// const initializeStore = (initialState) => {
//     const store = createStore(reducer, initialState, applyMiddleware(saga));
    
//     // saga.run();

//     return store;
// };
const initializeStore = () => {
    const store = createStore(reducer);
    
    // saga.run();

    return store;
};

export default initializeStore;