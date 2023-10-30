import React, { useDeferredValue, useEffect, useState } from 'react'
import AuthNavigator from './auth.navigator'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './home.navigator';
import useAuth from '../hooks/useAuth';

const RootNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <HomeNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

export default RootNavigator
