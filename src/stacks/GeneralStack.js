import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GeneralScreen from '../screens/general/General';

const Stack = createStackNavigator();
const GeneralStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Generals" component={GeneralScreen} />
    </Stack.Navigator>
  );
};

export default GeneralStack;

const styles = StyleSheet.create({});
