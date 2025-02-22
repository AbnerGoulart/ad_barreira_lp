import film from "../assets/4442892-hd_1920_1080_24fps.mp4";
import logoWhite from "../assets/utils/logo_white.png";
import { motion } from "framer-motion";
import { SocialMedia } from "./SocialMedia";

export function Intro() {
  return (
    <div className="relative w-full h-[100vw] md:h-[56.25vw] lg:h-[56.25vw] max-h-[90vh]">
      <video
        src={film}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center 
      text-center text-white bg-black/50 px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-baseline justify-center gap-1 sm:gap-6 text-4xl 
          sm:text-5xl md:text-6xl lg:text-9xl font-normal"
        >
          <motion.img
            src={logoWhite}
            alt="Logo AD"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-13 sm:w-12 md:w-20 lg:w-46 max-h-12 sm:max-h-16 md:max-h-24 lg:max-h-32 h-auto"
          />
          BARREIRA
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-lg text-black bg-white 
             sm:text-xl sm:w-[190px] sm:tracking-[3px] 
             md:w-auto md:text-xl md:tracking-[9px] 
             lg:text-3xl lg:tracking-[25px]"
        >
          ASSEMBLEIA DE DEUS
        </motion.h3>
        <SocialMedia />
      </div>
    </div>
  );
}
