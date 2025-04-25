import { ChurchHistory } from "@/components/ChurchHistory";
import { PastorsGallery } from "@/components/PastorsGallery";
import { ChurchLocation } from "../components/ChurchLocation";

export function About(){
  return(
    <>
      <ChurchHistory/>
      <PastorsGallery />
      <ChurchLocation />
    </>
  )
}