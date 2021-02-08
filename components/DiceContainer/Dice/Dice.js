import React, { useContext } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ResultContext } from '../../../context/ResultContext'
import * as Haptics from 'expo-haptics';

export default function Dice({ number }) {


    const [result, setResult, previousResult, addPrevious] = useContext(ResultContext)


    const random = max => {
        // Haptics.selectionAsync()
        const newResult = Math.floor(Math.random() * max + 1)
        setResult(newResult)
        addPrevious(newResult)
    }

    return (
        <TouchableOpacity style={styles.play} onPress={() => random(number)}>
            <Text style={styles.textDice}>{number}</Text>
        </TouchableOpacity>
    );
}

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    play: {
        backgroundColor: '#f2d7d5',
        width: deviceWidth / 2 - 30,
        height: deviceHeight / 6,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 10, // Android
        flexDirection: 'row',
        margin: 10
    },
    textDice: {
        fontSize: 50,
    }
});
