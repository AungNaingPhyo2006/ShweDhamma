import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoScreen from '../../utils/VideoScreen';
import Player from '../player/Player';
import {patthana} from '../../dataBank/Tracks';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}></View>
      <Player myTracks={patthana} />
      {/* <Button
        title="Video"
        onPress={() => {
          navigation.navigate('VideoScreen');
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
