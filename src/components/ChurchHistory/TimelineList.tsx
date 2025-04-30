import { timelineData } from "../../utils/timelineData";
import { TimelineLine } from "./TimelineLine";
import { TimelineItem } from "./TimelineItem";
import { useTimelineScroll } from "../../contexts/TimelineScrollContext";

export const TimelineList = () => {
  const { containerRef } = useTimelineScroll();

  return (
    <div ref={containerRef} className="relative w-full pt-20 pb-40">
      <TimelineLine />
      <div className="relative z-10">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
