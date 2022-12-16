import React from 'react'
import { motion } from "framer-motion";
import Backdrop from './Backdrop'

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition:{
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
}

export default function Modal({handleClose, mode}) {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e)=>e.stopPropagation()}
                className="modal center"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {mode === 'item' ? 
                    <div className='list'>
                        <h1 >Add new Item!</h1> 
                        <div className='list'>
                            <input type="text" placeholder='name'/>
                            <input type="text" placeholder='description'/>
                        </div>
                    </div>
                : 
                    <h1>Add new Colection!</h1>
                } 
            </motion.div>
        </Backdrop>
    )
}
