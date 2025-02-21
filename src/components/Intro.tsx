import film from "../assets/4442892-hd_1920_1080_24fps.mp4";
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-normal"
        >
          AD BARREIRA
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-5xl"
        >
          Uma casa de oração
        </motion.h3>
        <SocialMedia />
      </div>
    </div>
  );
}
