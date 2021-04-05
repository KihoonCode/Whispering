import React from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

import Navigator from './navigation/Navigator';

enableScreens();

export default function App() {
  
  return (
      <Navigator />
  );
}

const styles = StyleSheet.create({

});
