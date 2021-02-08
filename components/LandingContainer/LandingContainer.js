import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Landing from './Landing/Landing'

export default function LandingContainer({navigation}) {

  return (
    <View style={styles.container}>
      <Landing navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
});
