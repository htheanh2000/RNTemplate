import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux';
import { store, persistor } from '@/Middleware'
import { RootState } from '@/Middleware/Reducers'
import SplashScreen from '@/Screens/OtherScreens/SplashScreen';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AuthFlow from './auth'
import MainFlow from './main';


const Main = (): React.ReactElement => {
  const { accessToken } = useSelector((state: RootState) => state.user)
  return (
    <>
      {accessToken ? <MainFlow /> : <AuthFlow />}
    </>
  )
}

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <Main />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  )
}

export default App