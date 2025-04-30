import { SectionHeader } from "./SectionHeader";
import { TimelineScrollProvider } from "../../contexts/TimelineScrollContext";
import { TimelineList } from "./TimelineList";
import { FinalMessage } from "./FinalMessage";
import { finalMessage } from "../../utils/timelineData";

export const ChurchHistory = () => {
  return (
    <section className=" relative w-full bg-neutral-100 py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-geist">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="NOSSA HISTÓRIA" />
        <TimelineScrollProvider>
          <TimelineList />
        </TimelineScrollProvider>
        <FinalMessage {...finalMessage} />
      </div>
    </section>
  );
};
