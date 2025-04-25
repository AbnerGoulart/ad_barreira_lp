"use client"

import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"

export function ChurchHistory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  // Controles de animação
  const lineScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]) // Linha para antes do texto final
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-150, 0, 0])
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0.8, 1])

  // Controle para a mensagem final
  const messageOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1])
  const messageY = useTransform(scrollYProgress, [0.85, 1], [30, 0])

  return (
    <section 
      ref={ref}
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 w-full font-geist"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900">
            NOSSA HISTÓRIA
          </h2>
          <div className="mt-4 h-1 w-20 bg-neutral-900 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline animada */}
        <div className="relative">
          {/* Linha do tempo animada (mais curta) */}
          <motion.div
            className="hidden md:block absolute left-1/2 h-[80%] w-0.5 bg-neutral-900 transform -translate-x-1/2 origin-top"
            style={{ 
              scaleY: lineScale,
              opacity: lineScale
            }}
          />

          {/* Item 1 - VISÍVEL */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16 min-h-[400px] md:min-h-[500px]">
            <motion.div 
              className="md:w-1/2 md:pr-12 mb-6 md:mb-0"
              style={{ 
                x: imageX,
                opacity
              }}
            >
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 md:pl-12"
              style={{ 
                x: textX,
                opacity
              }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-neutral-200 text-neutral-900 mb-3 md:mb-4">
                1963
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 md:mb-4">
                A Fundação
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed">
                A <strong>Assembleia de Deus - AD Barreira</strong> foi fundada em 1963
                pelo Pastor José Rosa, estabelecendo-se em Delfim Moreira/MG, no
                bairro da Barreira, alto da Serra da Mantiqueira.
              </p>
            </motion.div>
          </div>

          {/* Item 2 - VISÍVEL */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16 min-h-[400px] md:min-h-[500px]">
            <motion.div 
              className="md:w-1/2 md:pr-12 md:text-right"
              style={{ 
                x: imageX,
                opacity
              }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-neutral-200 text-neutral-900 mb-3 md:mb-4">
                1975
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 md:mb-4">
                Primeiro Templo
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed">
                Após anos de cultos em locais provisórios, a congregação construiu
                seu primeiro templo próprio, consolidando o trabalho evangelístico
                na região.
              </p>
            </motion.div>

            <motion.div 
              className="md:w-1/2 md:pl-12 mb-6 md:mb-0"
              style={{ 
                x: textX,
                opacity
              }}
            >
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Item 3 - VISÍVEL */}
          <div className="flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[500px]">
            <motion.div 
              className="md:w-1/2 md:pr-12 mb-6 md:mb-0"
              style={{ 
                x: imageX,
                opacity
              }}
            >
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 md:pl-12"
              style={{ 
                x: textX,
                opacity
              }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-neutral-200 text-neutral-900 mb-3 md:mb-4">
                2005
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 md:mb-4">
                Templo Atual
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed">
                Com a bênção de Deus e o trabalho dedicado dos irmãos, inauguramos 
                nosso atual templo, com capacidade para acomodar nossa crescente 
                congregação e oferecer melhores condições para o culto.
              </p>
            </motion.div>
          </div>

          {/* Mensagem final - Espaçamento ajustado */}
          <div className="mt-32 md:mt-40 pt-12 pb-20">
            <motion.div 
              className="text-center bg-neutral-50 rounded-xl p-8 md:p-12 shadow-sm border border-neutral-200 mx-auto max-w-4xl"
              style={{
                opacity: messageOpacity,
                y: messageY
              }}
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
          </div>
        </div>
      </div>
    </section>
  )
}