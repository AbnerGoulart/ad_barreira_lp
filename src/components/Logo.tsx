import logo from "../assets/utils/3-removebg-preview.png";

export function Logo() {
  return (
    <div className="xs:w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 min-w-[100px] max-w-[250px]">
      <a href="/">
        <img
          src={logo}
          alt="Logo AD Barreira"
          className="w-full h-auto object-contain"
        />
      </a>
    </div>
  );
}
