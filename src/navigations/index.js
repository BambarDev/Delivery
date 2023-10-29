import React, { useDeferredValue, useEffect, useState } from 'react'
import AuthNavigator from './auth.navigator'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigator from './home.navigator';

const RootNavigator = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
    checkAuthentication();
  },[]);

  const checkAuthentication = async () => {
    try {
      const storedPhone = await AsyncStorage.getItem('phone');
      const storedPassword = await AsyncStorage.getItem('password');
      
      if(storedPhone && storedPassword) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('Error checking authentication:', error);
    }
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? (<AuthNavigator/>) : (<HomeNavigator/>)}
    </NavigationContainer>
  )
}

export default RootNavigator
