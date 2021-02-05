import React, {useContext} from 'react';
import { StyleSheet, Text } from 'react-native';
import { ResultContext } from '../../../context/ResultContext'


export default function Result() {
    const [result, setResult] = useContext(ResultContext)

    return (
        <Text style={styles.resultDisplay}>{result}</Text>
    );
}

const styles = StyleSheet.create({
    resultDisplay: {
        fontSize: 75,
        justifyContent: 'flex-end',
    },

});
