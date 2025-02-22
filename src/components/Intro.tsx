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
          className="flex items-baseline justify-center gap-1 sm:gap-4 text-2xl xs:text-2xl
          sm:text-4xl md:text-5xl lg:text-7xl font-normal"
        >
          <motion.img
            src={logoWhite}
            alt="Logo AD"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="xs:w-7 sm:w-12 md:w-16 lg:w-24"
          />
          BARREIRA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-lg text-black bg-white 
             xs:text-xs xs:w-[150px] xs:tracking-[1.5px] 
             sm:text-sm sm:w-auto sm:tracking-[5px] 
             md:w-auto md:text-lg md:tracking-[7px] 
             lg:text-xl lg:tracking-[14px]"
        >
          ASSEMBLEIA DE DEUS
        </motion.p>
        <SocialMedia />
      </div>
    </div>
  );
}
