import { motion } from "framer-motion";
import { HTMLAttributes, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules'; // Importe EffectCards
import 'swiper/css'; // Importe o CSS principal do Swiper
import 'swiper/css/effect-cards'; // Importe os estilos do efeito card

interface TimelineImageProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  imageUrls?: string[];
}

export const TimelineImage = ({ className, imageUrl, imageUrls }: TimelineImageProps) => {
  const [isSingleImage, setIsSingleImage] = useState(false);

  useEffect(() => {
    setIsSingleImage(!!imageUrl && !imageUrls);
  }, [imageUrl, imageUrls]);

  if (isSingleImage) {
    return (
      <motion.div className={`aspect-video w-full bg-neutral-200 rounded-xl shadow-lg overflow-hidden ${className}`}>
        {imageUrl && (
          <img src={imageUrl} alt="" className="object-cover w-full h-full" />
        )}
      </motion.div>
    );
  }

  if (imageUrls && imageUrls.length > 0) {
    return (
      <>
        <Swiper
          effect={'cards'} // Aplica o efeito de cards
          grabCursor={true}
          modules={[EffectCards, Autoplay]} // Adicione EffectCards aos módulos
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper" // Opcional: para estilização adicional do Swiper
        >
          {imageUrls.map((src, index) => (
            <SwiperSlide className="rounded-xl aspect-video flex items-center justify-center overflow-hidden" key={index}>
              <img src={src} alt={`Imagem ${index + 1}`} className="object-cover w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }

  // Caso não haja imageUrl nem imageUrls
  return (
    <motion.div className={`aspect-video w-full bg-neutral-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden ${className}`}>
      <span className="text-3xl text-neutral-400">Imagem 16:9</span>
    </motion.div>
  );
};