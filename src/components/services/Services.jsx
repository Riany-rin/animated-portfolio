import "./services.scss"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>I focus on helping your brand grow
        <br/>
        and move forward</p><hr/>
      </div>
      <div className="titleContainer">
        <div className="title">
            <img src="/people.webp" alt="people picture" />
            <h1>
                <b>Unique</b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <b>For Your</b> Business.
            </h1>
            <button>WHAT WE DO?</button>
        </div>
      </div>
      <div className="listContainer">
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
                libero enim nisi aliquam consectetur expedita mani eius ex corrupti 
                animi! Ad nam pariatur assumenda quae mollitia libero repellat 
                explicabo maiores?
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
                libero enim nisi aliquam consectetur expedita mani eius ex corrupti 
                animi! Ad nam pariatur assumenda quae mollitia libero repellat 
                explicabo maiores?
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
                libero enim nisi aliquam consectetur expedita mani eius ex corrupti 
                animi! Ad nam pariatur assumenda quae mollitia libero repellat 
                explicabo maiores?
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum 
                libero enim nisi aliquam consectetur expedita mani eius ex corrupti 
                animi! Ad nam pariatur assumenda quae mollitia libero repellat 
                explicabo maiores?
            </p>
            <button>Go</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
