import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { useQuery } from 'react-query'
import axios from 'axios'
import {useStateContext} from './context'

import View from './components/View'
import Box from './components/Box'
import Modal from './components/Modal'
function App() {
    const [modal, setModal] = useState(false)
    const [mode, setMode] = useState('item')

    const {data, status} = useQuery('firstFech', async ()=>{
        try {
            const response = await axios.get('http://localhost:3000/get-collection-by-name', { name: "First Colection" })
            return response.data
        } catch (error) {
            console.log(error)
        }  
    })
    
    async function postNewItem(){
        try {
            const response = await axios.post('http://localhost:3000/new-colection', {
                name: 'new Item',
                description: 'new Item description',
                img: 'img',
                created_at: new Date(Date.now()),
                perentColections: []
            })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const close = () => setModal(false)
    const open = () => setModal(true) 

    if (status === 'loading') {
        return <div>Loading...</div>
    }
    if (status === 'error') {
        return <div>Error</div>
    }

    return (
        <>
            <div className="App">
                    <div className="view" >
                        {data.items && data.items.map((items , index) => <Box key={index}></Box> )}  
                        <motion.div whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} className="box center" onClick={()=> {
                            setMode('item')
                            modal ? close() : open()
                        }}>
                            <p className='text'>+Add Item</p>
                        </motion.div>
                        <motion.div whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} className="box center" onClick={()=> {
                            setMode('collection')
                            modal ? close() : open()
                        }}>
                            <p className='text'>+Add Colection</p>
                        </motion.div>
                    </div>

                {modal && <Modal modal={modal} handleClose={close} mode={mode}/>}
            </div>
        </>
    )
}

export default App
