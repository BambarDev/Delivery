import tw from 'twrnc'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Account from '../../../components/account'
import { getAuth, signInWithPhoneNumber } from '@react-native-firebase/auth'

const auth = getAuth();

const Register = ({ navigation }) => {
  const [ value, setValue ] = useState({
    phone: '',
    password: '',
    error: ''
  })
  const countryCode = '+976';
  
  const signUp = async () => {
    if (value.phone === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Phone and password are mandatory.'
      })
      return;
    }

    try {
      const confirmation = await signInWithPhoneNumber(auth, countryCode+value.phone, value.password);
      navigation.navigate('otp-verification', { confirmation });
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <Account
      title='Register'
      onClick={() => signUp()}
      buttonTitle='Register'
      accTitle="Already got an account?"
      subClick={() => navigation.navigate('sign-in')}
      subTitle='Sign In'
    >
      <TextInput
        mode='flat'
        label='Phone'
        value={value.phone}
        maxLength={8}
        textColor='#db2777'
        onChangeText={(text) => setValue({ ...value, phone: text })}
        underlineColor='#db2777'
        keyboardType='phone-pad'
        activeUnderlineColor='#db2777'
        style={tw`w-80 h-14 bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal my-2`}
        theme={{ 
          colors: { 
            onSurfaceVariant: '#db2777' 
          } 
        }}
      />
      <TextInput
        mode='flat'
        label='Password'
        value={value.password}
        textColor='#db2777'
        secureTextEntry={true}
        underlineColor='#db2777'
        onChangeText={(text) => setValue({ ...value, password: text })}
        activeUnderlineColor='#db2777'
        style={tw`w-80 h-14 bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal`}
        theme={{ 
          colors: { 
            onSurfaceVariant: '#db2777' 
          } 
        }}
      />
    </Account>
  )
}

export default Register
