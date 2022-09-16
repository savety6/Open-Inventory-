import { useStateContext } from "../context";
import { motion } from "framer-motion";
export default function View({children}) {
    const {state, setState} = useStateContext()
    return (
        <div className="view">
            {children}
            <motion.div whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} className="box center" onClick={()=>console.log('add')}>
                <p className='text'>+</p>
            </motion.div>
        </div>
    )
}
