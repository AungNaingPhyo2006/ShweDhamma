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
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarLabel: ({focused, color, style}) => (
              <Text
                style={[
                  style,
                  {
                    color: focused ? 'blue' : 'black', // Set the desired font color
                    fontWeight: 'bold', // Set the desired font weight
                  },
                ]}>
                ပဌာန်း
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="general"
          component={GeneralStack}
          options={{
            tabBarLabel: ({focused, color, style}) => (
              <Text
                style={[
                  style,
                  {
                    color: focused ? 'blue' : 'black', // Set the desired font color
                    fontWeight: 'bold', // Set the desired font weight
                  },
                ]}>
                ပုတီးစိပ်မည်
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="setting"
          component={SettingStack}
          options={{
            tabBarLabel: ({focused, color, style}) => (
              <Text
                style={[
                  style,
                  {
                    color: focused ? 'blue' : 'black', // Set the desired font color
                    fontWeight: 'bold', // Set the desired font weight
                  },
                ]}>
                ဗဟုသုတ
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
