import React, { useState } from 'react'

export const ResultContext = React.createContext([]);

export const Context = ({ children }) => {
    const [result, setResult] = useState(0)
    const [previous, setPrevious] = useState([0,0])

    function addPrevious(novo) {
        setPrevious([novo, ...previous])
    }


return (
    <ResultContext.Provider value={[result, setResult, previous, addPrevious]}>
        {children}
    </ResultContext.Provider>
)
}