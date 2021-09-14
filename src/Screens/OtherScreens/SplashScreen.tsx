import React from 'react'
import { Image } from 'react-native'
import Images from '@/Assets/Images'
import { Screen } from '@/Components'


const SplashScreen = () => {
    return (
        <Screen>
             <Image source={Images.eLearning}/>
        </Screen>
    )
}

export default SplashScreen