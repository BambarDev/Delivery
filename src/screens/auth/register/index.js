import tw from 'twrnc'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Account from '../../../components/account'
import { firebase } from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Register = ({ navigation }) => {
  const [ phone, setPhone ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cpassword, setCPassword ] = useState('');
  const countryCode = '+976';
  
 const storeCredentials = async (phone, pass) => {
    try {
      // Store phone number and password in AsyncStorage
      await AsyncStorage.setItem('phoneNumber', phone);
      await AsyncStorage.setItem('password', pass);
    } catch (error) {
      console.error('Error storing credentials:', error);
      // Handle error
    }
  };
  const handleSendOTP = async() => {
    if(phoneNumber && password) {
      try{
        await store(phoneNumber, password);
        
        if (!phoneNumber) {
          console.error('Phone number is undefined');
          return;
        }

        const confirmation = await firebase.auth().signInWithPhoneNumber(countryCode+phone);
        navigation.navigate('otp-verification', { 
          confirmation, 
          phone, 
          password 
        });
      } catch (error) {
        console.error('Phone verification error:', error);
      }
    } else {
      console.error('Please enter phone number and password');
    }
  }

  return (
    <Account
      title='Register'
      onClick={() => handleSendOTP()}
      buttonTitle='Register'
      accTitle="Already got an account?"
      subClick={() => navigation.navigate('sign-in')}
      subTitle='Sign In'
    >
      <TextInput
        mode='flat'
        label='Phone'
        value={phone}
        maxLength={8}
        textColor='#db2777'
        onChangeText={setPhone}
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
        value={password}
        textColor='#db2777'
        secureTextEntry={true}
        underlineColor='#db2777'
        onChangeText={setPassword}
        activeUnderlineColor='#db2777'
        style={tw`w-80 h-14 bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal`}
        theme={{ 
          colors: { 
            onSurfaceVariant: '#db2777' 
          } 
        }}
      />
      <TextInput
        mode='flat'
        value={cpassword}
        textColor='#db2777'
        secureTextEntry={true}
        label='Confirm Password'
        underlineColor='#db2777'
        onChangeText={setCPassword}
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
