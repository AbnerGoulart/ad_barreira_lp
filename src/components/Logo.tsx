import logo from "../assets/utils/3-removebg-preview.png"

export function Logo() {
  return (
    <div className="w-42 md:w-48 lg:w-48">
      <a href="/">
        <img
          src={logo}
          alt="Logo AD Barreira"
          className="w-full h-auto object-contain rounded-lg"
        />
      </a>
    </div>
  );
}