const { motion } = require("framer-motion");

const Square = ({ controls, alreadyFinish, duration, step, description }) => {
  const variants = {
    start: {
      backgroundColor: "#C3002F",
      transition: { duration: duration },
    },
    initial: { backgroundColor: "#ccc" },
  };

  return (
    <motion.div
      initial={"initial"}
      // variants={variants}
      animate={{
        backgroundColor: "#C3002F",
        transition: { duration: duration },
      }}
      className="flex flex-col aspect-square text-white rounded-2xl shadow-lg items-center justify-center p-5"
    >
      <div className="flex items-center justify-end w-full">
        <p>{step}</p>
      </div>
      <p className="flex-1 flex items-center justify-center">{description}</p>
    </motion.div>
  );
};

export default Square;
