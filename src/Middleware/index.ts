import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers, { RootState } from './Reducers'
import mySaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']

}

const persistedReducer = persistReducer<RootState>(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store)


// then run the saga
sagaMiddleware.run(mySaga)


export { store, persistor }

