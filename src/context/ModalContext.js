import React, { useState } from 'react'

const ModalContext = React.createContext([{}, () => {}])

const ModalProvider = ({ children }) => {
    const [state, setState] = useState({})
    return (
        <ModalContext.Provider value={[state, setState]}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }