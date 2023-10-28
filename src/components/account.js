import tw from 'twrnc'
import React from 'react'
import { Image, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Account = ({ title, children, passClick, passTitle, onClick, buttonTitle, accTitle, subClick, subTitle }) => {
  return (
    <View style={tw`flex-1`}>
      <Image 
        style={[tw`mt-12 h-40 self-center`, {
          resizeMode:'contain',
          tintColor: '#db2777'
        }]}
        source={require('../assets/images/Logo.png')}
      />
      <Text style={tw`text-2xl font-sans text-[#6b7280] font-normal text-center not-italic leading-normal`}>
        {title}
      </Text>
        {children}
      <Text 
        onPress={passClick}
        style={tw`ml-11 mt-1 text-[#6b7280]`}
      >
        {passTitle}
      </Text>
      <Button
        mode='contained'
        onPress={onClick}
        style={tw`w-80 h-14 bg-[#db2777] rounded-7 self-center justify-center inset-x-0 top-44`}
      >
        <Text style={tw`text-xl font-sans text-white font-bold text-center not-italic leading-normal`}>
          {buttonTitle}
        </Text>
      </Button>
      <Text style={tw`text-base font-sans text-[#6b7280] font-normal text-center not-italic leading-normal inset-x-0 top-44 mt-2`}>
        {accTitle} <Text 
          onPress={subClick}
          style={tw`text-base font-sans text-[#6b7280] font-bold text-center not-italic leading-normal`}        
        >
          {subTitle}
        </Text>
      </Text>
    </View>
  )
}

export default Account
