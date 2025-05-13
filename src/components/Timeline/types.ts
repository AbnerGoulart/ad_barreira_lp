export interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  imageSide: "left" | "right";
  imageUrl?: string;
  imageUrls?: string[];
}

export interface TimelineData {
  items: TimelineItemProps[];
}