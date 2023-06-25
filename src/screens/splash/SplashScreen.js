import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssetSource from '../../utils/AssetSource';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Image source={AssetSource.buddha} style={{width: 260, height: 400}} />
      <View>
        <Text style={{color: 'pink', fontSize: 12}}>
          Developed by Aung Naing Phyo(SGB)
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
