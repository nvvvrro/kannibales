import { motion, HTMLMotionProps } from "framer-motion";
import { FC } from "react";

interface Props extends HTMLMotionProps<"div"> {
  className?: string;
}

const loaderVariants = {
  Animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};
export const Loader: FC<Props> = ({ className = "" }) => {
  return (
    <motion.div
      className={`${className} w-[12px] h-[12px] rounded-full bg-btn-dark`}
      variants={loaderVariants}
      animate={"Animation"}
    />
  );
};
