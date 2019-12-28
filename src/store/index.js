import { createStore, compose, applyMiddleware } from 'redux';
import Reactotron from '../../ReactotronConfig';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const PersistReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    PersistReducer,
    {},
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer()
    )
);
export const persistor = persistStore(store);
