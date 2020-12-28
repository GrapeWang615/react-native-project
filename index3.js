/** @format 
 * createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. 
 * Both of them are React components used for configuring the navigator. The Navigator should contain Screen 
 * elements as its children to define the configuration for routes.
 *
 * NavigationContainer is a component which manages our navigation tree and contains the navigation state. 
 * This component must wrap all navigators structure. Usually, we'd render this component at the root of our app,
 * which is usually the component exported from App.js.
 * 
 * @react-navigation/stack depends on @react-native-community/masked-view
*/

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {App3_1,App3_2} from "./App3";

const Stack = createStackNavigator();

function App3() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App3_1" component={App3_1} />
        <Stack.Screen name="App3_2" component={App3_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("MyReactNativeApp3", () => App3);