import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Landing({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Player Name:</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
      />
      <Text>Game Name:</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
      />
      <Button title={'Join!'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
