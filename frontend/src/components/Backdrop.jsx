import { motion } from "framer-motion";

export default function Backdrop({children, onClick}) {
    return (
        <motion.div 
            className="backdrop center"
            onClick={onClick}
            inherit={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}
