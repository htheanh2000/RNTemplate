import React from 'react'
import { View, Text } from 'react-native'
import Screen from '@/Components/Screen'
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const {t} = useTranslation()
  return (
    <Screen>
      <View style={{ marginHorizontal: 30 }}>
         <Text>{t('homescreen.title')}</Text>
         <Text>{t('common.username',{ name: 'Zero' })}</Text>
      </View>
    </Screen>
  )
}

export default HomeScreen
