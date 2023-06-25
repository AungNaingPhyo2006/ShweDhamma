import AssetSource from '../utils/AssetSource';

export const patthana = {
  id: '1',
  url: require('../assets/mpThree/pathana.mp3'), // Load media from the app bundle
  title: 'ပဌာန်း ဒေသနာတော်',
  artist: 'မဟာကန်ပတ်လည် ဆရာတော်',
  album: 'Patthana',
  genre: 'Rock',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: AssetSource.image4, // Load artwork from the network
  duration: 1365.028,
};
