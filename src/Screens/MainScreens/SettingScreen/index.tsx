import React from 'react'
import { View, Text } from 'react-native'
import Screen from '@/Components/Screen'
import { useTranslation } from 'react-i18next'
const SettingScreen = () => {
  const { t, i18n } = useTranslation()

  const getLanguage = (code: string) => {
    switch (code) {
      case 'en':
        return 'English'
      case 'vi':
        return 'Tiếng việt'
      default:
        break;
    }
  }
  return (
    <Screen>
      <View style={{ marginHorizontal: 30 }}>
        <Text>{t('setting.title')}</Text>
        <Text>{t('setting.currentLanguage', { language: getLanguage(i18n.language) })}</Text>
      </View>
    </Screen>
  )
}

export default SettingScreen
