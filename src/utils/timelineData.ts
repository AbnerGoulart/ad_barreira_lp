import { TimelineItemProps } from "../components/Timeline/types";

export const timelineData: Omit<TimelineItemProps, 'index' | 'scrollYProgress'>[] = [
  {
    year: "1963",
    title: "A Fundação",
    description: "A Assembleia de Deus - AD Barreira foi fundada em 1963 pelo Pastor José Rosa, estabelecendo-se em Delfim Moreira/MG, no bairro da Barreira, alto da Serra da Mantiqueira.",
    imageSide: "left",
    imageUrls: [
      "https://fakeimg.pl/600x400/0033ff/969696", // Azul
      "https://fakeimg.pl/600x400/ffd900/969696", // Amarelo
      "https://fakeimg.pl/600x400/db1515/969696"  // Vermelho
    ]
  },
  {
    year: "1975",
    title: "Primeiro Templo",
    description: "Após anos de cultos em locais provisórios, a congregação construiu seu primeiro templo próprio, consolidando o trabalho evangelístico na região.",
    imageSide: "right",
    imageUrls: [
      "https://fakeimg.pl/600x400/0033ff/969696", // Azul
      "https://fakeimg.pl/600x400/ffd900/969696", // Amarelo
      "https://fakeimg.pl/600x400/db1515/969696"  // Vermelho
    ]
  },
  {
    year: "1990",
    title: "Segundo Templo",
    description: "Com o crescimento da congregação, foi construído um novo templo com capacidade ampliada, marcando uma nova fase de expansão do trabalho evangelístico.",
    imageSide: "left",
    imageUrls: [
      "https://fakeimg.pl/600x400/0033ff/969696", // Azul
      "https://fakeimg.pl/600x400/ffd900/969696", // Amarelo
      "https://fakeimg.pl/600x400/db1515/969696"  // Vermelho
    ]
  },
  {
    year: "2005",
    title: "Templo Atual",
    description: "Com a bênção de Deus e o trabalho dedicado dos irmãos, inauguramos nosso atual templo, com capacidade para acomodar nossa crescente congregação.",
    imageSide: "right",
    imageUrls: [
      "https://fakeimg.pl/600x400/0033ff/969696", // Azul
      "https://fakeimg.pl/600x400/ffd900/969696", // Amarelo
      "https://fakeimg.pl/600x400/db1515/969696"  // Vermelho
    ]
  },
  {
    year: "2019",
    title: "Templo Reformado",
    description: "Reforma completa do templo atual, com modernização das instalações e melhorias na acessibilidade, proporcionando maior conforto para a membresia.",
    imageSide: "left",
    imageUrls: [
      "https://fakeimg.pl/600x400/0033ff/969696", // Azul
      "https://fakeimg.pl/600x400/ffd900/969696", // Amarelo
      "https://fakeimg.pl/600x400/db1515/969696"  // Vermelho
    ]
  }
];

export const finalMessage = {
  title: "A Igreja é o Corpo de Cristo em movimento",
  verse: "\"Eu sei as tuas obras; eis que diante de ti pus uma porta aberta, e ninguém a pode fechar; tendo pouca força, guardaste a minha Palavra, e não negaste o meu Nome.\"",
  reference: "Apocalipse 3:8"
};