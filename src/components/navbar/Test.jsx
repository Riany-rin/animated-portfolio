import { motion } from "framer-motion"
import { useState } from "react"

const Test = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    visible: {
      opacity:1, 
      x:100, 
      // transition:{type: "spring", stiffness: 100, damping: 100}
    },
    hidden: {opacity:0}
  }

  const items = ["item1", "items2", "items3", "items4"]

  return (
    <div className="course">
        <motion.ul variants={variants} initial="hidden" animate="visible">
          {items.map((item) => (
            <motion.li key={item}>{item}</motion.li>
          ))}
        </motion.ul>
    </div>
  )
}

export default Test
