import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';
const Home = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1, duration: 1
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div className="home container" variants={containerVariants} initial="hidden" animate='visible' exit='exit'>
      <motion.h2 >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        />
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover='hover' >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;