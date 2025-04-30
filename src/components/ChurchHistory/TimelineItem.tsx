import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TimelineItemProps } from "./types";

export const TimelineItem = ({ year, title, description, imageSide }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between w-full mb-24 min-h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Imagem */}
      <motion.div
        className={`md:w-5/12 ${imageSide === "left" ? "order-1" : "order-2"}`}
        initial={{ x: imageSide === "left" ? -100 : 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="h-64 bg-neutral-200 rounded-xl shadow-lg flex items-center justify-center">
          {/* Imagem mockada */}
          <span className="text-3xl text-neutral-400">Imagem</span>
        </div>
      </motion.div>

      {/* Texto */}
      <motion.div
        className={`md:w-5/12 text-center md:text-left ${imageSide === "left" ? "order-2" : "order-1"}`}
        initial={{ x: imageSide === "left" ? 100 : -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h4 className="text-lg font-bold text-red-800">{year}</h4>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};
