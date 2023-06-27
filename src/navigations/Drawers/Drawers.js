import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeStack from '../../stacks/HomeStack';
import GeneralStack from '../../stacks/GeneralStack';
import SettingStack from '../../stacks/SettingStack';
import {isUnicode} from 'react-native-mdetect';
import {
  convertUnicodeToZawgyi,
  convertZawgyiToUnicode,
} from '../../utils/FontConverter';

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
                {!isUnicode ? `ပဌာန္း` : convertZawgyiToUnicode(`ပဌာန္း`)}

                {/* {isUnicode ? convertZawgyiToUnicode(`ပဌာန္း`) : `ပဌာန္း`} */}
                {/* {isUnicode ? `ပဌာန်း` : 'ပဌာန္း'} */}
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
                {!isUnicode
                  ? `ပုတီးစိပ္မည္`
                  : convertZawgyiToUnicode(`ပုတီးစိပ္မည္`)}
                {/* {isUnicode ? `ပုတီးစိပ်မည်` : 'ပုတီးစိပ္မည္'} */}
                {/* {isUnicode
                  ? convertZawgyiToUnicode(`ပုတီးစိပ္မည္`)
                  : `ပုတီးစိပ္မည္`} */}
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
                {!isUnicode ? `ဗဟုသုတ` : convertZawgyiToUnicode(`ဗဟုသုတ`)}

                {/* {isUnicode ? `ဗဟုသုတ` : `ဗဟုသုတ`} */}
                {/* {isUnicode ? convertZawgyiToUnicode(`ဗဟုသုတ`) : `ဗဟုသုတ`} */}
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
