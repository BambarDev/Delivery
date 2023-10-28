import tw from 'twrnc'
import React from 'react'
import Account from '../../../components/account'
import { TextInput } from 'react-native-paper'

const SignIn = ({ navigation }) => {
  return (
    <Account
      title='Sign In'
      passClick={() => console.log('Pressed')}
      passTitle='Forgot password?'
      onClick={() => navigation.navigate('')}
      buttonTitle='Sign In'
      accTitle="Don't have account?"
      subClick={() => navigation.navigate('')}
      subTitle='Sign Up'
    >
      <TextInput
        mode='flat'
        label='Phone'
        maxLength={8}
        textColor='#db2777'
        keyboardType='number-pad'
        underlineColor='#db2777'
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
        label='Password'
        textColor='#db2777'
        secureTextEntry={true}
        underlineColor='#db2777'
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
