import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Layout from './pages/Layout';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/base' element={<Base addBase={addBase} pizza={pizza} />}/>
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;