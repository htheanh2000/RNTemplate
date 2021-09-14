import React, { FunctionComponent } from 'react'
import { SafeAreaView, ScrollView,View, ViewStyle } from 'react-native'
import {  S_HEIGHT } from '@/Constant'

type ScreenProps = {
    style?: any
}

const Screen: FunctionComponent<ScreenProps> = ({ children, style }) => {
    const ScreenStyle = {
        minHeight: S_HEIGHT - 50,
        backgroundColor: '#FFFFFF'
    }
    const mainView: ViewStyle = {
        backgroundColor: '#FFFFFF',
        minHeight: S_HEIGHT
    }
    return (
        <View style={mainView}>
            <SafeAreaView style={[ScreenStyle, style]}>
                <ScrollView style={{height: S_HEIGHT}}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Screen