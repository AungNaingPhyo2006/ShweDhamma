import React, {useEffect, useState} from 'react';
import {AppRegistry} from 'react-native';

import Drawers from './src/navigations/Drawers/Drawers';
import SplashScreen from './src/screens/splash/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual loading logic
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return <Drawers />;
};

export default App;
