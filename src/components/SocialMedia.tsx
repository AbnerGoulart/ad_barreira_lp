import { socialMediaLinks } from "../utils/socialMediaLinks";

export function SocialMedia() {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside className="absolute ml-2 left-2 sm:left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 sm:gap-6">
      <ul className="flex flex-col gap-4 sm:gap-6">
        {socialMediaLinks.map(({ href, img, alt }, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigate(href)}
              className="cursor-pointer transition-transform duration-300 ease-in-out 
              hover:scale-110 hover:brightness-125"
            >
              <img src={img} alt={alt} className="w-6 sm:w-8 md:w-10 lg:w-12" />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
