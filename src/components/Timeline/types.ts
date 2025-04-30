export interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  imageSide: "left" | "right";
}

export interface TimelineData {
  items: TimelineItemProps[];
}