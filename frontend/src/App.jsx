import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import View from './components/View'
import Box from './components/Box'
import Modal from './components/Modal'
function App() {
    const [fetchtData, setFetchtData] = useState(null)
    const [modal, setModal] = useState(false)

    const close = () => setModal(false)
    const open = () => setModal(true) 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/api')
                const data = await response.json()
                setFetchtData(data)
            } catch (error) {
                console.log(error)
            }   
        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <div className="view">
                <motion.div whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} className="box center" onClick={()=> modal ? close() : open()}>
                    <p className='text'>+</p>
                </motion.div>
            </div>
            {modal && <Modal modal={modal} handleClose={close}/>}
        </div>
    )
}

export default App
