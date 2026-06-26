import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Política de Privacidade | Oliveira Quintal Advocacia",
  description:
    "Entenda como a Oliveira Quintal Advocacia coleta, utiliza e protege os seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="border-b border-[#741b16]/12 py-5 px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2.5 w-fit">
          <Image
            src="/logo.png"
            alt="Oliveira Quintal Advocacia"
            width={22}
            height={32}
            className="object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[12px] tracking-[0.18em] uppercase text-[#741b16] font-semibold leading-none">
              Oliveira Quintal
            </span>
            <span className="text-[6.5px] tracking-[0.38em] uppercase text-[#bb2017]/70 font-medium mt-[3px]">
              Advocacia
            </span>
          </div>
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-[9.5px] font-bold tracking-[0.32em] uppercase text-[#bb2017] mb-3">
            Transparência e Sigilo
          </p>
          <h1 className="font-sans font-black uppercase text-[#3d3d3d] text-3xl md:text-4xl leading-[1.1] tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-[11px] text-[#9d9695]">
            Última atualização: junho de 2025
          </p>
        </div>

        <div className="space-y-8 text-[13px] text-[#3d3d3d]/75 leading-relaxed">
          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              1. Quem Somos
            </h2>
            <p>
              A <strong className="text-[#741b16]">Oliveira Quintal Advocacia</strong>, com sede na Avenida
              Nossa Senhora do Ó, n° 865, Sala 1510, Limão, São Paulo-SP — CEP 02715-000, é responsável
              pelo tratamento dos dados pessoais coletados neste site, em conformidade com a Lei Geral de
              Proteção de Dados Pessoais (LGPD — Lei n° 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              2. Dados Coletados
            </h2>
            <p>Podemos coletar as seguintes categorias de dados ao interagir com nosso site ou canais de atendimento:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside pl-2">
              <li>Nome completo e dados de contato (telefone, e-mail);</li>
              <li>Dados fornecidos voluntariamente via formulários ou WhatsApp;</li>
              <li>Dados de navegação (cookies de sessão, endereço IP, páginas visitadas);</li>
              <li>Informações jurídicas compartilhadas durante consultas iniciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              3. Finalidade do Tratamento
            </h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside pl-2">
              <li>Viabilizar o contato e o agendamento de consultas jurídicas;</li>
              <li>Prestar os serviços advocatícios contratados;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Melhorar a experiência de navegação e o desempenho do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              4. Base Legal
            </h2>
            <p>
              O tratamento é fundamentado no consentimento do titular (art. 7°, I), na execução de contrato
              ou procedimentos preliminares (art. 7°, V), e no cumprimento de obrigação legal (art. 7°, II),
              conforme previsto na LGPD.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados <strong>não são vendidos nem cedidos</strong> a terceiros para fins comerciais. O
              compartilhamento ocorre apenas quando estritamente necessário para a prestação dos serviços
              (ex.: sistemas de agendamento, plataformas de videoconferência) ou por determinação legal.
              Todos os fornecedores são obrigados a manter sigilo equivalente.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              6. Sigilo Profissional
            </h2>
            <p>
              Toda informação de natureza jurídica compartilhada com o escritório está protegida pelo
              sigilo profissional previsto no Estatuto da OAB (Lei n° 8.906/1994) e no Código de Ética e
              Disciplina da OAB, além das proteções conferidas pela LGPD.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              7. Cookies
            </h2>
            <p>
              Este site utiliza cookies de sessão para garantir o funcionamento adequado das páginas. Não
              utilizamos cookies de rastreamento comportamental ou publicidade direcionada. Você pode
              desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas
              funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              8. Retenção dos Dados
            </h2>
            <p>
              Os dados são mantidos pelo período necessário à prestação dos serviços ou ao cumprimento de
              obrigação legal. Dados de clientes são conservados pelo prazo mínimo exigido pelas normas
              aplicáveis ao exercício da advocacia.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              9. Seus Direitos
            </h2>
            <p>Em conformidade com a LGPD, você tem o direito de:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside pl-2">
              <li>Confirmar a existência de tratamento e acessar seus dados;</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
              <li>Pedir a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer desses direitos, entre em contato pelo WhatsApp ou pelo endereço
              indicado no site.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              10. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso
              não autorizado, perda, alteração ou divulgação indevida. As comunicações entre cliente e
              escritório são realizadas por canais criptografados.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              11. Alterações nesta Política
            </h2>
            <p>
              Esta Política pode ser atualizada periodicamente. A versão mais recente estará sempre
              disponível nesta página, com a data da última revisão indicada no topo.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#3d3d3d] text-[15px] mb-3 uppercase tracking-wide">
              12. Contato
            </h2>
            <p>
              Dúvidas ou solicitações relacionadas a esta Política devem ser encaminhadas à:
            </p>
            <div className="mt-3 p-4 border-l-4 border-[#bb2017] bg-[#f9f5f5] text-[12px]">
              <strong className="text-[#741b16]">Oliveira Quintal Advocacia</strong><br />
              Av. Nossa Senhora do Ó, 865 — Sala 1510 · São Paulo-SP<br />
              CEP 02715-000 · Inscrição na OAB/SP
            </div>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[#741b16]/12">
          <Link
            href="/"
            className="text-[11px] font-bold tracking-widest uppercase text-[#bb2017] hover:text-[#741b16] transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </main>
    </div>
  );
}
