import TrackPlayer, {RepeatMode} from 'react-native-track-player';

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

export const myTracks = [
  {
    url: require('../assets/mpThree/pathana.mp3'), // Load media from the app bundle
    title: 'PaThaNa Dhamma',
    artist: 'MaHarKanPatLel Sayardaw',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg', // Load artwork from the network
    duration: 1365.028,
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
    title: 'Happy Rock',
    artist: 'Benjamin Tissot',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/happyrock.jpg', // Load artwork from the network
    duration: 105, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
    title: 'Punky',
    artist: 'Benjamin Tissot',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/punky.jpg',
    duration: 126, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3',
    title: 'Actionable',
    artist: 'Benjamin Tissot',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/actionable.jpg',
    duration: 122, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3',
    title: 'Romantic',
    artist: 'Benjamin Tissot',
    album: "Bensound's Jazz",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/romantic.jpg',
    duration: 236, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-allthat.mp3',
    title: 'All That',
    artist: 'Benjamin Tissot',
    album: "Bensound's Jazz",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/allthat.jpg',
    duration: 146, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    title: 'Love',
    artist: 'Benjamin Tissot',
    album: "Bensound's Jazz",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/love.jpg',
    duration: 335, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    title: 'Dreams',
    artist: 'Benjamin Tissot',
    album: "Bensound's Electronica",
    genre: 'Electronica',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
    duration: 310, // Duration in seconds
  },
  {
    url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
    title: 'Love',
    artist: 'Benjamin Tissot',
    album: "Bensound's Electronica",
    genre: 'Electronica',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
    duration: 177, // Duration in seconds
  },
];
