import { useState } from "react";
import { Banner } from "../components/Banner";
import { Input } from "../components/Input";
import { Intro } from "../components/Intro";
import { Select } from "../components/Select";
import { prayerCategories } from "../utils/prayerCategories";

export function Home() {
  const [category, setCategory] = useState("")

  return (
    <div className="flex flex-col items-center justify-center text-gray-700">

      <Intro />

      <section className="bg-neutral-100 text-center space-y-8 w-full py-8 px-8 md:px-8 font-geist">
        <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-screen-lg mx-auto">
          A <strong>Assembleia de Deus - AD Barreira</strong>, fundada em 1963
          pelo Pastor José Rosa, está situada em Delfim Moreira/MG, no bairro da
          Barreira, alto da Serra da Mantiqueira.
        </p>

        <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-screen-lg mx-auto">
          Somos uma igreja acolhedora e fervorosa no Espírito, filiada à
          Assembleia de Deus Missão Itajubá, vivendo o chamado de Cristo: "Ir
          por todo o mundo e pregar o Evangelho a toda criatura" (Marcos 16:15).
        </p>
      </section>

      <Banner />

      <section className="bg-neutral-100 text-center space-y-8 w-full py-8 px-8 md:px-8">
        <h1 className="text-6xl font-black">
          PEDIDOS DE ORAÇÃO
        </h1>

        <form action="" className="bg-transparent space-y-8 py-8 px-8 md:px-8 font-geist">
          <Input 
            required
            legend="e-mail"
            type="text"
            placeholder="seu@email.com"
          />
          <Select 
            required
            legend="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            {prayerCategories.map((prayerCategory) => (
              <option key={prayerCategory.id} value={prayerCategory.name}>
                {prayerCategory.name}
              </option>
            ))}
          </Select>

        </form>
      </section>


    </div>
  );
}
