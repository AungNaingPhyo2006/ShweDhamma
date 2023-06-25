import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Player from '../player/Player';
import {patthana} from '../../dataBank/Tracks';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}></View>
      <Player mytrack={patthana} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
