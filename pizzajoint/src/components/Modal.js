import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    },
}

const modal = {
    hidden: {
        y: '-100vh', opacity: 0
    },
    visible: {
        y: '200px', opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}
const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter >
            {
                showModal && (<motion.div className='backdrop' variants={backdrop} initial="hidden" exit={'hidden'} animate={'visible'}>
                    <motion.div className='modal' variants={modal}>
                        <p>Do you want another pizza!</p>
                        <Link to={'/'}>
                            <button >Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>)
            }

        </AnimatePresence>
    );
}
export default Modal;