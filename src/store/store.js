import React, { useContext, useState, createContext, useMemo } from 'react'

function makeStore() {

    //Lets create the context
    const context = createContext();

    //Create Provider to wrap our app in, it will take an intial value
    const Provider = ({ initialValue = {}, children }) => {
        const [state, setState] = useState(initialValue);
        //Can memoize here if needed
        const contextValue = useMemo(() => [state, setState], [state]);
        //Provide the store to children
        return <context.Provider value={contextValue}>{children}</context.Provider>
    }

    //A hook to help consume the store, can add some logic to handle state seperately from each other
    const useStore = () => useContext(context);

  return [ Provider, useStore ];
}

export const [ Provider, useStore ] = makeStore();