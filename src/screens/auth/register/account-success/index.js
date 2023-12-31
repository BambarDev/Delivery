import React from 'react'
import Success from '../../../../components/success'

const AccountSuccess = ({ navigation }) => {
  return (
    <Success 
      title='Welcome to Delivery'
      buttonTitle='Sign In'
      onClick={() => navigation.navigate('sign-in')}
    />
  )
}

export default AccountSuccess