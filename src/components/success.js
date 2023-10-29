import tw from 'twrnc';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { Image, View } from 'react-native';

const Success = ({ title, onClick, buttonTitle }) => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`py-32`}>
        <Image 
          style={[tw`h-32 w-32 self-center`,{
            resizeMode: 'contain',
          }]}
          source={require('../assets/icons/Correct.png')}
        />
        <Text style={tw`text-2xl font-sans text-[#db2777] font-semibold not-italic self-center leading-normal py-4`}>
          {title}
        </Text>
        <Button
          mode='contained'
          onPress={onClick}
          style={tw`w-80 h-14 bg-[#db2777] rounded-7 self-center justify-center inset-x-0 top-80`}
        >
        <Text style={tw`text-xl font-sans text-white font-bold text-center not-italic leading-normal`}>
          {buttonTitle}
        </Text>
      </Button>
      </View>
    </View>
  )
}

export default Success