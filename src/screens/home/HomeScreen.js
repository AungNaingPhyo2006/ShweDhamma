import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoScreen from '../../utils/VideoScreen';
import Player from '../player/Player';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text>Hello i am home</Text>
      </View>
      <Player />
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
