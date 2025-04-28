import { motion } from "framer-motion";

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-20"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900">
        NOSSA HISTÓRIA
      </h2>
      <div className="mt-4 h-1 w-20 bg-neutral-900 mx-auto rounded-full"></div>
    </motion.div>
  );
}
