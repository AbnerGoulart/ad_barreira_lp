import { motion, useTransform } from "framer-motion";
import { TimelineItemProps } from "./types";
import { TimelineImage } from "./TimelineImage"; // Importe o novo componente

export const TimelineItem = ({
  year,
  title,
  description,
  imageSide,
  index,
  scrollYProgress,
}: TimelineItemProps & { index: number; scrollYProgress: any }) => {
  const imageFirst = imageSide === "left";
  const textAlignClass = imageFirst ? "text-left" : "text-right";

  const thresholdStart = index === 0 ? 0.1 : index * 0.2;
  const thresholdEnd = thresholdStart + 0.1;

  const opacity =
    index === 0
      ? 1
      : useTransform(scrollYProgress, [thresholdStart, thresholdEnd], [0, 1], { clamp: true });

  const translateXImage =
    index === 0
      ? 0
      : useTransform(
          scrollYProgress,
          [thresholdStart, thresholdEnd],
          [imageFirst ? -100 : 100, 0],
          { clamp: true }
        );

  const translateXText =
    index === 0
      ? 0
      : useTransform(
          scrollYProgress,
          [thresholdStart, thresholdEnd],
          [imageFirst ? 100 : -100, 0],
          { clamp: true }
        );

  const scaleMarker =
    index === 0
      ? 1
      : useTransform(
          scrollYProgress,
          [thresholdStart, thresholdStart + 0.05, thresholdEnd],
          [0, 1.2, 1],
          { clamp: true }
        );

  return (
    <div className="relative py-12">
      <motion.div
        className="flex items-center justify-between gap-8"
        style={{ opacity }}
      >
        {imageFirst ? (
          <>
            <motion.div
              className="w-[45%]"
              style={{ x: translateXImage, opacity }}
            >
              <TimelineImage /> {/* Use o novo componente aqui */}
            </motion.div>
            <motion.div
              className="relative flex-shrink-0"
              style={{ scale: scaleMarker, opacity }}
            >
              <div className="w-5 h-5 bg-red-800 rounded-full border-4 border-white z-20" />
            </motion.div>
            <motion.div
              className="w-[45%]"
              style={{ x: translateXText, opacity }}
            >
              <div className={` ${textAlignClass}`}>
                <h4 className="text-lg font-bold text-red-800 mb-1">{year}</h4>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className="w-[45%] order-1"
              style={{ x: translateXText, opacity }}
            >
              <div className={` ${textAlignClass}`}>
                <h4 className="text-lg font-bold text-red-800 mb-1">{year}</h4>
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{description}</p>
              </div>
            </motion.div>
            <motion.div
              className="relative flex-shrink-0 order-2"
              style={{ scale: scaleMarker, opacity }}
            >
              <div className="w-5 h-5 bg-red-800 rounded-full border-4 border-white z-20" />
            </motion.div>
            <motion.div
              className="w-[45%] order-3"
              style={{ x: translateXImage, opacity }}
            >
              <TimelineImage /> {/* Use o novo componente aqui */}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};