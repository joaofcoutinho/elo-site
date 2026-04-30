export const WHATSAPP_URL = "https://wa.me/5527981397567";
export const WHATSAPP_MESSAGE = "https://wa.me/5527981397567?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Elo%20e-Health.";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      {
        group: "Radiologia e Diagnóstico por Imagem",
        items: [
          { label: "Elo Telelaudo", href: "/servicos/elo-telelaudo", description: "Laudos 24/7 de RM e TC" },
          { label: "Telecomando", href: "/servicos/telecomando", description: "Operação remota de equipamentos" },
        ],
      },
      {
        group: "Consultoria & Pessoas",
        items: [
          { label: "Elo Consult", href: "/servicos/elo-consult", description: "Processos, dados e estratégia" },
          { label: "Elo People", href: "/servicos/people", description: "Gestão e estrutura de pessoas" },
        ],
      },
      {
        group: "Tecnologia & Educação",
        items: [
          { label: "Elo Tech & System", href: "/servicos/elo-tech", description: "PACS/RIS com IA integrada" },
          { label: "Elo Education", href: "/servicos/elo-education", description: "Formação para profissionais de saúde" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
];

export const CONTACT = {
  email: "comercial@eloe-health.com.br",
  phone1: "+55 27 99890-7202",
  phone2: "+55 27 98139-7567",
  address: "R. José de Almeida Rebouças, 20 – Ed. Premium Office – Torre Business, sala 413 – Mata da Praia, Vitória - ES",
  linkedin: "https://www.linkedin.com/company/elo-e-health",
  instagram: "https://www.instagram.com/eloe_health",
  facebook: "https://www.facebook.com/eloehealth",
};

export const METRICS = [
  {
    value: 10,
    label: "Presença em Estados",
    description: "Operamos nacionalmente",
    icon: "MapPin",
  },
  {
    value: 85,
    suffix: "%",
    label: "Aumento na eficiência",
    description: "Prazos rigorosos de entrega",
    icon: "TrendingUp",
  },
  {
    value: 90,
    suffix: "%",
    label: "Aprovação dos médicos",
    description: "Confiabilidade em todas as especialidades",
    icon: "ThumbsUp",
  },
  {
    value: 15,
    prefix: "+",
    label: "Hospitais atendidos",
    description: "Telerradiologia com excelência",
    icon: "Hospital",
  },
];

export const SERVICES = [
  {
    icon: "FileText",
    title: "Elo Telelaudo",
    description: "Laudos 24/7 de RM e TC em todas as subespecialidades, com entrega ágil e alta precisão diagnóstica.",
    href: "/servicos/elo-telelaudo",
    image: null,
  },
  {
    icon: "Monitor",
    title: "Telecomando",
    description: "Técnicos especializados operam remotamente seus equipamentos de RM e TC com protocolos otimizados.",
    href: "/servicos/telecomando",
    image: null,
  },
  {
    icon: "BarChart2",
    title: "Elo Consult",
    description: "Consultoria que atua dentro da sua operação conectando dados, processos e estratégia para transformar resultados.",
    href: "/servicos/elo-consult",
    image: null,
  },
  {
    icon: "Users",
    title: "Elo People",
    description: "Estrutura de pessoas para quem precisa de performance real — liderança, cultura e operação integradas.",
    href: "/servicos/people",
    image: null,
  },
  {
    icon: "Cpu",
    title: "Elo Tech & System",
    description: "O sistema completo para sua clínica: PACS/RIS próprio com IA integrada e acesso em tempo real.",
    href: "/servicos/elo-tech",
    image: null,
  },
  {
    icon: "GraduationCap",
    title: "Elo Education",
    description: "Formação prática para profissionais da saúde que querem crescer com clareza estratégica e liderança.",
    href: "/servicos/elo-education",
    image: null,
  },
];

export const WHY_US = [
  {
    icon: "Plug",
    title: "Integração sem fricção",
    description:
      "A Elo e-Health realiza o diagnóstico de forma personalizada e adaptada para sua realidade. Nenhuma troca de equipamento é necessária.",
  },
  {
    icon: "Users2",
    title: "Equipe especializada própria",
    description:
      "Corpo clínico, técnicos e suporte próprio com protocolos rigorosos seguidos do início ao fim.",
  },
  {
    icon: "TrendingDown",
    title: "Redução real de custos",
    description:
      "Menos ociosidade, mesma estrutura local, mais exames por turno.",
  },
  {
    icon: "Award",
    title: "Qualidade mensurável",
    description:
      "Imagens mais nítidas, laudos mais assertivos, mais pacientes satisfeitos.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "telerradiologia-reducao-custos",
    title: "Como a telerradiologia reduz custos em clínicas de médio porte",
    date: "15 Mar 2025",
    category: "Telerradiologia",
    excerpt: "Descubra como centros de diagnóstico estão economizando até 40% com laudos remotos.",
    image: "https://telemedicinamorsch.com.br/wp-content/uploads/2019/09/telerradiologia-2024-telemedicina-morsch.jpg",
  },
  {
    slug: "ia-diagnostico-imagem",
    title: "Inteligência Artificial no diagnóstico por imagem: o futuro já chegou",
    date: "02 Mar 2025",
    category: "Tecnologia",
    excerpt: "A Elena IA está transformando a forma como laudos de TC e RM são realizados.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAL8banUC3gad_NmIgh5ZUoIHJgpmoK1z-GA&s",
  },
  {
    slug: "pacs-ris-hospitais",
    title: "PACS + RIS: por que todo hospital precisa de uma plataforma integrada",
    date: "18 Fev 2025",
    category: "Gestão",
    excerpt: "Entenda como a integração PACS/RIS elimina gargalos e aumenta a produtividade.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4YwFSI4jNLHpmwJwCUb6F5KTmX0YyCd8WA&s",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Nossos médicos", href: "/sobre#medicos" },
      { label: "Trabalhe conosco", href: "/trabalhe-conosco" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Elo Telelaudo", href: "/servicos/elo-telelaudo" },
      { label: "Telecomando", href: "/servicos/telecomando" },
      { label: "Elo Consult", href: "/servicos/elo-consult" },
      { label: "Elo People", href: "/servicos/people" },
      { label: "Elo Tech & System", href: "/servicos/elo-tech" },
      { label: "Elo Education", href: "/servicos/elo-education" },
    ],
  },
];
