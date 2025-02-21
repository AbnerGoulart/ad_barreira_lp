import { Select } from "./Select";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { useState } from "react";
import { prayerCategories } from "../utils/prayerCategories";
import { Button } from "./Button";

export function Form() {
  const [category, setCategory] = useState("");
  const [acceptedChrist, setAcceptedChrist] = useState(false);
  const [learnMore, setLearnMore] = useState(false);

  return (
    <form
      action=""
      className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-transparent 
      space-y-6 py-8 px-6 sm:px-8 md:px-12 mx-auto font-geist"
    >
      <Input required legend="Nome" type="text" placeholder="Nome completo" />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {prayerCategories.map((prayerCategory) => (
            <option key={prayerCategory.id} value={prayerCategory.name}>
              {prayerCategory.name}
            </option>
          ))}
        </Select>
        <Input required legend="Telefone" type="text" placeholder="(XX)91234-5678" />
      </div>
      <TextArea required legend="Mensagem" placeholder="Escreva seu pedido" />
      
      <section className="space-y-4 mt-6 ">
        <hr className="border-t-2 border-gray-300" />
        
        <div className="flex items-center gap-2 text-left">
          <input
            type="checkbox"
            id="acceptChrist"
            checked={acceptedChrist}
            onChange={() => setAcceptedChrist(!acceptedChrist)}
            className="h-4 w-4 accent-neutral-800"
          />
          <label htmlFor="acceptChrist" className="text-sm">
            Quero aceitar a <strong>Jesus Cristo</strong> como meu Senhor e Salvador
          </label>
        </div>

        <div className="flex items-center gap-2 text-left">
          <input
            type="checkbox"
            id="learnMore"
            checked={learnMore}
            onChange={() => setLearnMore(!learnMore)}
            className="h-4 w-4 accent-neutral-800"
          />
          <label htmlFor="learnMore" className="text-sm">
            Ainda não aceitei a Cristo, mas gostaria de aprender mais da Palavra de Deus
          </label>
        </div>
      </section>

      <Button title="ENVIAR" theme="dark" />
    </form>
  );
}
