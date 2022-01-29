import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from 'containers';
import {KittenDetails} from 'containers/Home/components';
import {navigationConstants} from './constants';

const Stack = createNativeStackNavigator();
const {HOME_STACK} = navigationConstants;

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_STACK.HOME} component={Home} />
      <Stack.Screen
        name={HOME_STACK.KITTEN_DETAILS}
        component={KittenDetails}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HOME_STACK'} component={HomeStack} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
