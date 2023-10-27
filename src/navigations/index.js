import React from 'react'
import AuthNavigator from './auth.navigator'
import HomeNavigator from './home.navigator'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator/>
      {/* <HomeNavigator/> */}
    </NavigationContainer>
  )
}

export default RootNavigator
