import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GeneralScreen from '../screens/general/General';
import SettingScreen from '../screens/settings/SettingScreen';

const Stack = createStackNavigator();
const GeneralStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default GeneralStack;

const styles = StyleSheet.create({});
