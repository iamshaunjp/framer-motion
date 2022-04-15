import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5, type: "spring"
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  };

  const nextVariants = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        stiffness: 120, type: "spring"
      }
    }
  }
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
  return (
    <motion.div className="base container" variants={containerVariants} initial="hidden" animate='visible' exit={'exit'}>

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3, color: '#f8e112',
                originX: 0

              }}
              transition={{
                type: 'spring'
                , stiffness: 300
              }}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants} >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover='hover'>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;