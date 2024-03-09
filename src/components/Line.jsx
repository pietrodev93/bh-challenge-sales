import {motion} from "framer-motion";

const Line = ({ controls, duration }) => {
    const style = {
      background: "#ccc",
      width: "80px",
      height: "3px"
    };
  
    const variants = {
      start: {
        width: "80px",
        backgroundColor: "#C3002F",
        transition: { duration: duration }
      },
      initial: { width: 0 }
    };
  
    return (
      <div style={style}>
        <motion.div
          style={{ height: "3px" }}
          initial={"initial"}
          variants={variants}
          animate={controls}
        ></motion.div>
      </div>
    );
  };

  export default Line;