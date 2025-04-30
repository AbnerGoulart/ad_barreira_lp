import { ChurchHistory } from "@/components/ChurchHistory";
import { PastorsGallery } from "@/components/PastorsGallery";
import { ChurchLocation } from "../components/ChurchLocation";
import { Timeline } from "@/components/Timeline";

export function About(){
  return(
    <>
      <Timeline />
      {/* <ChurchHistory/> */}
      <PastorsGallery />
      <ChurchLocation />
    </>
  )
}