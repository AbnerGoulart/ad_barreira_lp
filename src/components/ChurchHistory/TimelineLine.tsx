// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const TimelineLine = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <div ref={containerRef} className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-neutral-300 h-full overflow-hidden">
//       <motion.div
//         className="w-full bg-red-800 origin-top"
//         style={{ scaleY }}
//       />
//     </div>
//   );
// };

import { motion } from "framer-motion";
import { useTimelineScroll } from "../../contexts/TimelineScrollContext";
import { useState, useEffect } from "react";

export const TimelineLine = () => {
  const { containerRef } = useTimelineScroll(); // Pega a referência do container
  const [scrollYProgress, setScrollYProgress] = useState(0); // Estado para o progresso do scroll

  // Monitorando o progresso do scroll com a referência do container
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.scrollHeight - window.innerHeight;
        const progress = window.scrollY / containerHeight;
        setScrollYProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <div
      className="relative w-1 bg-neutral-300 h-full left-1/2 transform -translate-x-1/2"
      style={{ height: "100%" }}
    >
      {/* Linha vermelha animada */}
      <motion.div
        className="w-full bg-red-800 origin-top"
        style={{
          scaleY: scrollYProgress, // A linha cresce com base no scroll
        }}
      />
    </div>
  );
};
