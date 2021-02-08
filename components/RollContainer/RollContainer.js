import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DiceContainer from '../DiceContainer/DiceContainer'
import { Context } from '../../context/ResultContext'
import ResultContainer from '../ResultContainer/ResultContainer'

export default function RollContainer() {

  return (
    <View style={styles.container}>
      <Context>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Press the button to roll the dice:</Text>
        </View>

        <DiceContainer sytle={{ flex: 5 }} />
        <ResultContainer sytle={{ flex: 1 }} />
      </Context>
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
