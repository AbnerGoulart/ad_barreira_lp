import { motion } from "framer-motion";

export function Timeline({ year, title, description, imageX, textX, opacity, reverse = false }) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center min-h-[400px] md:min-h-[500px]"`}>
      <motion.div 
        className="md:w-1/2 md:px-12 mb-6 md:mb-0"
        style={{ x: imageX, opacity }}
      >
        <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
          {/* Ícone ou imagem */}
          <svg className="w-16 h-16 md:w-20 md:h-20 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </motion.div>

      <motion.div 
        className="md:w-1/2 md:px-12"
        style={{ x: textX, opacity }}
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-neutral-200 text-neutral-900 mb-3">
          {year}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
