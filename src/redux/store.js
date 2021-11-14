import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {           // in order to console log only in development mode
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

// export default { store, persistor };