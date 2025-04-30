import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface TimelineImageProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc?: string; // Opcional: para o caso de você querer passar um src de imagem dinamicamente
}

export const TimelineImage = ({ className, imageSrc }: TimelineImageProps) => {
  return (
    <motion.div className={`aspect-video w-full bg-neutral-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden ${className}`}>
      {imageSrc ? (
        <img src={imageSrc} alt="" className="object-cover w-full h-full" />
      ) : (
        <span className="text-3xl text-neutral-400">Imagem 16:9</span>
      )}
    </motion.div>
  );
};