import type { Metadata } from "next";
import { LegalPage, Section, P, Ul, Li, Strong } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Termos e Condições | Elo e-Health",
  description: "Leia os Termos e Condições de uso dos serviços da Elo e-Health.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos e Condições"
      subtitle="Leia com atenção os termos que regem a contratação e o uso dos serviços da Elo e-Health."
      updatedAt="01 de abril de 2025"
    >
      <Section title="1. Aceitação dos Termos">
        <P>
          Ao contratar, acessar ou utilizar qualquer serviço da <Strong>Elo e-Health Ltda.</Strong>{" "}
          ("Elo e-Health", "nós" ou "empresa"), o Cliente declara ter lido, compreendido e aceito
          integralmente estes Termos e Condições ("Termos"), bem como nossa Política de Privacidade.
        </P>
        <P>
          Caso não concorde com qualquer disposição aqui contida, o Cliente deve abster-se de
          utilizar nossos serviços e entrar em contato pelo e-mail{" "}
          <Strong>comercial@eloe-health.com.br</Strong> para esclarecimentos.
        </P>
      </Section>

      <Section title="2. Sobre a Elo e-Health">
        <P>
          A Elo e-Health é uma empresa especializada em <Strong>telerradiologia</Strong>, prestando
          serviços de elaboração de laudos médicos remotos, gestão de imagens diagnósticas,
          consultoria em qualidade e soluções de dados para clínicas e hospitais. Nossos serviços
          incluem, mas não se limitam a:
        </P>
        <Ul>
          <Li>Telelaudos 24/7 de exames de Ressonância Magnética (RM) e Tomografia Computadorizada (TC)</Li>
          <Li>Elo Telecommand — cobertura programada de exames em janelas de 12h, 16h ou 24/7</Li>
          <Li>Elo Consult — análise, diagnóstico de processos e gestão da qualidade (ISO, ONA, PADI)</Li>
          <Li>Data Business — organização de dados clínicos, cenários e insights preditivos</Li>
        </Ul>
      </Section>

      <Section title="3. Contratação e Vigência">
        <P>
          A prestação dos serviços é formalizada por meio de contrato ou proposta comercial assinada
          entre as partes. Estes Termos complementam e integram qualquer instrumento contratual
          firmado, prevalecendo em caso de omissão.
        </P>
        <P>
          O prazo de vigência, as condições de renovação e eventuais períodos de fidelidade serão
          especificados na proposta comercial ou contrato particular firmado com o Cliente.
        </P>
      </Section>

      <Section title="4. Obrigações da Elo e-Health">
        <P>A Elo e-Health se compromete a:</P>
        <Ul>
          <Li>Prestar os serviços contratados com qualidade, agilidade e dentro dos SLAs acordados</Li>
          <Li>Manter equipe médica qualificada, com registro ativo no Conselho Federal de Medicina (CFM)</Li>
          <Li>Garantir a confidencialidade das informações e imagens diagnósticas recebidas</Li>
          <Li>Tratar os dados pessoais e sensíveis de saúde em conformidade com a LGPD (Lei nº 13.709/2018)</Li>
          <Li>Disponibilizar suporte técnico durante os horários contratados</Li>
          <Li>Comunicar imediatamente qualquer incidente que possa afetar a disponibilidade do serviço</Li>
        </Ul>
      </Section>

      <Section title="5. Obrigações do Cliente">
        <P>O Cliente se compromete a:</P>
        <Ul>
          <Li>Fornecer imagens, dados e informações clínicas completas, legíveis e de boa qualidade técnica</Li>
          <Li>Garantir que os dados de pacientes sejam coletados e transmitidos com consentimento e em conformidade com a LGPD</Li>
          <Li>Manter a infraestrutura técnica necessária para integração com os sistemas da Elo e-Health</Li>
          <Li>Efetuar os pagamentos nas condições e prazos acordados em contrato</Li>
          <Li>Não utilizar os laudos emitidos para finalidades diversas das previstas em contrato</Li>
          <Li>Comunicar quaisquer irregularidades ou inconsistências nos laudos recebidos no prazo de 48 horas</Li>
        </Ul>
      </Section>

      <Section title="6. Propriedade Intelectual">
        <P>
          Todos os laudos médicos emitidos pela Elo e-Health são de <Strong>propriedade intelectual
          do médico responsável</Strong> e da empresa, sendo licenciados ao Cliente exclusivamente
          para uso clínico e assistencial do paciente em questão.
        </P>
        <P>
          É vedado ao Cliente reproduzir, distribuir, comercializar ou utilizar os laudos para
          fins de treinamento de inteligência artificial, produção de datasets ou qualquer
          finalidade não expressamente autorizada por escrito pela Elo e-Health.
        </P>
        <P>
          A marca "Elo e-Health", logotipos, sistemas e materiais da empresa são protegidos pela
          legislação de propriedade intelectual brasileira e não podem ser utilizados sem
          autorização prévia e expressa.
        </P>
      </Section>

      <Section title="7. Responsabilidade Médica">
        <P>
          Os laudos emitidos pela Elo e-Health são elaborados por <Strong>médicos radiologistas
          devidamente habilitados</Strong> e registrados no CFM, sendo documentos de
          responsabilidade técnica do profissional signatário.
        </P>
        <P>
          A responsabilidade da Elo e-Health restringe-se à qualidade técnica do laudo com base
          nas imagens e informações clínicas fornecidas pelo Cliente. A Elo e-Health não se
          responsabiliza por:
        </P>
        <Ul>
          <Li>Diagnósticos equivocados decorrentes de imagens de baixa qualidade técnica</Li>
          <Li>Omissão de informações clínicas relevantes pelo solicitante do exame</Li>
          <Li>Interpretação clínica pelo médico assistente além do escopo radiológico do laudo</Li>
        </Ul>
      </Section>

      <Section title="8. Limitação de Responsabilidade">
        <P>
          Na extensão máxima permitida pela legislação aplicável, a responsabilidade total da
          Elo e-Health por danos decorrentes da prestação de serviços ficará limitada ao valor
          efetivamente pago pelo Cliente no mês de ocorrência do evento danoso.
        </P>
        <P>
          A Elo e-Health não se responsabiliza por danos indiretos, lucros cessantes, perda de
          dados ou danos emergentes não diretamente causados por falha comprovada na prestação
          do serviço contratado.
        </P>
      </Section>

      <Section title="9. Confidencialidade e Sigilo">
        <P>
          Ambas as partes se obrigam a manter <Strong>absoluto sigilo</Strong> sobre todas as
          informações confidenciais trocadas no âmbito da prestação de serviços, incluindo dados
          de pacientes, processos operacionais, valores comerciais e tecnologias utilizadas.
        </P>
        <P>
          Essa obrigação de confidencialidade persiste por um prazo de <Strong>5 (cinco) anos</Strong>{" "}
          após o término da relação contratual, salvo disposição diversa em contrato.
        </P>
      </Section>

      <Section title="10. Rescisão">
        <P>
          O contrato poderá ser rescindido nas seguintes hipóteses:
        </P>
        <Ul>
          <Li>Por acordo mútuo entre as partes, formalizado por escrito</Li>
          <Li>Por descumprimento de obrigações contratuais, após notificação com prazo de 15 dias para regularização</Li>
          <Li>Por iniciativa de qualquer das partes, com aviso prévio de 30 dias, salvo cláusula de fidelidade</Li>
          <Li>Imediatamente, em caso de falência, insolvência ou encerramento das atividades de qualquer das partes</Li>
        </Ul>
        <P>
          Em caso de rescisão, o Cliente deverá salvar localmente os laudos de sua competência,
          pois o acesso à plataforma da Elo e-Health será encerrado após o período de transição
          acordado.
        </P>
      </Section>

      <Section title="11. Alterações dos Termos">
        <P>
          A Elo e-Health reserva-se o direito de atualizar estes Termos a qualquer momento.
          Alterações relevantes serão comunicadas ao Cliente com antecedência mínima de{" "}
          <Strong>30 dias</Strong> por e-mail ou por aviso na plataforma.
        </P>
        <P>
          A continuidade do uso dos serviços após a comunicação de alterações implica a
          aceitação automática dos novos Termos.
        </P>
      </Section>

      <Section title="12. Legislação e Foro">
        <P>
          Estes Termos são regidos pelas leis da <Strong>República Federativa do Brasil</Strong>.
          Para dirimir quaisquer controvérsias decorrentes deste instrumento, as partes elegem o
          foro da comarca de <Strong>Vitória, Estado do Espírito Santo</Strong>, com renúncia
          expressa a qualquer outro, por mais privilegiado que seja.
        </P>
      </Section>

      <Section title="13. Contato">
        <P>
          Para dúvidas, solicitações ou notificações relacionadas a estes Termos, entre em contato:
        </P>
        <Ul>
          <Li>E-mail: comercial@eloe-health.com.br</Li>
          <Li>Telefone: +55 27 98139-7567</Li>
          <Li>Endereço: R. José de Almeida Rebouças, 20 – Ed. Premium Office – Torre Business, sala 413 – Mata da Praia, Vitória - ES</Li>
        </Ul>
      </Section>
    </LegalPage>
  );
}
