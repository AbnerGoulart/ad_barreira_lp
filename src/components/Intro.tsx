import film from "../assets/4442892-hd_1920_1080_24fps.mp4";
import { motion } from "framer-motion";

export function Intro() {
  return (
    <div className="relative w-full h-screen">
      {/* Vídeo de fundo */}
      <video 
        src={film} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full object-cover"
      />

      {/* Texto com efeito fade-in e responsividade */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold"
        >
          AD Barreira
        </motion.h1>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-5xl"
        >
          Uma casa de oração
        </motion.h3>
      </div>
    </div>
  );
}
