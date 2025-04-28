import { motion } from "framer-motion";

export function FinalMessage({ opacity, y }) {
  return (
    <motion.div 
      className="text-center bg-neutral-50 rounded-xl p-8 md:p-12 shadow-sm border border-neutral-200 mx-auto max-w-4xl mt-32 md:mt-40 pt-12 pb-20"
      style={{ opacity, y }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
        A Igreja é o Corpo de Cristo em movimento
      </h3>
      <div className="h-px w-24 bg-neutral-300 mx-auto mb-6"></div>
      <p className="text-sm sm:text-base md:text-lg text-neutral-600 italic">
        "Eu sei as tuas obras; eis que diante de ti pus uma porta aberta, e ninguém a pode fechar; 
        tendo pouca força, guardaste a minha palavra, e não negaste o meu nome."
      </p>
      <p className="mt-4 text-neutral-500">Apocalipse 3:8</p>
    </motion.div>
  );
}
