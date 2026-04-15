/**
 * Gran Reserva Treviso — dados oficiais extraídos do paper Março/2026
 */

export const projeto = {
  nome: "Gran Reserva Treviso",
  nomeCurto: "Treviso",
  tagline: "Exclusivo em todos os detalhes",
  posicionamento: "Uma nova referência urbana em Paulínia",
  cidade: "Paulínia",
  estado: "SP",
  regiao: "Região Metropolitana de Campinas",
} as const;

export const manifesto = {
  titulo: "Merecida",
  subtitulo: "mente seu",
  corpo: `Há lugares que dispensam explicações. Eles se revelam na experiência, no tempo que desacelera, na sensação imediata de pertencimento. O Gran Reserva Treviso nasce do encontro preciso entre natureza e intenção — um território concebido para que a infância se expanda livre, os encontros aconteçam sem esforço e cada dia traga razões genuínas para ficar. Aqui, o verde não compõe a paisagem: ele define o modo de viver.`,
};

export const numerosOficiais = [
  { valor: "525", label: "lotes residenciais" },
  { valor: "44", label: "lotes comerciais" },
  { valor: "300", unidade: "m²", label: "a partir de" },
  { valor: "80.376", unidade: "m²", label: "área preservada" },
  { valor: "18+", label: "itens de lazer" },
  { valor: "1", label: "heliponto exclusivo" },
];

export const granloteNumeros = [
  { valor: "+20", label: "cidades atendidas" },
  { valor: "+40", label: "empreendimentos lançados" },
  { valor: "+15mil", label: "unidades vendidas" },
  { valor: "+4 mi", label: "m² urbanizados" },
];

export const distancias = [
  { destino: "Rod. Prof. Zeferino Vaz", tempo: "2 min", tipo: "rodovia" },
  { destino: "Rod. Anhanguera", tempo: "5 min", tipo: "rodovia" },
  { destino: "Rod. dos Bandeirantes", tempo: "18 min", tipo: "rodovia" },
  { destino: "Aeroporto de Viracopos", tempo: "32 min", tipo: "aeroporto" },
  { destino: "Maple Bear Paulínia", tempo: "8 min", tipo: "educacao" },
  { destino: "Unicamp", tempo: "17 min", tipo: "educacao" },
  { destino: "SABIS International", tempo: "23 min", tipo: "educacao" },
  { destino: "Colégio Notre Dame Campinas", tempo: "23 min", tipo: "educacao" },
  { destino: "Hospital Municipal de Paulínia", tempo: "10 min", tipo: "saude" },
  { destino: "Covabra Supermercados", tempo: "1 min", tipo: "servicos" },
  { destino: "Campo de Golf Clube 3M", tempo: "10 min", tipo: "lazer" },
  { destino: "Shopping Parque Dom Pedro", tempo: "19 min", tipo: "shopping" },
  { destino: "Galleria Shopping", tempo: "20 min", tipo: "shopping" },
  { destino: "Shopping Iguatemi Campinas", tempo: "24 min", tipo: "shopping" },
] as const;

export type Capitulo = {
  id: string;
  chapeu: string;
  tagline: string;
  copy: string;
  imagem: string;
  /** true = vira uma seção editorial grande, false = vai só para a galeria */
  destaque?: boolean;
};

/** Narrativa editorial — 1 capítulo por amenidade, extraído do paper */
export const capitulos: Capitulo[] = [
  {
    id: "chegada",
    chapeu: "A chegada",
    tagline: "Alto padrão desde o primeiro olhar",
    copy: "O ponto de chegada que transmite tranquilidade, segurança e bem-estar, reforçando o cuidado com quem vive aqui.",
    imagem: "/images/portaria-1920.webp",
    destaque: true,
  },
  {
    id: "clube",
    chapeu: "O coração",
    tagline: "Onde os encontros acontecem naturalmente",
    copy: "O clube é o espaço onde os encontros acontecem naturalmente. Ambientes integrados, acolhedores e versáteis, pensados para celebrar, relaxar e compartilhar momentos que ficam na memória.",
    imagem: "/images/voo-clube-1920.webp",
    destaque: true,
  },
  {
    id: "aquatico",
    chapeu: "Complexo aquático",
    tagline: "Leveza em cada mergulho",
    copy: "As piscinas oferecem frescor, relaxamento e diversão em um ambiente cuidadosamente integrado à paisagem. Um convite diário para desacelerar e aproveitar o melhor do clima ao ar livre.",
    imagem: "/images/piscina-voo-1920.webp",
    destaque: true,
  },
  {
    id: "solarium",
    chapeu: "Solarium",
    tagline: "Sombra, água fresca e descontração",
    copy: "O solarium complementa a área das piscinas com charme e praticidade. Um ponto perfeito para encontros informais, celebrações e momentos de puro prazer.",
    imagem: "/images/solarium-1920.webp",
  },
  {
    id: "academia",
    chapeu: "Academia",
    tagline: "Movimento que inspira",
    copy: "A academia foi projetada para estimular o cuidado com o corpo e a mente. Totalmente envidraçada, amplia a sensação de liberdade, integrando o exercício físico à paisagem externa.",
    imagem: "/images/academia-a-1920.webp",
  },
  {
    id: "fitness",
    chapeu: "Praça fitness",
    tagline: "Treinar com o olhar no horizonte",
    copy: "A vista se torna parte da experiência, tornando cada treino mais leve e motivador.",
    imagem: "/images/praca-fitness-1920.webp",
  },
  {
    id: "gourmet",
    chapeu: "Salão gourmet",
    tagline: "Para encontros que pedem tempo, conversa e boa mesa",
    copy: "Um ambiente elegante, acolhedor e funcional, pensado para transformar cada refeição em experiência e cada ocasião em memória.",
    imagem: "/images/salao-gourmet-1920.webp",
    destaque: true,
  },
  {
    id: "festas",
    chapeu: "Praça das festas",
    tagline: "Celebrar torna-se parte da paisagem",
    copy: "Integrada ao paisagismo, a praça das festas combina amplitude, charme e uma atmosfera acolhedora, perfeita para reunir amigos e celebrar conquistas.",
    imagem: "/images/festas-praca-1920.webp",
  },
  {
    id: "jogos",
    chapeu: "Salão de jogos",
    tagline: "Diversão que aproxima",
    copy: "O salão de jogos estimula o convívio entre diferentes gerações, criando momentos de descontração, alegria e conexão.",
    imagem: "/images/salao-jogos-1920.webp",
  },
  {
    id: "brinquedoteca",
    chapeu: "Brinquedoteca",
    tagline: "Onde a imaginação brinca solta",
    copy: "Colorida, segura e acolhedora, a brinquedoteca é um convite para que as crianças explorem, criem e vivam sua infância com liberdade.",
    imagem: "/images/brinquedoteca-1920.webp",
  },
  {
    id: "esportes",
    chapeu: "Complexo esportivo",
    tagline: "A natureza joga junto",
    copy: "O complexo esportivo impressiona pela organização e integração dos espaços, revelando um lazer pensado em escala generosa e harmônica.",
    imagem: "/images/voo-esportes-1920.webp",
    destaque: true,
  },
  {
    id: "tenis",
    chapeu: "Tênis de saibro",
    tagline: "Moderno e tradicional ao mesmo tempo",
    copy: "A quadra de tênis de saibro oferece qualidade técnica e conforto, ideal para quem pratica o esporte em sua forma mais clássica.",
    imagem: "/images/tenis-1920.webp",
  },
  {
    id: "beach",
    chapeu: "Beach tennis",
    tagline: "Onde o verão nunca termina",
    copy: "A quadra de beach tennis traz o espírito descontraído da praia para o cotidiano.",
    imagem: "/images/beach-tennis-1920.webp",
  },
  {
    id: "poli",
    chapeu: "Poliesportiva",
    tagline: "Diversão garantida sem hora para acabar",
    copy: "A quadra poliesportiva é um espaço democrático, pensado para diferentes práticas e bons momentos de descontração.",
    imagem: "/images/quadra-poli-1920.webp",
  },
  {
    id: "churras",
    chapeu: "Churrasqueiras",
    tagline: "Encontros ao ar livre",
    copy: "As churrasqueiras convidam a encontros informais em meio à natureza.",
    imagem: "/images/churrasqueira-1920.webp",
  },
  {
    id: "jardim",
    chapeu: "Jardim dos sentidos",
    tagline: "O lazer reinterpretado como praça",
    copy: "Inspirada nas grandes praças urbanas europeias, a Praça Jardim dos Sentidos valoriza o encontro, o caminhar sem pressa e a convivência espontânea.",
    imagem: "/images/jardim-sentidos-1920.webp",
  },
  {
    id: "pet",
    chapeu: "Pet place",
    tagline: "Onde eles também se sentem em casa",
    copy: "Aqui, os pets têm seu próprio território para explorar, brincar e socializar. O pet place traduz o cuidado do Gran Reserva Treviso em cada detalhe.",
    imagem: "/images/pet-place-1920.webp",
  },
  {
    id: "minimercado",
    chapeu: "Minimercado & delivery",
    tagline: "Mais praticidade no dia a dia",
    copy: "O minimercado e o espaço delivery facilitam a rotina, oferecendo conveniência sem sair do empreendimento.",
    imagem: "/images/minimercado-1920.webp",
  },
  {
    id: "alameda",
    chapeu: "Alamedas",
    tagline: "O prazer de simplesmente caminhar",
    copy: "Alamedas arborizadas convidam a percursos tranquilos, momentos contemplativos ao entardecer e encontros que acontecem sem pressa.",
    imagem: "/images/alameda-1920.webp",
  },
  {
    id: "culdesac",
    chapeu: "Cul-de-sac",
    tagline: "Ruas com alma de vila",
    copy: "Percursos planejados em cul-de-sac diminuem a circulação de veículos e preservam a tranquilidade do entorno, remetendo ao charme das vilas.",
    imagem: "/images/cul-de-sac-1920.webp",
  },
  {
    id: "comerciais",
    chapeu: "Lotes comerciais",
    tagline: "Quando o tempo se torna um privilégio",
    copy: "A integração entre áreas residenciais e lotes comerciais cria um fluxo constante de pessoas. Mais visibilidade, mais clientes na porta e um ambiente propício para serviços e comércios prosperarem desde o primeiro dia.",
    imagem: "/images/mall-1920.webp",
  },
  {
    id: "heliponto",
    chapeu: "Exclusivo",
    tagline: "Quando chegar e partir ganham outras perspectivas",
    copy: "No Gran Reserva Treviso, chegar e partir ganham outras perspectivas. Um heliponto que valoriza cada instante, oferecendo rapidez nos deslocamentos e a conveniência de viver com total autonomia.",
    imagem: "/images/book-heliponto-1920.webp",
    destaque: true,
  },
];

/** 6 capítulos que viram seções editoriais grandes */
export const capitulosDestaque = capitulos.filter((c) => c.destaque);
/** Todos os capítulos ordenados para a galeria densa */
export const galeriaCompleta = capitulos;

/**
 * Masterplan — hotspots SVG sobre a imagem.
 * Posições em % relativas à imagem Implantação_Loteamento.
 * Ajustável via interface caso necessário.
 */
export type Hotspot = {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
  x: number; // % horizontal
  y: number; // % vertical
};

export const hotspots: Hotspot[] = [
  { id: "portaria", numero: "01", titulo: "Portaria", descricao: "Ponto de chegada com segurança 24h e administração.", x: 18, y: 78 },
  { id: "clube", numero: "02", titulo: "Clube", descricao: "Espaços integrados de lazer, eventos e convivência.", x: 32, y: 58 },
  { id: "verde", numero: "03", titulo: "Área verde preservada", descricao: "80.376 m² de preservação ambiental.", x: 70, y: 32 },
  { id: "jardim", numero: "04", titulo: "Praça Jardim dos Sentidos", descricao: "Lazer reinterpretado como praça europeia.", x: 45, y: 50 },
  { id: "esportes", numero: "05", titulo: "Complexo esportivo", descricao: "Tênis, beach tennis, poliesportiva e mais.", x: 52, y: 68 },
  { id: "playground", numero: "06", titulo: "Playground", descricao: "Área infantil ao ar livre.", x: 38, y: 72 },
  { id: "pet", numero: "07", titulo: "Pet place", descricao: "Território próprio para os pets da família.", x: 60, y: 75 },
  { id: "comerciais", numero: "08", titulo: "Lotes comerciais", descricao: "44 unidades integradas ao residencial.", x: 78, y: 82 },
  { id: "heliponto", numero: "09", titulo: "Heliponto", descricao: "Exclusividade e autonomia nos deslocamentos.", x: 82, y: 18 },
];

export const faq = [
  {
    q: "Quantos lotes o Gran Reserva Treviso oferece?",
    a: "O empreendimento conta com 525 lotes residenciais e 44 lotes comerciais, com dimensão padrão de 12 × 25 metros (300 m²) e frente de 12 metros.",
  },
  {
    q: "Onde fica o Gran Reserva Treviso?",
    a: "Em Paulínia (SP), Região Metropolitana de Campinas. A apenas 2 min da Rod. Zeferino Vaz, 5 min da Anhanguera e 32 min do Aeroporto Internacional de Viracopos.",
  },
  {
    q: "Como funciona o heliponto?",
    a: "O heliponto é um diferencial exclusivo do Gran Reserva Treviso. Oferece rapidez nos deslocamentos e autonomia aos moradores que precisam chegar e partir de forma prática. Detalhes operacionais serão informados pelos consultores.",
  },
  {
    q: "Quais são as amenidades de lazer?",
    a: "Mais de 18 itens: clube, complexo aquático com solarium, academia envidraçada, praça fitness, salão gourmet, praças e salão de festas, salão de jogos, brinquedoteca, playground, quadras de tênis de saibro, beach tennis e poliesportiva, churrasqueiras, Jardim dos Sentidos, pet place, minimercado e espaço delivery.",
  },
  {
    q: "Quem é a Granlote Urbanismo?",
    a: "Uma das maiores loteadoras do país, com mais de 20 cidades atendidas, 40+ empreendimentos lançados, 15 mil unidades vendidas e mais de 4 milhões de m² urbanizados.",
  },
  {
    q: "Já posso comprar?",
    a: "Estamos em pré-lançamento. Deixe seu contato neste formulário e um consultor do Gran Reserva Treviso falará com você para apresentar condições, disponibilidade e próximos passos.",
  },
];

export const legal = {
  razaoSocial: "Treviso Paulínia Empreendimentos Imobiliários SPE Ltda.",
  cnpj: "59.411.707/0001-33",
  sede: "Alameda Rio Negro, 1.105 – Cj. 24 – Sala 14 – Alphaville – Barueri/SP – 06454-000",
  registro: "R-4 da matrícula nº 1.390 do Oficial de Registro de Imóveis de Paulínia-SP, em 06/11/2025",
  alvara: "Decreto Municipal nº 8.829 de 31/01/2025, revalidado pelo Decreto nº 8.933 de 29/07/2025",
  graprohab: "028/2023 — Protocolo 17.894",
  vendasEmpresa: "Benedo Desenvolvimento Imobiliário Ltda.",
  creci: "CRECI 037603-J",
  disclaimer:
    "As imagens artísticas apresentadas são de caráter ilustrativo e poderão sofrer alterações sem aviso prévio. O mobiliário, utensílios, objetos de decoração e iluminação são apenas sugestões. Material preliminar de Março/2026.",
};

export const contato = {
  // TODO: substituir por dados reais do plantão
  whatsappNumero: "5519999999999",
  whatsappDisplay: "(19) 9 9999-9999",
  email: "contato@granreservatreviso.com.br",
};
