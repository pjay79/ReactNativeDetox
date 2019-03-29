import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default class App extends Component {
  state = {
    color: 'red',
  };

  setColor = () => {
    this.setState({ color: 'blue' });
  };

  render() {
    const { color } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID="welcome">
          React Native + Detox
        </Text>
        <Text style={styles.instructions} testID="instructions">
          Write tests in the e2e folder.
        </Text>
        <Button title="Start" onPress={this.setColor} color={color} testID="button-start" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
});
