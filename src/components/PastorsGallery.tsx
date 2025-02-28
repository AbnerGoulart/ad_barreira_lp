import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { pastorsData } from "@/utils/pastorsData";
import { Separator } from "@/components/ui/separator";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function PastorsGallery() {
  return (
    <section className="w-screen px-4 py-8 bg-neutral-800">
      <Separator />
      <h2 className="text-center text-3xl font-bold text-neutral-100 mb-6">
        Galeria de Pastores
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full pb-10" // Adiciona um padding para os bullets ficarem visíveis
      >
        {pastorsData.map((pastor, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-md w-80 cursor-pointer">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4 text-center hover:bg-neutral-700 hover:text-amber-300">
                  <h3 className="text-lg font-semibold">{pastor.name}</h3>
                  <p className="">{pastor.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Contêiner manual da paginação */}
      <div className="swiper-pagination mt-4"></div>
      <Separator />
    </section>
  );
}

