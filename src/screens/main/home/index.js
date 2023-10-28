import tw from 'twrnc'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import Categories from '../../../components/categories'
import Cardslider from '../../../components/cardslider'

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <Text style={tw`text-2xl text-[#d97706] font-medium py-10 self-center`}>
        Delicious <Text style={tw`text-[#db2777]`}>food</Text> <Text style={tw`text-[#ca8a04]`}>for</Text> <Text style={tw`text-[#ea580c]`}>you</Text>
      </Text>
      <Searchbar
        placeholder='Search'
        style={tw`w-96 self-center bg-transparent rounded-[28px] border border-[#d97706]`}
        placeholderTextColor='#db2777'
        icon={() => (
          <Image
            style={[tw`h-7 w-7 self-center`,{tintColor: '#ca8a04'}]}
            source={require('../../../assets/icons/Search.png')}
          />
        )}
      />
      <Text 
        style={tw`text-[#6b7280] py-2.5 text-xl font-medium my-2.5 ml-5`}
      >
        Categories
      </Text>
      <Categories/>
      <TouchableOpacity
        onPress={() => console.log('Pressed')}
      >
        <Text 
          style={tw`text-[#db2777] py-2.5 text-sm font-medium my-2.5 ml-5`}
        >
          See more
        </Text>
      </TouchableOpacity>
      <Cardslider/>
    </View>
  )
}

export default HomeScreen
