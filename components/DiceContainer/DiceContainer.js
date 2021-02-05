import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dice from './Dice/Dice'

export default function DiceContainer() {

    const dices = [6, 10, 12, 20, 30, 100]

    return (
        <View style={styles.wrapper}>
            <View style={styles.diceContainer}>
                {dices.map(d => <Dice key={d} number={d}></Dice>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    diceContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    }

});
