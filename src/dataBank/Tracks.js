import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import AssetSource from '../utils/AssetSource';

// export async function addTracks(tracks) {
//   // if (!tracks) {
//   //   console.warn('Tracks are not defined.');
//   //   return;
//   // }

//   await TrackPlayer.add(myTracks);
//   // await TrackPlayer.add(tracks.filter(track => !track.url));

//   await TrackPlayer.setRepeatMode(RepeatMode.Queue);

//   TrackPlayer.addEventListener('playback-track-changed', async event => {
//     const duration = await TrackPlayer.getDuration();
//     const position = await TrackPlayer.getPosition();
//     console.log(`Current duration: ${duration}, Current position: ${position}`);
//   });
// }

export const patthana = {
  url: require('../assets/mpThree/pathana.mp3'), // Load media from the app bundle
  title: 'ပဌာန်း ဒေသနာတော်',
  artist: 'မဟာကန်ပတ်လည် ဆရာတော်',
  album: 'Patthana',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetSource.image4, // Load artwork from the network
  duration: 1365.028,
};
