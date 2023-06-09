import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
function Box1() {
  const[isAnimating, setIsAnimating]= useState(false)
  const[isX, setIsX]= useState(false)
  const[isVisible, setIsVisible] = useState(false)
  const call = () => {
    setIsAnimating(true);
    setIsX(true)
    setIsVisible(true)
  }
  const reCall = () => {
    setIsAnimating(false);
    setIsX(false)
    setIsVisible(false)
    console.log("hi");
  }
  
  return (
    <div className="container">
        <motion.div
        className='box'
        animate={{
          x:isAnimating ? 1020 : 0,
          opacity:isAnimating? 1 : 0.5,
          rotate:isAnimating? 360 : 0,
          borderRadius: isAnimating? 100 :0,
        }}
        initial={{
          opacity:0.5,
          borderRadius:0,
        }}
        transition={{
          type: "spring",
          stiffness:30,
          damping:20, 
        }}
        onClick={call}
       
        >
          {isX?`🐒`: `Click Here Bitch`}
          <motion.div  onClick={reCall} animate={{
          }} className={isVisible?'show' : 'hide'}> Now DoubleClick dumbass</motion.div>
        </motion.div>
    </div>
  )
}

export default Box1