import tw from 'twrnc'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { Image, ScrollView, View } from 'react-native'

const Categories = () => {
  return (
    <View style={tw`flex-row justify-evenly`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          mode='contained'
          contentStyle={{
            height: 100,
          }}
          icon={()=> (
            <Image 
              style={tw`h-9 w-9 mt-0.5`}
              source={require('../assets/icons/Food.png')}
            />
          )}
          style={tw`w-36 h-15 bg-white rounded-[28px] border border-[#d97706] justify-center self-center mx-5`}
          onPress={() => console.log('Pressed')}
        >
          <Text style={tw`text-[#d97706] text-center font-sans text-xl not-italic font-bold leading-normal`}>
            Foods
          </Text>
        </Button>
        <Button
          mode='contained'
          contentStyle={{
            height: 100,
          }}
          icon={()=> (
            <Image 
              style={tw`h-9 w-9 mt-0.5`}
              source={require('../assets/icons/Drink.png')}
            />
          )}
          style={tw`w-36 h-15 bg-white rounded-[28px] border border-[#db2777] justify-center self-center`}
          onPress={() => console.log('Pressed')}
        >
          <Text style={tw`text-[#db2777] text-center font-sans text-xl not-italic font-bold leading-normal`}>
            Drinks
          </Text>
        </Button>
        <Button
          mode='contained'
          contentStyle={{
            height: 100,
          }}
          icon={()=> (
            <Image 
              style={tw`h-9 w-9 mt-0.5`}
              source={require('../assets/icons/Snack.png')}
            />
          )}
          style={tw`w-36 h-15 bg-white rounded-[28px] border border-[#ca8a04] justify-center self-center mx-5`}
          onPress={() => console.log('Pressed')}
        >
          <Text style={tw`text-[#ca8a04] text-center font-sans text-xl not-italic font-bold leading-normal`}>
            Snacks
          </Text>
        </Button>
        <Button
          mode='contained'
          contentStyle={{
            height: 100,
          }}
          icon={()=> (
            <Image 
              style={tw`h-9 w-9 `}
              source={require('../assets/icons/Sauce.png')}
            />
          )}
          style={tw`w-36 h-15 bg-white rounded-[28px] border border-[#ea580c] justify-center self-center mr-5`}
          onPress={() => console.log('Pressed')}
        >
          <Text style={tw`text-[#ea580c] text-center font-sans text-xl not-italic font-bold leading-normal`}>
            Sauces
          </Text>
        </Button>
      </ScrollView>
    </View>
  )
}

export default Categories