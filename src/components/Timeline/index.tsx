import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineItem } from "./TimelineItem";
import { timelineData } from "../../utils/timelineData";
import { SectionHeader } from "../ChurchHistory/SectionHeader";

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["5%", "100%"]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader title="NOSSA HISTÓRIA" />
      <div ref={containerRef} className="relative">
        <motion.div
          className="absolute left-1/2 top-0 w-px bg-red-800 origin-top z-0"
          style={{
            height: lineHeight,
            x: "-50%"
          }}
        />
        <div className="relative z-10 space-y-24 pt-16">
          {timelineData.map((item, index) => (
            <div ref={(el) => (itemRefs.current[index] = el)} key={index}>
              <TimelineItem {...item} index={index} scrollYProgress={scrollYProgress} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};