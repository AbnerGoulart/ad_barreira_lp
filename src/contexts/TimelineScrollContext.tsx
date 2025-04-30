import { createContext, useContext, useRef } from "react";

const TimelineScrollContext = createContext<{
  containerRef: React.RefObject<HTMLDivElement | null>; // Adicione null aqui
  itemRefs: React.RefObject<HTMLDivElement | null>[]   // E aqui também
} | null>(null);

export const TimelineScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = Array.from({ length: 10 }, () => useRef<HTMLDivElement | null>(null));

  return (
    <TimelineScrollContext.Provider value={{ containerRef, itemRefs }}>
      {children}
    </TimelineScrollContext.Provider>
  );
};

export const useTimelineScroll = () => {
  const context = useContext(TimelineScrollContext);
  if (!context) {
    throw new Error("useTimelineScroll deve ser usado dentro de um TimelineScrollProvider");
  }
  return context;
};