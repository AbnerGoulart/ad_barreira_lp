import { motion } from "framer-motion";
import { FinalMessageProps } from "./types";

export const FinalMessage = ({ title, verse, reference }: FinalMessageProps) => {
  return (
    <div className="mt-32 md:mt-40 pt-12 pb-20 text-center bg-neutral-50 rounded-xl p-8 md:p-12 shadow-sm border border-neutral-200 mx-auto max-w-4xl">
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <div className="h-px w-24 bg-neutral-300 mx-auto mb-6" />
      <motion.p
        className="text-sm sm:text-base md:text-lg text-neutral-600 italic"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {verse}
      </motion.p>
      <motion.p
        className="mt-4 text-neutral-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        {reference}
      </motion.p>
    </div>
  );
};
