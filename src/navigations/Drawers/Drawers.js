import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeStack from '../../stacks/HomeStack';
import GeneralStack from '../../stacks/GeneralStack';
import SettingStack from '../../stacks/SettingStack';

const Tab = createMaterialTopTabNavigator();

const Drawers = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen name="ပဌာန်း" component={HomeStack} />
        <Tab.Screen name="ပုတီးစိပ်မည်" component={GeneralStack} />
        <Tab.Screen name="ဗဟုသုတ" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
