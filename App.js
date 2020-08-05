import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import Product from './src/pages/Product';
import Cart from './src/pages/Cart';

const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={true} />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
