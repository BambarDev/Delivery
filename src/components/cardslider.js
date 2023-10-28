import tw from 'twrnc'
import React from 'react'
import { Avatar, IconButton, Text } from 'react-native-paper'
import { ScrollView, TouchableOpacity, View } from 'react-native'

const CardSlider = () => {
  return (
    <View style={tw`flex-row justify-evenly`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
        >
          <View style={tw`bg-[#f3f3f3] my-14 w-40 h-52 self-center items-center rounded-[28px] mx-5`}>
            <Avatar.Image
              size={100}
              style={tw`mt-5 absolute bottom-40 bg-transparent`}
              source={require('../assets/images/Tomato.png')} 
            />
            <Text 
              style={tw`text-center text-black px-4 text-lg font-medium mt-16`}
            >
              Veggie tomato mix 
            </Text>
            <Text 
              style={tw`text-[#ea580c] pt-2 text-base font-medium`}
            >
              Price <Text style={tw`text-lg`}>$4</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
        >
          <View style={tw`bg-[#f3f3f3] my-14 w-40 h-52 self-center items-center rounded-[28px]`}>
            <Avatar.Image 
              size={100}
              style={tw`mt-5 absolute bottom-40 bg-transparent`}
              source={require('../assets/images/Fish.png')}
            />
            <Text 
              style={tw`text-center text-black px-4 text-lg font-medium mt-16`}
            >
              Spicy fish sauce
            </Text>
            <Text 
              style={tw`text-[#ea580c] pt-2 text-base font-medium`}
            >
              Price <Text style={tw`text-lg`}>$2</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
        >
          <View style={tw`bg-[#f3f3f3] my-14 w-40 h-52 self-center items-center rounded-[28px] mx-5`}>
            <Avatar.Image
              size={100}
              style={tw`mt-5 absolute bottom-40 bg-transparent`}
              source={require('../assets/images/Chicken.png')} 
            />
            <Text 
              style={tw`text-center text-black px-4 text-lg font-medium mt-16`}
            >
              Moi-moi and ekpa. 
            </Text>
            <Text 
              style={tw`text-[#ea580c] pt-2 text-base font-medium`}
            >
              Price <Text style={tw`text-lg`}>$3</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
        >
          <View style={tw`bg-[#f3f3f3] my-14 w-40 h-52 self-center items-center rounded-[28px] mr-5`}>
            <Avatar.Image 
              size={100}
              style={tw`mt-5 absolute bottom-40 bg-transparent`}
              source={require('../assets/images/Egg.png')}
            />
            <Text 
              style={tw`text-center text-black px-4 text-lg font-medium mt-16`}
            >
              Egg and cucumber...
            </Text>
            <Text 
              style={tw`text-[#ea580c] pt-2 text-base font-medium`}
            >
              Price <Text style={tw`text-lg`}>$2</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default CardSlider
