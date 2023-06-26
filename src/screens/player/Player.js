import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {
  PauseCircle,
  PlayCircle,
  RefreshCcw,
  RefreshCw,
  Speaker,
} from 'lucide-react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import AssetSource from '../../utils/AssetSource';

export default class PlayerScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      playState: 'paused', //playing, paused
      playSeconds: 0,
      duration: 0,
    };
    this.sliderEditing = false;
  }

  componentDidMount() {
    this.play();

    this.timeout = setInterval(() => {
      if (
        this.sound &&
        this.sound.isLoaded() &&
        this.state.playState == 'playing' &&
        !this.sliderEditing
      ) {
        this.sound.getCurrentTime((seconds, isPlaying) => {
          this.setState({playSeconds: seconds});
        });
      }
    }, 100);
  }
  componentWillUnmount() {
    if (this.sound) {
      this.sound.release();
      this.sound = null;
    }
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  onSliderEditStart = () => {
    this.sliderEditing = true;
  };
  onSliderEditEnd = () => {
    this.sliderEditing = false;
  };
  onSliderEditing = value => {
    if (this.sound) {
      this.sound.setCurrentTime(value);
      this.setState({playSeconds: value});
    }
  };

  play = async () => {
    if (this.sound) {
      this.sound.play(this.playComplete);
      this.setState({playState: 'playing'});
    } else {
      const mySong = require('../../assets/mpThree/pathana.mp3');

      this.sound = new Sound(mySong, error => {
        if (error) {
          // console.log('failed to load the sound', error);
          // Alert.alert('Notice', 'audio file error. (Error code : 1)');
          this.setState({playState: 'paused'});
        } else {
          this.setState({
            playState: 'playing',
            duration: this.sound.getDuration(),
          });
          this.sound.play(this.playComplete);
        }
      });
    }
  };
  playComplete = success => {
    if (this.sound) {
      this.setState({playState: 'paused', playSeconds: 0});
      this.sound.setCurrentTime(0);
    }
  };

  pause = () => {
    if (this.sound) {
      this.sound.pause();
    }

    this.setState({playState: 'paused'});
  };

  jumpPrev15Seconds = () => {
    this.jumpSeconds(-15);
  };
  jumpNext15Seconds = () => {
    this.jumpSeconds(15);
  };
  jumpSeconds = secsDelta => {
    if (this.sound) {
      this.sound.getCurrentTime((secs, isPlaying) => {
        let nextSecs = secs + secsDelta;
        if (nextSecs < 0) nextSecs = 0;
        else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
        this.sound.setCurrentTime(nextSecs);
        this.setState({playSeconds: nextSecs});
      });
    }
  };

  getAudioTimeString(seconds) {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt((seconds % (60 * 60)) / 60);
    const s = parseInt(seconds % 60);

    return (
      (h < 10 ? '0' + h : h) +
      ':' +
      (m < 10 ? '0' + m : m) +
      ':' +
      (s < 10 ? '0' + s : s)
    );
  }

  render() {
    const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
    const durationString = this.getAudioTimeString(this.state.duration);

    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: 'blue'}}>
        <Image
          source={AssetSource.buddha}
          style={{width: 200, height: 300, alignSelf: 'center'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 15,
          }}>
          <TouchableOpacity
            onPress={this.jumpPrev15Seconds}
            style={{justifyContent: 'center', marginHorizontal: 9}}>
            <RefreshCcw size={45} color="#fff" />
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 1,
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              -
            </Text>
          </TouchableOpacity>
          {this.state.playState == 'playing' && (
            <TouchableOpacity
              onPress={this.pause}
              style={{marginHorizontal: 20}}>
              <PauseCircle size={48} color="#fff" />
            </TouchableOpacity>
          )}
          {this.state.playState == 'paused' && (
            <TouchableOpacity
              onPress={this.play}
              style={{marginHorizontal: 20}}>
              <PlayCircle size={48} color="#fff" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={this.jumpNext15Seconds}
            style={{justifyContent: 'center', marginHorizontal: 9}}>
            <RefreshCw size={45} color="#fff" />
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 1,
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>
            {currentTimeString}
          </Text>
          <Slider
            onSlidingStart={this.onSliderEditStart}
            onSlidingComplete={this.onSliderEditEnd}
            onValueChange={this.onSliderEditing}
            value={this.state.playSeconds}
            maximumValue={this.state.duration}
            maximumTrackTintColor="gray"
            minimumTrackTintColor="white"
            thumbTintColor="white"
            style={{
              flex: 1,
              alignSelf: 'center',
              marginHorizontal: Platform.select({ios: 5}),
            }}
          />
          <Text style={{color: 'white', alignSelf: 'center'}}>
            {durationString}
          </Text>
        </View>
      </View>
    );
  }
}
