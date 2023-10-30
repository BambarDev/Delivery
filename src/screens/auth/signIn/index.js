import tw from 'twrnc'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Account from '../../../components/account'
import { getAuth, signInWithPhoneNumber } from '@react-native-firebase/auth'

const auth = getAuth();

const SignIn = ({ navigation }) => {
  const [ value, setValue ] = useState({
    phone: '',
    password: '',
    error: ''
  });
  
  const signIn = async () => {
    if (value.phone === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Phone and password are mandatory.'
      })
      return
    }

    try {
      await signInWithPhoneNumber(auth, countryCode+value.phone, value.password);
    }catch(error) {
      setValue({
        ...value,
        error:error.message,
      })
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
        value={value.phone}
        label='Phone'
        maxLength={8}
        textColor='#db2777'
        onChangeText={(text) => setValue({ ...value, phone: text })}
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
        value={value.password}
        label='Password'
        textColor='#db2777'
        secureTextEntry={true}
        underlineColor='#db2777'
        onChangeText={(text) => setValue({ ...value, password: text })}
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
