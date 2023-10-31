import React from 'react'
import useAuth from '../hooks/useAuth'
import HomeNavigator from './home.navigator'
import AuthNavigator from './auth.navigator'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <HomeNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

export default RootNavigator
