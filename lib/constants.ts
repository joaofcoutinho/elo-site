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
        group: "Serviços",
        items: [
          { label: "Elo Telelaudo", href: "/servicos/elo-telelaudo", description: "Laudos 24/7 de RM e TC" },
          { label: "Elo Consult", href: "/servicos/elo-consult", description: "Consultoria e gestão da qualidade" },
          { label: "Data Business", href: "/servicos/data-business", description: "Gestão de dados e insights" },
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
    value: 6,
    prefix: "+",
    label: "Hospitais atendidos",
    description: "Integração com operações simplificadas",
    icon: "Building2",
  },
  {
    value: 85,
    suffix: "%",
    label: "Aumento na eficiência",
    description: "Atendendo os mais rígidos SLAs",
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
    value: 309,
    prefix: "+",
    suffix: "K",
    label: "Exames laudados",
    description: "Realizados em 2023",
    icon: "FileCheck",
  },
];

export const SERVICES = [
  {
    icon: "FileText",
    title: "Elo Telelaudo",
    description: "Laudos 24/7 de RM e TC em todas as subespecialidades, com entrega ágil e alta precisão diagnóstica.",
    href: "/servicos/elo-telelaudo",
    image: "https://telemedicinamorsch.com.br/wp-content/uploads/2018/10/telelaudo.jpg",
  },
  {
    icon: "BarChart2",
    title: "Elo Consult",
    description: "Consultoria especializada em gestão da qualidade, processos diagnósticos e certificações ISO, ONA e PADI.",
    href: "/servicos/elo-consult",
    image: "https://star.med.br/wp-content/uploads/2023/11/radiologista-em-duvida-sobre-o-diagnostico.jpg",
  },
  {
    icon: "Database",
    title: "Data Business",
    description: "Gestão de dados clínicos e insights preditivos para decisões mais eficientes e rentáveis.",
    href: "/servicos/data-business",
    image: "https://fcamara.com/blog/wp-content/uploads/2024/06/Saude-Health-Data-Analytics-fcamara-1024x598.webp",
  },
];

export const WHY_US = [
  {
    icon: "MonitorCheck",
    title: "Tecnologia de ponta",
    description:
      "Monitores LG certificados pela ANVISA para visualização dos exames — mais precisão.",
  },
  {
    icon: "Wallet",
    title: "Soluções econômicas",
    description:
      "Plataforma web (PACS ou PACS/RIS) e armazenamento em nuvem — mais eficiente, menor custo.",
  },
  {
    icon: "Headphones",
    title: "Suporte 24/7",
    description:
      "Médicos sempre disponíveis para atender sua demanda diária, urgente ou excedente.",
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
      { label: "Elo Consult", href: "/servicos/elo-consult" },
      { label: "Data Business", href: "/servicos/data-business" },
    ],
  },
];
