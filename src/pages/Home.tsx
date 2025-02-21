import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { Intro } from "../components/Intro";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-neutral-900">
      <Intro />

      <section className="bg-neutral-100 text-justify space-y-8 w-full py-8 px-6 md:px-8 font-geist">
        <p className="text-neutral-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto">
          A <strong>Assembleia de Deus - AD Barreira</strong>, fundada em 1963
          pelo Pastor José Rosa, está situada em Delfim Moreira/MG, no bairro da
          Barreira, alto da Serra da Mantiqueira.
        </p>

        <p className="text-neutral-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto">
          Somos uma igreja acolhedora e fervorosa no Espírito, filiada à
          Assembleia de Deus Missão Itajubá, vivendo o chamado de Cristo: "Ir
          por todo o mundo e pregar o Evangelho a toda criatura" (Marcos 16:15).
        </p>
      </section>

      <Banner />

      <section className="bg-neutral-100 text-center w-full py-8 px-6 md:px-12 lg:px-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          PEDIDOS DE ORAÇÃO
        </h1>

        <p className="text-neutral-900 text-sm text-justify sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto">
          Jesus disse:{" "}
          <strong>
            "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e
            abrir-se-vos-á."
          </strong>
          <br />
          Apresente sua oração e confie que o Senhor cuida de você.
        </p>

        <div className="w-full max-w-lg md:max-w-2xl mt-6">
          <Form />
        </div>
      </section>
    </div>
  );
}
