import React from 'react'
import SignIn from '../screens/auth/signIn'
import Register from '../screens/auth/register'
import OtpVerification from '../screens/auth/register/otp-verification'
import AccountSuccess from '../screens/auth/register/account-success'

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
      <Auth.Screen
        name='register'
        component={ Register }
        options={{
          headerTitle:'Register',
          headerShown: false
        }}
      />
      <Auth.Screen
        name='otp-verification'
        component={ OtpVerification }
        options={{
          headerTitle:'Otp Verification',
          headerShown: false
        }}
      />
      <Auth.Screen
        name='account-success'
        component={ AccountSuccess }
        options={{
          headerTitle:'Account Success',
          headerShown: false
        }}
      />
    </Auth.Navigator>
  )
}

export default AuthNavigator
