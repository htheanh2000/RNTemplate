import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import * as Screens  from '@/Screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const authFlow = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogInScreen" component={Screens.LogInScreen} />
      </Stack.Navigator>
    )
  }

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      </Stack.Navigator>
    );
  }

  function SettingStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Setting" component={Screens.SettingScreen} />
      </Stack.Navigator>
    );
  }
  const mainFlow = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    )
  }

const App = (): React.ReactElement => {
    const isLoggedIn = true
    return (
        <NavigationContainer>
                {isLoggedIn ? mainFlow() : authFlow()}
        </NavigationContainer>
    )
}

export default App