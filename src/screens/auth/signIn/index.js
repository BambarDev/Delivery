import tw from 'twrnc'
import React, { useState } from 'react'
import Account from '../../../components/account'
import { TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({ navigation }) => {
  const [ phone, setPhone ] = useState('')
  const [ password, setPassword ] = useState('')

  const signIn = async () => {
    try {
      const storedPhone = await AsyncStorage.getItem('phone');
      const storedPassword = await AsyncStorage.getItem('password');
      if(phone === storedPhone && password === storedPassword) {
        await AsyncStorage.setItem('authenticated','true');
      } else {
        console.log('Invalid phone number or password.');
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  }

  return (
    <Account
      title='Sign In'
      passClick={() => console.log('Pressed')}
      passTitle='Forgot password?'
      onClick={() => signIn()}
      buttonTitle='Sign In'
      accTitle="Don't have account?"
      subClick={() => navigation.navigate('register')}
      subTitle='Register'
    >
      <TextInput
        mode='flat'
        value={phone}
        label='Phone'
        maxLength={8}
        textColor='#db2777'
        onChangeText={setPhone}
        underlineColor='#db2777'
        keyboardType='number-pad'
        activeUnderlineColor='#db2777'
        style={tw`w-80 h-14 bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal mt-5`}
        theme={{ 
          colors: { 
            onSurfaceVariant: '#db2777' 
          } 
        }}
      />
      <TextInput
        mode='flat'
        value={password}
        label='Password'
        textColor='#db2777'
        secureTextEntry={true}
        underlineColor='#db2777'
        onChangeText={setPassword}
        activeUnderlineColor='#db2777'
        style={tw`w-80 h-14 bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal my-4`}
        theme={{ 
          colors: { 
            onSurfaceVariant: '#db2777' 
          } 
        }}
      />
    </Account>
  )
}

export default SignIn
