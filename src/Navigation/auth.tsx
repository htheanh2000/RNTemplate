import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as Screens from '@/Screens'
const Stack = createStackNavigator()

const AuthFlow = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogInScreen" component={Screens.LogInScreen} />
      </Stack.Navigator>
    )
}


export default AuthFlow