import tw from 'twrnc';
import React from 'react';
import { View } from 'react-native';
import RootNavigator from './navigations';

const App = () => {
  return(
   <View style={tw`flex-1`}>
      <RootNavigator/>
    </View>
  )
}

export default App