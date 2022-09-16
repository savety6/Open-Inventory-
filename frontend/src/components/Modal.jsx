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

export default function Modal({handleClose, text}) {
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

            </motion.div>
        </Backdrop>
    )
}
