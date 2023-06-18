import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {videoIds} from './VideoData';
import VideoViewer from './VideoViewer';

const VideoScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: 50, height: 50}}>
        <Text>Hello i am Video Screen</Text>
      </View>

      {/* <VideoViewer videoIds={videoIds} /> */}

      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
