import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { pastorsData } from "@/utils/pastorsData"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function PastorsGallery() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-neutral-800 font-geist">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-50">
            NOSSOS PASTORES
          </h2>
          <div className="mt-4 h-1 w-20 bg-neutral-100 mx-auto rounded-full"></div>
        </div>

        {/* Controles de navegação (setas) - posicionado acima */}
        <div className="flex justify-end gap-4 mb-4">
          <button className="pastors-prev p-2 rounded-full hover:bg-neutral-700 transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="pastors-next p-2 rounded-full hover:bg-neutral-700 transition-colors">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carrossel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".pastors-prev",
            nextEl: ".pastors-next",
          }}
          pagination={{
            clickable: true,
            el: ".pastors-pagination",
            bulletClass: "w-2 h-2 md:w-3 md:h-3 rounded-full bg-neutral-600 mx-1 cursor-pointer",
            bulletActiveClass: "bg-neutral-100",
          }}
          autoplay={{ delay: 3000 }}
        >
          {pastorsData.map((pastor, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full pb-10" // Espaço para os bullets
              >
                <div className="bg-neutral-700 rounded-xl overflow-hidden shadow-lg border border-neutral-600 h-full flex flex-col mx-2 transition-all duration-300 hover:border-neutral-400">
                  <div className="relative h-64 w-full bg-neutral-900 flex items-center justify-center">
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="p-6 text-center flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-100 mb-1">
                      {pastor.name}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300">{pastor.period}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação (bullets) - posicionado abaixo */}
        <div className="pastors-pagination flex justify-center mt-4 pt-4"></div>
      </div>
    </section>
  )
}