import { Intro } from "../components/Intro";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-700">
      <Intro />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Bem-vindo à AD Barreira
      </h1>


      <section className="max-w-3xl text-center space-y-6">
        <p>
          A{" "}
          <span className="font-semibold">
            Assembleia de Deus - AD Barreira
          </span>
          , localizada no bairro da Barreira, em{" "}
          <span className="font-semibold">Delfim Moreira/MG</span>, faz parte da{" "}
          <span className="font-semibold">
            Assembleia de Deus Missão Itajubá
          </span>
          . Fundada em meados de <span className="font-semibold">1963</span>{" "}
          pelo <span className="font-semibold">Pastor José Rosa</span>, nasceu
          com a visão de proclamar o Evangelho de Cristo, seguindo o chamado
          bíblico de:
        </p>

        <blockquote className="italic bg-gray-100 p-4 rounded-md border-l-4 border-gray-500">
          "Ir por todo o mundo e pregar o Evangelho a toda criatura" (Marcos
          16:15).
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Nossa Missão e Fé
        </h2>
        <p>
          Como uma igreja de tradição{" "}
          <span className="font-semibold">Pentecostal Clássica</span>, seguimos
          os princípios e valores assembleianos, buscando viver o amor de Cristo
          na prática. Nosso compromisso é com a Palavra de Deus, e temos como
          referência:
        </p>

        <blockquote className="italic bg-gray-100 p-4 rounded-md border-l-4 border-gray-500">
          "Nisto conhecemos o amor: que Cristo deu a sua vida por nós; e devemos
          dar a vida pelos irmãos." (1 João 3:16)
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Nossos Cultos e Ministérios
        </h2>
        <p>
          Com aproximadamente{" "}
          <span className="font-semibold">120 membros ativos</span>, a AD
          Barreira mantém uma programação rica e diversificada:
        </p>

        <ul className="text-left space-y-2 mt-4">
          <li className="bg-gray-100 p-2 rounded-md">
            📖 Culto de Doutrina, Santa Ceia, Missões
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            📚 Escola Bíblica Dominical e Escola Bíblica de Jovens
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            👶 Culto de Crianças, Culto de Jovens, Culto de Varões
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            🙏 Círculo de Oração Getsemani
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            🎶 Coral Infantil Cordeirinhos de Cristo
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            🎻 Orquestra Resplendor
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Atuação Social e Comunitária
        </h2>
        <p>
          Além das atividades dentro do templo, a AD Barreira tem um forte
          compromisso com a comunidade, realizando{" "}
          <span className="font-semibold">cultos nos lares</span> e promovendo{" "}
          <span className="font-semibold">
            campanhas de arrecadação de mantimentos
          </span>
          para ajudar famílias em necessidade.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8">
          Ambiente e Cultura
        </h2>
        <p>
          Nossa igreja é reconhecida pelo seu ambiente{" "}
          <span className="font-semibold">acolhedor, amoroso e fervoroso</span>.
          O louvor é um reflexo da nossa diversidade, combinando hinos
          tradicionais e adoração contemporânea, proporcionando um espaço de
          adoração vibrante e inspirador.
        </p>
      </section>
    </div>
  );
}
