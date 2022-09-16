import {useState, useContext, createContext } from 'react'

const Context = createContext()

export function useStateContext(){
    return useContext(Context)
}

const defaultState = [{
    id: '',
    code: '',
    key: 'blank-$',
    empty: true,
    service: '',
    write: ''
}]

export default function index({children}) {
    const[state, setState] = useState(defaultState)
    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}
