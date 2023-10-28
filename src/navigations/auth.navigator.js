import React from 'react'
import SignIn from '../screens/auth/signIn'

import { createStackNavigator } from '@react-navigation/stack'

const Auth = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Auth.Screen
        name='sign-in'
        component={ SignIn }
        options={{
          headerTitle:'Sign In',
          headerShown: false
        }}
      />
    </Auth.Navigator>
  )
}

export default AuthNavigator
