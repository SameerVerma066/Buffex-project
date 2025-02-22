import React from "react";
import { motion } from "framer-motion";

export const TextEffect = ({ children, per = "char", delay = 0, variants }) => {
  // Ensure children is treated as a string for splitting purposes
  let splitText;

  if (typeof children === "string") {
    // Split into characters
    splitText = children.split("");
  } else {
    // If children are React elements or contain markup, wrap them in a span
    splitText = React.Children.toArray(children);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants?.container}
      transition={{ delay }}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={variants?.item}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
