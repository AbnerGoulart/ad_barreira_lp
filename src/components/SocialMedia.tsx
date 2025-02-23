import { socialMediaLinks } from "../utils/socialMediaLinks";
import { motion } from "framer-motion";

export function SocialMedia() {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside 
      className="absolute ml-2 left-2 sm:left-4 top-1/2 
      transform -translate-y-1/2 flex flex-col gap-4 sm:gap-6"
    >
      <ul className="flex flex-col gap-4 sm:gap-6">
        {socialMediaLinks.map(({ href, img, alt }, index) => (
          <li key={index}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              onClick={() => handleNavigate(href)}
              className="cursor-pointer transition-transform duration-300 ease-in-out"
            >
              <img src={img} alt={alt} className="xs:w-6 sm:w-6 md:w-8 lg:w-10 hover:scale-110 hover:brightness-125" />
            </motion.button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
