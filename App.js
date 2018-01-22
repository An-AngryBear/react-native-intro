import React from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image
} from 'react-native';

import GameUI from './components/game-ui.js';
import Level1 from './components/level1.js';

export default class App extends React.Component {

  render() {
    return (

      <View style={styles.container}>
        <Level1>
        </Level1>
        <GameUI>
        </GameUI>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});





AppRegistry.registerComponent('App', () => App);