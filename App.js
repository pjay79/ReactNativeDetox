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
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions} testID="instructions">
          To get started, edit App.js
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
    textAlign: 'center',
    margin: 10,
  },
});
