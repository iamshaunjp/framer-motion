import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, childVariants} from '../animations/Animations';

const Order = ({ pizza }) => {
  console.log(pizza.toppings);
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"      
    >
      {pizza.toppings.length > 0 ? (
        <div>
          <h2>Thank you for your order</h2>
          <motion.p
            variants={childVariants}
          >You ordered a {pizza.base} pizza with:</motion.p>

          {pizza.toppings.map(topping => 
          <motion.div key={topping}
            variants={childVariants}
          >{topping}</motion.div>)}
        </div>
      ) : (
        <h2> Why you havent ordered anything? :(</h2>
      )
      }
    </motion.div>
  )
}

export default Order;