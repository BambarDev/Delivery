import tw from 'twrnc';
import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

const OtpVerify = ({ title, description, children, codeTitle, onTouch, sendTitle, secondTitle, onClick, buttonTitle }) => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`py-10`}>
        <Text style={tw`text-2xl font-sans text-[#db2777] font-semibold text-center not-italic leading-normal`}>
          {title}
        </Text>
        <Text style={tw`text-lg font-sans text-[#6b7280] font-semibold text-center not-italic leading-normal py-3 px-5`}>
          {description}
        </Text>
        <View style={tw`flex flex-row text-center justify-evenly mt-36`}>
          {children}
        </View>
        <Text style={tw`text-base font-sans text-[#6b7280] font-normal text-center not-italic leading-normal pt-3`}>
          {codeTitle} <Text
            onPress={onTouch} 
            style={tw`text-base font-sans text-[#6b7280] font-bold text-center not-italic leading-normal`}
          >
            {sendTitle}
          </Text>
        </Text>
        <Text style={tw`text-base font-sans text-[#6b7280] font-normal text-center not-italic leading-normal`}>
          {secondTitle}
        </Text>
        <Button
          mode='contained'
          style={tw`w-80 h-14 bg-[#db2777] rounded-[28px] self-center justify-center inset-x-0 top-56`}
          onPress={onClick}
        >
          <Text style={tw`text-xl font-sans text-white font-bold not-italic leading-normal`}>
            {buttonTitle}
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default OtpVerify