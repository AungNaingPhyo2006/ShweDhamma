import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {myTracks} from '../../dataBank/Tracks';
import {setupPlayer, playbackService} from '../../../Service';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  // console.log(trackDuration);
  const playTrack = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      // await TrackPlayer.reset();
      await TrackPlayer.add(myTracks);
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setupPlayer();
    playbackService();

    const getTrackDuration = async () => {
      const duration = await TrackPlayer.getDuration();
      setTrackDuration(duration);
    };

    const getPosition = async () => {
      const position = await TrackPlayer.getPosition();
      setCurrentPosition(position);
    };

    // Update the current position every second
    const interval = setInterval(getPosition, 1000);

    getTrackDuration();

    return () => {
      clearInterval(interval);
    };
  }, [currentPosition]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainderSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const onSliderValueChange = async value => {
    await TrackPlayer.seekTo(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{myTracks[0].title}</Text>
      <Text style={styles.artist}>{myTracks[0].artist}</Text>

      <View style={styles.controls}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={trackDuration}
          value={currentPosition}
          onValueChange={onSliderValueChange}
        />
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playTrack} />

        <Text style={styles.duration}>
          {formatTime(currentPosition)} / {formatTime(trackDuration)}
        </Text>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artist: {
    fontSize: 18,
    marginBottom: 16,
  },
  controls: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  slider: {
    width: 200,
    height: 40,
    marginBottom: 16,
  },
  duration: {
    fontSize: 16,
  },
});
