import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerVariants, nextVariants, buttonVariants} from '../animations/Animations';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;