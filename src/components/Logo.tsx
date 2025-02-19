import logo from "../assets/LOGO ASSEMBLÉIA DE DEUS BARREIRA(1).jpg"

export function Logo() {
  return (
    <div className="w-16 md:w-20 lg:w-24">
      <img
        src={logo}
        alt="Logo AD Barreira"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}