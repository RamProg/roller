import React from 'react';
import { StyleSheet, View } from 'react-native';
import Result from './Result/Result'
import PreviousResult from './PreviousResult/PreviousResult'

export default function ResultContainer() {

    return (
        <View style={styles.resultContainer}>
            <View style={{ flexDirection: 'row' }}>
                <PreviousResult size={15} number={1} marginB={40} />
                <PreviousResult size={30} number={0} marginB={30}/>
                <Result />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    resultContainer: {
        flex: 5,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },

});
