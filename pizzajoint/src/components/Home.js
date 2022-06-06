import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { buttonVariants } from '../animations/Animations';


const Home = () => {

  return (
    <motion.div className="home container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 0.5, duration: 0.5}}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;