import tw from 'twrnc'
import React from 'react'
import HomeScreen from '../screens/main/home'
import { Image, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        headerTitle:'',
        headerLeft: () => (
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image 
              style={[tw`w-9 h-9 ml-4`, {tintColor:'#6b7280'}]}
              source={require('../assets/icons/Menu.png')}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <Image 
              style={[tw`w-9 h-9 mr-4`, {tintColor:'#6b7280'}]}
              source={require('../assets/icons/Cart.png')}
            />
          </TouchableOpacity>
        ),
      }}
    
    >
      <Tab.Screen
        name='Home'
        component={ HomeScreen }
        options={{
          tabBarIcon: () => (
            <Image
              resizeMode='contain'
              source={require('../assets/icons/Home.png')}
              style={[tw`w-7, h-7`, {tintColor: '#db2777'}]}
            />
          )
        }}  
      />
    </Tab.Navigator>
  )
}

export default HomeNavigator
