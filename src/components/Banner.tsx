import bgImg from "../assets/re-web-header.jpeg";
import bannerImg from "../assets/banner.png";

export function Banner() {
  return (
    <section 
      className="w-full h-fit bg-cover bg-center bg-fixed flex justify-center items-center" 
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <img 
        src={bannerImg} 
        alt="arte do evento" 
        className="max-w-full h-auto mx-auto" 
      />
    </section>
  );
}
