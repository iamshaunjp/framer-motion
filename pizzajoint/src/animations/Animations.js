export const containerVariants =  {
    hidden: {
      opacity: 0,
      x: `100vw`
    }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
      }
    } 
  }

export const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  }
}

export const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export const buttonVariants = {
  hover: {
    opacity: 1, 
    scale: 1.1,
    textShadow: "0px 0px 8px #902121",
    boxShadow: "0px 0px 8px #902121"
  },
}