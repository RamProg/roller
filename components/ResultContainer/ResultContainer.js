import React from 'react';
import { StyleSheet, View } from 'react-native';
import Result from './Result/Result'

export default function ResultContainer() {

    return (
        <View style={styles.resultContainer}>
            <Result />
        </View >
    );
}

const styles = StyleSheet.create({

    resultContainer: {
        flex: 5,
        justifyContent: 'flex-end',
        marginBottom: 30,
    },


});
