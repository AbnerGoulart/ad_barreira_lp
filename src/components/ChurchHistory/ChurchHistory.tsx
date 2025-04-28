import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Timeline } from "./Timeline";
import { FinalMessage } from "./FinalMessage";

export function ChurchHistory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-150, 0, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0.8, 1]);
  const messageOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const messageY = useTransform(scrollYProgress, [0.85, 1], [30, 0]);

  return (
    <section 
      ref={ref}
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 w-full font-geist"
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader />

        <motion.div
          className="hidden md:block absolute left-1/2 h-[80%] w-0.5 bg-neutral-900 transform -translate-x-1/2 origin-top"
          style={{ scaleY: lineScale, opacity: lineScale }}
        />

        <div className="space-y-24">
          <Timeline
            year="1963"
            title="A Fundação"
            description="A Assembleia de Deus - AD Barreira foi fundada em 1963 pelo Pastor José Rosa, estabelecendo-se em Delfim Moreira/MG, no bairro da Barreira, alto da Serra da Mantiqueira."
            imageX={imageX}
            textX={textX}
            opacity={opacity}
          />
          <Timeline
            year="1975"
            title="Primeiro Templo"
            description="Após anos de cultos em locais provisórios, a congregação construiu seu primeiro templo próprio, consolidando o trabalho evangelístico na região."
            imageX={imageX}
            textX={textX}
            opacity={opacity}
            reverse
          />
          <Timeline
            year="2005"
            title="Templo Atual"
            description="Com a bênção de Deus e o trabalho dedicado dos irmãos, inauguramos nosso atual templo, com capacidade para nossa crescente congregação."
            imageX={imageX}
            textX={textX}
            opacity={opacity}
          />
        </div>

        <FinalMessage opacity={messageOpacity} y={messageY} />
      </div>
    </section>
  );
}
