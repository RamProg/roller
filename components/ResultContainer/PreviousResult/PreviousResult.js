import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ResultContext } from '../../../context/ResultContext'


export default function PreviousResult({ number, size, marginB }) {
    const [result, setResult, previousResult, addPrevious] = useContext(ResultContext)

    return (
        <View style={styles.resultDisplay}>
            <Text style={{ ...styles.display, fontSize: size, marginBottom: marginB }}>{previousResult[number]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultDisplay: {
        marginRight: 10,
        justifyContent: 'flex-end',
    },
    display: {
        color: 'grey'
    }

});
