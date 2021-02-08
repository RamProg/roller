import React, { useState } from 'react'
import { getFirestore } from '../firebase'

export const ResultContext = React.createContext([]);

export const Context = ({ children }) => {
    const [result, setResult] = useState(0)
    const [previous, setPrevious] = useState([0, 0,0])

    const db = getFirestore()

    function addPrevious(novo) {
        setPrevious([novo, ...previous])
        console.log("voy a guardar en la base")
        db.collection("rolls").doc().set({
            date: new Date(),
            player: "rama",
            result: novo,
        })
            .then(() => {
                console.log("Roll added");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }


    return (
        <ResultContext.Provider value={[result, setResult, previous, addPrevious]}>
            {children}
        </ResultContext.Provider>
    )
}