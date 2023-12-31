import tw from 'twrnc'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import OtpVerify from '../../../../components/otpVerify'

const OtpVerification = ({ route, navigation }) => {
  const { confirmation, phone } = route.params  
  const [ code, setCode ] = useState('');

  const confirmCode = async () => { 
    try {
      await confirmation.confirm(code);
      console.log(confirmation)
      navigation.navigate('account-success')
      console.log('Phone number confirmed!');
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  
  return (
    <OtpVerify 
      title='OTP Verification'
      description={`An 4 digit code has been sent to ${phone}`}
      codeTitle='Didn’t get the code?'
      onClick={() => confirmCode()}
      sendTitle='Resend'
      secondTitle='In 60 second(s)'
      buttonTitle='Submit'
    >
      <TextInput
        value={code}
        maxLength={6}
        mode='outlined'
        placeholder='OTP'
        textColor='#db2777'
        onChangeText={setCode}
        keyboardType='numeric'
        outlineColor='#db2777'
        activeOutlineColor='#db2777'
        placeholderTextColor='#db2777'
        style={tw`w-72 h-14 text-center bg-transparent text-sm font-sans font-semibold not-italic self-center leading-normal`}
      />
    </OtpVerify>
  )
}

export default OtpVerification