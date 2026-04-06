import type { Metadata } from "next";
import { LegalPage, Section, P, Ul, Li, Strong } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade | Elo e-Health",
  description:
    "Saiba como a Elo e-Health coleta, trata e protege seus dados pessoais, em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Comprometimento com a transparência e a proteção dos seus dados, em conformidade com a LGPD."
      updatedAt="01 de abril de 2025"
    >
      <Section title="1. Introdução e Controlador">
        <P>
          A <Strong>Elo e-Health Ltda.</Strong> ("Elo e-Health", "nós" ou "empresa"), inscrita no
          CNPJ sob o nº [CNPJ], com sede na R. José de Almeida Rebouças, 20 – Ed. Premium Office –
          Torre Business, sala 413 – Mata da Praia, Vitória/ES, é a <Strong>controladora</Strong>{" "}
          dos dados pessoais tratados no contexto da prestação de serviços de telerradiologia.
        </P>
        <P>
          Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos
          os dados pessoais de nossos clientes, colaboradores, parceiros e pacientes cujas imagens
          são encaminhadas para laudar, em conformidade com a{" "}
          <Strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</Strong> e a{" "}
          Resolução CFM nº 2.314/2022.
        </P>
      </Section>

      <Section title="2. Dados Coletados">
        <P>
          <Strong>2.1 Dados de clientes e parceiros (clínicas e hospitais):</Strong>
        </P>
        <Ul>
          <Li>Razão social, CNPJ, endereço e dados de contato da instituição</Li>
          <Li>Nome, e-mail, telefone e cargo dos responsáveis pelo relacionamento</Li>
          <Li>Dados financeiros para faturamento (dados bancários, notas fiscais)</Li>
          <Li>Dados de acesso à plataforma (login, logs de uso)</Li>
        </Ul>
        <P>
          <Strong>2.2 Dados de pacientes (dados sensíveis de saúde):</Strong>
        </P>
        <Ul>
          <Li>Nome completo, data de nascimento e sexo</Li>
          <Li>Número de prontuário ou identificador do exame</Li>
          <Li>Imagens médicas (DICOM) de RM, TC e demais modalidades</Li>
          <Li>Informações clínicas relevantes fornecidas pelo solicitante do exame</Li>
          <Li>Laudo médico emitido pelo radiologista responsável</Li>
        </Ul>
        <P>
          <Strong>2.3 Dados coletados automaticamente (site e plataforma):</Strong>
        </P>
        <Ul>
          <Li>Endereço IP, tipo de navegador e sistema operacional</Li>
          <Li>Páginas acessadas, tempo de sessão e eventos de interação</Li>
          <Li>Cookies técnicos e de desempenho (ver seção 9)</Li>
        </Ul>
      </Section>

      <Section title="3. Finalidade do Tratamento">
        <P>Os dados pessoais são tratados para as seguintes finalidades:</P>
        <Ul>
          <Li>Prestação dos serviços de telerradiologia contratados, incluindo emissão de laudos médicos</Li>
          <Li>Gestão do relacionamento comercial com clientes e parceiros</Li>
          <Li>Faturamento, cobrança e cumprimento de obrigações contratuais e fiscais</Li>
          <Li>Melhoria contínua da qualidade dos serviços e dos sistemas utilizados</Li>
          <Li>Cumprimento de obrigações legais e regulatórias (CFM, ANVISA, LGPD)</Li>
          <Li>Comunicações de marketing e novidades, quando houver consentimento expresso</Li>
          <Li>Proteção dos direitos da empresa em eventuais disputas judiciais ou administrativas</Li>
        </Ul>
      </Section>

      <Section title="4. Base Legal para o Tratamento">
        <P>O tratamento de dados pela Elo e-Health fundamenta-se nas seguintes bases legais da LGPD:</P>
        <Ul>
          <Li><Strong>Execução de contrato</Strong> (art. 7º, V) — para dados necessários à prestação dos serviços contratados</Li>
          <Li><Strong>Cumprimento de obrigação legal</Strong> (art. 7º, II) — para atendimento a normas do CFM, ANVISA e Receita Federal</Li>
          <Li><Strong>Tutela da saúde</Strong> (art. 11, II, f) — para o tratamento de dados sensíveis de saúde dos pacientes</Li>
          <Li><Strong>Legítimo interesse</Strong> (art. 7º, IX) — para melhoria de serviços, prevenção a fraudes e comunicações institucionais</Li>
          <Li><Strong>Consentimento</Strong> (art. 7º, I) — para envio de comunicações de marketing quando aplicável</Li>
        </Ul>
      </Section>

      <Section title="5. Compartilhamento de Dados">
        <P>
          A Elo e-Health não vende dados pessoais. O compartilhamento ocorre apenas nas
          situações abaixo:
        </P>
        <Ul>
          <Li><Strong>Médicos radiologistas parceiros</Strong> — para emissão dos laudos, sob contrato de sigilo e responsabilidade médica</Li>
          <Li><Strong>Prestadores de serviços de TI</Strong> — plataforma PACS, armazenamento em nuvem e segurança da informação, mediante cláusulas contratuais adequadas</Li>
          <Li><Strong>Autoridades públicas</Strong> — quando exigido por ordem judicial, regulatória ou fiscalizatória</Li>
          <Li><Strong>Auditores e consultores</Strong> — em processos de certificação (ISO, ONA) ou auditoria contábil, sob dever de sigilo</Li>
        </Ul>
        <P>
          Em nenhuma hipótese dados de pacientes são compartilhados com terceiros para fins
          comerciais, publicitários ou de pesquisa sem consentimento expresso do titular.
        </P>
      </Section>

      <Section title="6. Transferência Internacional de Dados">
        <P>
          Os dados armazenados em infraestrutura de nuvem podem ser hospedados em servidores
          localizados fora do Brasil. Nesses casos, a Elo e-Health assegura que os provedores
          adotam nível de proteção adequado e compatível com a LGPD, por meio de cláusulas
          contratuais padrão ou certificações internacionais reconhecidas (ex.: ISO 27001,
          SOC 2, GDPR compliance).
        </P>
      </Section>

      <Section title="7. Retenção e Descarte de Dados">
        <P>Os dados são retidos pelos seguintes prazos mínimos:</P>
        <Ul>
          <Li><Strong>Laudos médicos e imagens diagnósticas:</Strong> 20 anos, conforme Resolução CFM nº 1.821/2007</Li>
          <Li><Strong>Dados contratuais e financeiros:</Strong> 5 anos após o encerramento do contrato, conforme legislação fiscal e civil</Li>
          <Li><Strong>Logs de acesso à plataforma:</Strong> 6 meses, conforme Marco Civil da Internet (Lei nº 12.965/2014)</Li>
          <Li><Strong>Dados de marketing (com consentimento):</Strong> até a revogação do consentimento</Li>
        </Ul>
        <P>
          Após os prazos de retenção, os dados são descartados de forma segura, mediante
          processos de anonimização ou exclusão definitiva.
        </P>
      </Section>

      <Section title="8. Direitos dos Titulares">
        <P>
          Em conformidade com os arts. 17 a 22 da LGPD, os titulares de dados pessoais têm
          direito a:
        </P>
        <Ul>
          <Li><Strong>Confirmação e acesso</Strong> — saber se tratamos seus dados e obter cópia</Li>
          <Li><Strong>Correção</Strong> — solicitar a retificação de dados incompletos, inexatos ou desatualizados</Li>
          <Li><Strong>Anonimização, bloqueio ou eliminação</Strong> — de dados desnecessários ou tratados em desconformidade</Li>
          <Li><Strong>Portabilidade</Strong> — receber seus dados em formato estruturado para outro fornecedor</Li>
          <Li><Strong>Revogação do consentimento</Strong> — para tratamentos baseados em consentimento</Li>
          <Li><Strong>Oposição</Strong> — ao tratamento realizado com base em legítimo interesse</Li>
          <Li><Strong>Informação sobre compartilhamento</Strong> — saber com quem seus dados são compartilhados</Li>
        </Ul>
        <P>
          Para exercer seus direitos, entre em contato com nosso <Strong>Encarregado de Dados (DPO)</Strong>{" "}
          pelo e-mail: <Strong>privacidade@eloe-health.com.br</Strong>. Respondemos em até{" "}
          <Strong>15 dias úteis</Strong>.
        </P>
      </Section>

      <Section title="9. Cookies e Tecnologias de Rastreamento">
        <P>Nosso site utiliza os seguintes tipos de cookies:</P>
        <Ul>
          <Li><Strong>Cookies essenciais</Strong> — necessários ao funcionamento básico do site; não podem ser desativados</Li>
          <Li><Strong>Cookies de desempenho</Strong> — coletam dados agregados e anônimos sobre o uso do site para melhorias (ex.: Google Analytics)</Li>
          <Li><Strong>Cookies de funcionalidade</Strong> — lembram preferências do usuário (idioma, configurações)</Li>
        </Ul>
        <P>
          Não utilizamos cookies de publicidade comportamental ou rastreamento cross-site. O
          usuário pode gerenciar suas preferências de cookies a qualquer momento pelas
          configurações do navegador.
        </P>
      </Section>

      <Section title="10. Segurança da Informação">
        <P>
          A Elo e-Health adota medidas técnicas e organizacionais para proteger os dados pessoais
          contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo:
        </P>
        <Ul>
          <Li>Criptografia de dados em trânsito (TLS/HTTPS) e em repouso</Li>
          <Li>Controle de acesso baseado em perfis e autenticação multifator</Li>
          <Li>Monitoramento contínuo de segurança e logs de auditoria</Li>
          <Li>Backups regulares com criptografia e armazenamento redundante</Li>
          <Li>Treinamentos periódicos de segurança da informação para a equipe</Li>
        </Ul>
        <P>
          Em caso de incidente de segurança que possa acarretar risco ou dano aos titulares,
          a Elo e-Health comunicará a <Strong>Autoridade Nacional de Proteção de Dados (ANPD)</Strong>{" "}
          e os titulares afetados no prazo de 72 horas, conforme exigido pela LGPD.
        </P>
      </Section>

      <Section title="11. Encarregado de Dados (DPO)">
        <P>
          O Encarregado pelo tratamento de dados pessoais da Elo e-Health é responsável por
          receber comunicações dos titulares e da ANPD, orientar colaboradores e assegurar o
          cumprimento desta Política.
        </P>
        <Ul>
          <Li>E-mail: privacidade@eloe-health.com.br</Li>
          <Li>Telefone: +55 27 98139-7567</Li>
        </Ul>
      </Section>

      <Section title="12. Alterações desta Política">
        <P>
          Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças
          em nossas práticas de tratamento de dados ou em obrigações legais. Alterações
          relevantes serão comunicadas por e-mail ou por aviso em destaque no site com
          antecedência mínima de <Strong>15 dias</Strong>.
        </P>
        <P>
          A versão mais recente estará sempre disponível em{" "}
          <Strong>www.eloe-health.com.br/privacidade</Strong>.
        </P>
      </Section>

      <Section title="13. Legislação Aplicável e Foro">
        <P>
          Esta Política é regida pela legislação brasileira, em especial pela LGPD (Lei nº
          13.709/2018). Para dirimir quaisquer controvérsias, fica eleito o foro da comarca de{" "}
          <Strong>Vitória, Estado do Espírito Santo</Strong>.
        </P>
      </Section>
    </LegalPage>
  );
}
