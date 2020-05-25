import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(reducer, initialState = {}) {
    const storeEnhancers = composeWithDevTools(applyMiddleware(thunk));

    return createStore(reducer, initialState, storeEnhancers);
}
