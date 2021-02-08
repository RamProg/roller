import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, View, ActivityIndicator } from 'react-native'
// import { Context } from '../../context/ResultContext'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { getFirestore } from '../../firebase'


export default function HistoryContainer() {

    const LIMITE = 10
    const tableHead = ['Player', 'Time', 'Roll']
    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(true)

    let matrix = []

    function addData(player, date, result) {
        matrix.push([player, date, result])
        setTableData([...matrix])
    }


    useEffect(() => {
        const db = getFirestore()
        const rollsCollection = db.collection("rolls").orderBy('date', 'desc').limit(LIMITE)
        rollsCollection.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    addData(doc.data().player, doc.data().date.toDate().toLocaleTimeString('ar-ES'), doc.data().result);
                })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
            .finally(() => {
                setLoading(false)
                console.log(tableData.length)
            })
    }, [loading])

    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator size="large" color="#0000ff" />
                :
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={tableData} textStyle={styles.text} />
                </Table>
            }

            <Button onPress={() => setLoading(true)} title="Update"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: 'lightgrey',
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});
