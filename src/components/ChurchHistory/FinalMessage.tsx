import { motion, useTransform } from "framer-motion"
import { FinalMessageProps } from "./types"

export const FinalMessage = ({ title, verse, reference, scrollYProgress }: FinalMessageProps & { scrollYProgress: any }) => {
  const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0.85, 1], [30, 0])

  return (
    <motion.div 
      className="mt-32 md:mt-40 pt-12 pb-20 text-center bg-neutral-50 rounded-xl p-8 md:p-12 shadow-sm border border-neutral-200 mx-auto max-w-4xl"
      style={{
        opacity,
        y
      }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
        {title}
      </h3>
      <div className="h-px w-24 bg-neutral-300 mx-auto mb-6" />
      <p className="text-sm sm:text-base md:text-lg text-neutral-600 italic">
        {verse}
      </p>
      <p className="mt-4 text-neutral-500">{reference}</p>
    </motion.div>
  )
}