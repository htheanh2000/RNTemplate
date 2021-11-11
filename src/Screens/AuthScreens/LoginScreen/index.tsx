import React from 'react'
import { View, Text } from 'react-native'
import Screen from '@/Components/Screen'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '@/Middleware/Actions'
import Card from '@/Assets/Images/Allison.png'
const LogInScreen = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    const loginPayload = {
      username: 'zero',
      password: '123456'
    }
    console.log('loginPayload');
    
    dispatch(login(loginPayload))
  }, [])
  return (
    <Screen>
      <View style={{ marginHorizontal: 30 }}>
        <Text>{t('loginscreen.title')}</Text>
      </View>
    </Screen>
  )
}

export default LogInScreen
