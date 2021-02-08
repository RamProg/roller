import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ResultContext } from '../../../context/ResultContext'
import PreviousResult from '../PreviousResult/PreviousResult'


export default function Result() {
    const [result, setResult] = useContext(ResultContext)

    return (
        <View style={styles.container}>
            <View style={styles.col1}>
                <View >
                    <PreviousResult size={30} number={1} />
                    <View style={styles.children2}>
                        <PreviousResult size={15} number={2} />
                    </View>
                </View>
            </View>
            <View style={styles.col2}>
                <Text style={styles.resultDisplay}>
                    {result}
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    col1: {
        position: 'relative',
        top: 100,
        right: 50,
    },
    resultDisplay: {
        fontSize: 75,
    },
    children2: {
        position: 'relative',
        bottom: 30,
        right: 40,
    }
});
