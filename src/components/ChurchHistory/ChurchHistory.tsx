import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "./SectionHeader"
import { TimelineItem } from "./TimelineItem"
import { FinalMessage } from "./FinalMessage"

export const ChurchHistory = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  const lineScale = useTransform(scrollYProgress, [0, 0.9], [0, 1])

  const timelineData = [
    {
      year: "1963",
      title: "A Fundação",
      description: "A Assembleia de Deus - AD Barreira foi fundada em 1963 pelo Pastor José Rosa, estabelecendo-se em Delfim Moreira/MG, no bairro da Barreira, alto da Serra da Mantiqueira.",
      imageSide: "left" as const
    },
    {
      year: "1975",
      title: "Primeiro Templo",
      description: "Após anos de cultos em locais provisórios, a congregação construiu seu primeiro templo próprio, consolidando o trabalho evangelístico na região.",
      imageSide: "right" as const
    },
    {
      year: "2005",
      title: "Templo Atual",
      description: "Com a bênção de Deus e o trabalho dedicado dos irmãos, inauguramos nosso atual templo, com capacidade para acomodar nossa crescente congregação e oferecer melhores condições para o culto.",
      imageSide: "left" as const
    }
  ]

  const finalMessage = {
    title: "A Igreja é o Corpo de Cristo em movimento",
    verse: "\"Eu sei as tuas obras; eis que diante de ti pus uma porta aberta, e ninguém a pode fechar; tendo pouca força, guardaste a minha palavra, e não negaste o meu nome.\"",
    reference: "Apocalipse 3:8"
  }

  return (
    <section 
      ref={ref}
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 w-full font-geist"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="NOSSA HISTÓRIA" />

        <div className="relative">
          <motion.div
            className="hidden md:block absolute left-1/2 h-[calc(100%-200px)] w-0.5 bg-neutral-900 transform -translate-x-1/2 origin-top"
            style={{ 
              scaleY: lineScale,
              opacity: lineScale
            }}
          />

          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              scrollYProgress={scrollYProgress}
              // Adiciona um delay progressivo baseado no índice
              animationDelay={index * 0.15}
            />
          ))}

          <FinalMessage {...finalMessage} scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  )
}