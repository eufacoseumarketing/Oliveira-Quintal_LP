"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { SiteHeader } from "@/components/ui/site-header";
import {
  Scale,
  Shield,
  Heart,
  Users,
  FileText,
  BookOpen,
  Building2,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";

// ── WhatsApp links ─────────────────────────────────────────────────────────
const WA_BASE = "https://api.whatsapp.com/send?phone=5511926823330&text=";
const SOURCE_URL = "&source_url=https://terezinhaquintal.adv.br";
const WA_MAIN = `${WA_BASE}${encodeURIComponent(
  "Olá, vim pelo site e gostaria de agendar um atendimento especializado.%0A%0AFonte: CTA"
)}${SOURCE_URL}`;
const WA_FLOAT = `${WA_BASE}${encodeURIComponent(
  "Olá, vim pelo site e gostaria de agendar um atendimento especializado.%0A%0AFonte: Flutuante"
)}${SOURCE_URL}`;
function wa(msg: string) {
  return `${WA_BASE}${encodeURIComponent(msg)}${SOURCE_URL}`;
}

// ── Button styles ──────────────────────────────────────────────────────────
// Solid on dark backgrounds
const SOLID =
  "bg-[#bb2017] text-white font-bold text-[11px] uppercase tracking-widest px-7 py-3.5 hover:bg-[#741b16] transition-colors inline-block";
// Outlined on dark backgrounds
const OUTLINE_DARK =
  "border-2 border-white text-white font-bold text-[11px] uppercase tracking-widest px-7 py-3.5 hover:bg-white hover:text-[#741b16] transition-colors inline-block";
// Solid wine on light backgrounds
const WINE =
  "bg-[#741b16] text-white font-bold text-[11px] uppercase tracking-widest px-7 py-3.5 hover:bg-[#bb2017] transition-colors inline-block";

// ── Animation presets ──────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// ── Section eyebrow labels ─────────────────────────────────────────────────
function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
      <div className="w-7 h-px bg-[#bb2017]" />
      <span className="text-[9.5px] font-bold tracking-[0.32em] uppercase text-[#bb2017]/80">
        {children}
      </span>
    </div>
  );
}
function LabelLight({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
      <div className="w-7 h-px bg-white/50" />
      <span className="text-[9.5px] font-bold tracking-[0.32em] uppercase text-white/55">
        {children}
      </span>
    </div>
  );
}

// ── Service card (light section) ───────────────────────────────────────────
interface CardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  body: string;
  cta: string;
  msg: string;
  hideCta?: boolean;
  image?: string;
}
function CardLight({ icon, tag, title, body, cta, msg, hideCta }: CardProps) {
  return (
    <motion.div
      variants={fadeItem}
      className="bg-white border border-[#741b16]/18 p-6 flex flex-col gap-4 hover:border-[#741b16]/45 hover:shadow-md transition-all group h-full"
    >
      <div className="text-[#741b16]/70 group-hover:text-[#bb2017] transition-colors w-7 h-7">
        {icon}
      </div>
      <div>
        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#9d9695]">
          {tag}
        </span>
        <h4 className="font-sans text-[1.1rem] font-bold text-[#3d3d3d] mt-1 leading-snug uppercase tracking-tight">
          {title}
        </h4>
      </div>
      <p className="text-[13px] font-normal leading-relaxed text-[#9d9695] flex-1">{body}</p>
      {!hideCta && (
        <a
          href={wa(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${WINE} self-start text-[9.5px]`}
        >
          {cta}
        </a>
      )}
    </motion.div>
  );
}

// ── Service card (dark section) ────────────────────────────────────────────
function CardDark({ icon, tag, title, body }: CardProps) {
  return (
    <motion.div
      variants={fadeItem}
      className="relative bg-black/45 border border-white/15 p-6 flex flex-col gap-4 hover:bg-black/55 transition-colors group overflow-hidden"
    >
      <div className="text-white/65 group-hover:text-white transition-colors w-7 h-7">
        {icon}
      </div>
      <div>
        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/50">
          {tag}
        </span>
        <h4 className="font-sans text-[1.1rem] font-bold text-white mt-1 leading-snug uppercase tracking-tight">
          {title}
        </h4>
      </div>
      <p className="text-[13px] font-normal leading-relaxed text-white/75 flex-1">{body}</p>
    </motion.div>
  );
}

// ── Família ticker card (infinite belt with image) ─────────────────────────
function CardFamiliaTicker({ image, tag, title, body }: { image: string; tag: string; title: string; body: string }) {
  return (
    <div className="shrink-0 w-full sm:w-[300px] bg-white flex flex-col overflow-hidden">
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2 text-center sm:text-left">
        <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#9d9695]">{tag}</span>
        <h4 className="font-sans text-[1rem] font-bold text-[#3d3d3d] leading-snug uppercase tracking-tight">{title}</h4>
        <p className="text-[11.5px] text-[#9d9695] leading-relaxed line-clamp-3">{body}</p>
      </div>
    </div>
  );
}

// ── FAQ item ───────────────────────────────────────────────────────────────
function FAQItem({ num, q, a }: { num: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#741b16]/18">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 py-6 text-left group"
      >
        <span className="font-sans font-black text-xl text-[#bb2017] w-6 shrink-0 mt-0.5 leading-none">
          {num}
        </span>
        <span className="font-sans font-bold text-base md:text-lg text-[#3d3d3d] flex-1 leading-snug group-hover:text-[#741b16] transition-colors uppercase tracking-tight">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 border-2 border-[#741b16]/30 flex items-center justify-center text-[#741b16] mt-0.5">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: "easeOut" as const }}
        className="overflow-hidden"
      >
        <p className="pb-6 pl-11 text-[13px] font-normal leading-relaxed text-[#9d9695]">{a}</p>
      </motion.div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Page() {

  const familiaCards: CardProps[] = [
    {
      icon: <Heart size={28} />,
      tag: "Conclusões e Vínculos",
      title: "Relações Conjugais",
      body: "Atendimento especializado a demandas que envolvem casamentos, uniões estáveis, separações, reconhecimento de vínculos familiares e dissolução de relacionamento de forma discreta e protegida.",
      cta: "Agendar Análise →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=380&fit=crop&auto=format&q=75",
    },
    {
      icon: <Users size={28} />,
      tag: "Responsabilidades Parentais",
      title: "Resguardo dos Filhos",
      body: "Orientação rigorosa e representação técnica em temas ligados à guarda, convivência, fixação ou revisão de pensão alimentícia e demais deveres decorrentes da parentalidade.",
      cta: "Falar com a Dra. Terezinha →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
      image: "https://images.unsplash.com/photo-1484665754804-74b091211472?w=600&h=380&fit=crop&auto=format&q=75",
    },
    {
      icon: <Building2 size={28} />,
      tag: "Planejamento Familiar",
      title: "Organização Patrimonial",
      body: "Aconselhamento jurídico preventivo focado em organização patrimonial, escolha adequada do regime de bens e definição prévia de acordos que tragam segurança jurídica às relações familiares.",
      cta: "Solicitar Planejamento →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=380&fit=crop&q=75",
    },
    {
      icon: <Scale size={28} />,
      tag: "Prevenção e Solução de Litígios",
      title: "Mediação e Acordos",
      body: "Atuação estratégica com foco na mediação, conciliação e estruturação de acordos rápidos, além da condução técnica de ações judiciais sempre que necessário para a proteção total dos direitos envolvidos.",
      cta: "Solicitar Mediação →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=380&fit=crop&q=75",
    },
    {
      icon: <BookOpen size={28} />,
      tag: "Estratégia e Autonomia",
      title: "Consultoria Preventiva",
      body: "Esclarecimento detalhado de dúvidas e estruturação de estratégias jurídicas personalizadas para evitar disputas futuras complexas, priorizando sempre a autonomia e a paz nas decisões familiares.",
      cta: "Agendar Consultoria →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=380&fit=crop&q=75",
    },
  ];

  const sucessaoCards: CardProps[] = [
    {
      icon: <FileText size={28} />,
      tag: "Inventário e Partilha",
      title: "Transmissão de Patrimônio",
      body: "Condução de inventários judiciais e extrajudiciais com agilidade e transparência. Organização da partilha de bens entre herdeiros, respeitando direitos e minimizando conflitos familiares.",
      cta: "Iniciar Meu Inventário →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
    },
    {
      icon: <Shield size={28} />,
      tag: "Planejamento Sucessório",
      title: "Prevenção e Blindagem",
      body: "Estruturação jurídica preventiva do seu patrimônio: testamentos, doações, holdings familiares e estratégias para reduzir a carga tributária e evitar disputas entre herdeiros.",
      cta: "Planejar Minha Sucessão →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
    },
    {
      icon: <Heart size={28} />,
      tag: "Regime de Bens e Herança",
      title: "Proteção do Cônjuge",
      body: "Análise detalhada do regime de bens e seu impacto na sucessão. Orientação para garantir que o cônjuge sobrevivente tenha a proteção patrimonial que merece, sem surpresas legais.",
      cta: "Analisar Meu Caso →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
    },
    {
      icon: <Users size={28} />,
      tag: "Herança em Novas Famílias",
      title: "Famílias Recompostas",
      body: "Planejamento especializado para famílias com filhos de diferentes relacionamentos. Proteção dos direitos de todos os herdeiros com soluções personalizadas que evitam conflitos futuros.",
      cta: "Solicitar Orientação →",
      msg: "Olá, vim pelo site e gostaria de agendar um atendimento especializado.",
    },
  ];

  const testimonials = [
    { name: "Luana Oliveira", time: "2 semanas atrás", text: "Excelente profissional! A Dra. Teresinha demonstra muito conhecimento, competência e dedicação em tudo o que faz. Além do profissionalismo impecável, atende com atenção, respeito e muita humanidade, transmitindo segurança e confiança durante todo o processo. Sou muito grata pelo atendimento e pelo compromisso com seus clientes." },
    { name: "Alberto Antônio Bocco", time: "2 semanas atrás", text: "Foi a melhor surpresa ter conhecido esse escritório de advocacia com time de profissionais que não só me atendeu de forma surpreendente resolvendo todos os meus problemas de forma muito técnica e rápida e extremamente eficaz, sempre me dando o suporte necessário com muita organização, planejamento, muito acolhedor e humano!" },
    { name: "Alessandra Santiago", time: "2 semanas atrás", text: "Quero deixar minha gratidão pelo excelente trabalho realizado. Uma profissional extremamente competente, prestativa, atenciosa e sempre disposta a esclarecer todas as dúvidas com muita paciência. Desde o início me senti segura e bem orientada. Sem dúvidas, é a melhor advogada que já conheci." },
    { name: "Marco Rodrigues", time: "3 semanas atrás", text: "Dra. Terezinha, gostaria de agradecer imensamente pelo seu excelente trabalho, dedicação e profissionalismo. Sua clareza em explicar cada etapa do processo e sua atenção aos detalhes me trouxeram muita segurança. Muito obrigado por todo o suporte positivo do meu caso." },
    { name: "Michelle Ferreira", time: "3 semanas atrás", text: "A mais de seis anos este escritório de advocacia me atende e em vários assuntos, eu só tenho a agradecer, principalmente a doutora Teresinha que é uma super profissional atenta e sensível às necessidades de cada assunto que os clientes apresentamos a ela." },
    { name: "Reinaldo Lombardi", time: "3 semanas atrás", text: "Foi um atendimento muito profissional da Dra. Terezinha e toda sua equipe que foi concluído com resultado positivo. Já conhecia seu trabalho com outros processos que sempre chegava com resultados de vitória, por isso eu indico os trabalhos do escritório Oliveira Quintal Advocacia como nota 10." },
    { name: "Carla Roberta de Andrade", time: "3 semanas atrás", text: "Oliveira Quintal Advocacia é uma referência, Dra. Terezinha e sua equipe são os melhores profissionais que vocês podem e devem contar, trazem segurança, estratégia com um atendimento humanizado, buscam sempre o melhor para o cliente. Indico a todos que buscam qualidade e excelência." },
    { name: "Cassia Ito", time: "3 semanas atrás", text: "A minha experiência foi a melhor possível, a Dra Terezinha é uma excelente profissional, me ajudou em todo o processo de inventário, tirou todas as minhas dúvidas, e sempre que preciso ela está ali disposta a me ajudar. Parabéns a esta grande e maravilhosa profissional, eu indico de olhos fechados." },
    { name: "Michelly Turquetti", time: "3 semanas atrás", text: "Dra Terezinha sempre muito atenciosa. Cuida dos processos da nossa família há anos. Sempre dando todo o suporte necessário e fazendo o melhor em cada etapa dos processos." },
    { name: "Simone Nogueira", time: "3 semanas atrás", text: "Doutora Terezinha sem dúvida é a profissional do direito mais correta, comprometida, parceira que conheci, muito talentosa, tem como marca saber se colocar no lugar do cliente. Nossa gratidão por tanto." },
    { name: "Liliane Cristina Reis", time: "3 semanas atrás", text: "Minha experiência foi ótima. Equipe qualificada, profissionais super atenciosos com capacidade para resolver qualquer problema com bastante profissionalismo. Muito satisfeita. Obrigado a toda equipe pelo carinho." },
    { name: "Couth", time: "2 semanas atrás", text: "A melhor das melhores, Dra. Terezinha super competente no que faz, sempre disposta a resolver qualquer questão, pessoal muito prestativo, mais uma vez agradeço por tudo que vocês fazem por nós." },
    { name: "Toninho Xavier", time: "3 semanas atrás", text: "A minha experiência está sendo muito boa e espero poder contar com ela sempre que for preciso. Eu recomendo. Profissionalismo e atenção total. Estou muito satisfeito com os resultados." },
    { name: "Michelly Caldi", time: "3 semanas atrás", text: "Dra Teresinha sempre muito competente e atenciosa. Sempre atende a mim e a minha família prontamente." },
    { name: "Ivani Sgaetti", time: "3 semanas atrás", text: "Fui recebida muito bem. Com muita atenção e esclarecida do problema que fui buscar solução. Só tenho a agradecer Oliveira Quintal Advocacia." },
    { name: "Eliana Memoli", time: "3 semanas atrás", text: "Excelente profissional. Utilizei os serviços na área da Família. A profissional é competente, domina o assunto e é muito gentil. Recomendo." },
    { name: "Maria de Lourdes Mazolanskas", time: "1 semana atrás", text: "Foi muito boa. Recomendo muito os serviços prestados por Oliveira Quintal Advocacia. Tenho total confiança." },
    { name: "Cleo Ma", time: "2 semanas atrás", text: "Dra Terezinha é uma ótima advogada." },
    { name: "Marcia Trentin", time: "3 semanas atrás", text: "Excelente profissional super recomendo!!!" },
    { name: "Marta Turon", time: "5 anos atrás", text: "Advogada excelente indico de olhos fechados, maravilhosa Top." },
    { name: "Denise Turon Pirineos", time: "5 anos atrás", text: "Excelente advogada." },
    { name: "Marly Balderrama", time: "4 anos atrás", text: "Serviço de qualidade, pessoas responsáveis! Profissionalismo impecável." },
  ];

  const faq = [
    {
      q: "O divórcio sempre precisa se transformar em uma briga na justiça?",
      a: "Não necessariamente. Sempre avaliamos a possibilidade de resoluções estratégicas que poupam tempo e custos. No entanto, se a outra parte adotar uma postura intransigente ou tentar ocultar bens, nossa atuação judicial é imediata, enérgica e totalmente focada em garantir o que é seu por direito.",
    },
    {
      q: "Tenho medo de iniciar o processo e acabar perdendo o patrimônio que construí. Como me proteger?",
      a: "O segredo está na análise prévia de viabilidade e no levantamento documental cirúrgico. Analisamos o regime de bens do casamento e blindamos o patrimônio de ocultações ou divisões injustas antes mesmo de iniciar as negociações.",
    },
    {
      q: "Como funciona a fixação do valor da pensão alimentícia?",
      a: "A pensão não segue uma porcentagem fixa de 30% como o senso comum propaga. Ela é calculada com base no equilíbrio entre as necessidades reais da criança (escola, moradia, lazer) e os sinais de riqueza ou renda do provedor. Mapeamos esses sinais estrategicamente.",
    },
    {
      q: "Quero me separar, mas o custo e a demora de um processo judicial me paralisam. O que fazer?",
      a: "Atuamos com total transparência de custos através de um estudo detalhado de viabilidade inicial. Nosso objetivo é traçar o caminho jurídico mais ágil e seguro, evitando que o processo se arraste por formalidades desnecessárias e protegendo ativamente seus ativos financeiros.",
    },
    {
      q: "Como funciona o primeiro atendimento com o escritório?",
      a: "O atendimento é totalmente online e sigiloso, feito via WhatsApp ou chamada de vídeo agendada. Você expõe o seu caso em um ambiente seguro e acolhedor, recebe uma análise estratégica dos caminhos possíveis e só decide avançar após ter total clareza jurídica.",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main>

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <AnimatedHero
          backgroundImageUrl="/banner2.jpg"
          mobileBannerUrl="/mobile2.jpg"
          title={
            <>
              SEU CASAMENTO{" "}
              <span className="animate-blink-alert">PODE ACABAR.</span>{" "}
              <span className="text-[#1a0603]">
                SEU PATRIMÔNIO E A SEGURANÇA DOS SEUS FILHOS, NÃO.
              </span>
            </>
          }
          description="Você não precisa carregar o peso de uma transição complexa sem um amparo jurídico de alto nível. Com mais de 20 anos de experiência, atuamos com precisão técnica e maestria estratégica para blindar o seu patrimônio e resguardar os seus direitos."
          ctaButton={{
            text: "Agendar Atendimento",
            href: WA_MAIN,
          }}
          stats={[
            { value: "20+", label: "Anos de Experiência" },
            { value: "OAB/SP", label: "Registro ativo" },
            { value: "100%", label: "Sigiloso e online" },
          ]}
        />

        {/* ── 2. DOR / HOOK  (branco) ───────────────────────────────────── */}
        <section id="dor" className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

              {/* Sticky left */}
              <div className="md:sticky md:top-24 text-center sm:text-left">
                <Label>Amparo Estratégico</Label>
                <motion.h2
                  {...fadeUp}
                  className="font-sans font-black uppercase text-[#3d3d3d] text-3xl md:text-4xl leading-[1.1] tracking-tight"
                >
                  O peso das incertezas tem{" "}
                  <span className="text-[#bb2017]">um nome.</span>
                </motion.h2>
                <motion.p
                  {...fadeUp}
                  className="mt-7 font-serif text-xl italic text-[#741b16]/70 border-l-4 border-[#bb2017] pl-4 leading-relaxed text-left"
                >
                  Eu sei que as suas noites têm sido longas e cheias de dúvidas que ninguém ao seu redor consegue responder.
                </motion.p>
                <motion.div
                  {...fadeUp}
                  className="mt-8 relative aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src="/mulher.jpg"
                    alt="Mulher preocupada com documentos"
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </div>

              {/* Right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.div variants={fadeItem} className="text-center sm:text-left">
                  <p className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#9d9695] mb-4">
                    Quando a ruptura acontece, a mente é invadida por:
                  </p>
                  <ul className="space-y-3 mb-9">
                    {[
                      "Como blindar o patrimônio que construí com tanto esforço contra divisões injustas?",
                      "De que forma evitar a dilapidação ou a ocultação de bens durante o processo?",
                      "Como ficam as cotas societárias, investimentos, participações em empresas e imóveis?",
                      "Como garantir que a estabilidade e o padrão de vida dos meus filhos sejam financeiramente assegurados?",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-[13.5px] font-medium text-[#4a4a4a] leading-relaxed">
                        <span className="text-[#bb2017] shrink-0 font-bold mt-px">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.p variants={fadeItem} className="text-[13.5px] font-medium text-[#4a4a4a] leading-relaxed mb-9 text-center sm:text-left">
                  O medo de enfrentar um processo demorado, desgastante ou de ser prejudicado financeiramente por falta de uma estratégia cirúrgica muitas vezes paralisa a sua decisão.
                </motion.p>

                <motion.div
                  variants={fadeItem}
                  className="border-l-4 border-[#bb2017] bg-[#f9f5f5] divide-y divide-[#741b16]/10"
                >
                  {[
                    ["Advocacia altamente estratégica", "focada na blindagem patrimonial absoluta e inteligência jurídica"],
                    ["Soluções resolutivas", "que poupam tempo e evitam desgastes, sem abrir mão de um centavo do que é seu por direito"],
                    ["Atuação contundente nos tribunais", "quando o consenso não é o caminho mais vantajoso para você"],
                    ["Proteção jurídica cirúrgica", "para que você mantenha sua segurança e seu padrão de vida"],
                  ].map(([bold, rest], i) => (
                    <div key={i} className="flex gap-4 p-4 items-start">
                      <div className="w-2 h-2 bg-[#bb2017] shrink-0 mt-1.5" />
                      <p className="text-[13.5px] font-medium text-[#4a4a4a] leading-relaxed">
                        <strong className="text-[#3d3d3d] font-semibold">{bold}</strong> — {rest}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeItem} className="mt-7 flex justify-center sm:justify-start">
                  <a
                    href={WA_MAIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={WINE}
                  >
                    Quero Proteger Meu Patrimônio →
                  </a>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 3. ÁREAS — FAMÍLIA  (rosa claro) ─────────────────────────── */}
        <section id="solucoes" className="bg-[#f9f5f5] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="mb-14 text-center sm:text-left">
              <Label>Direito de Família</Label>
              <motion.div
                {...fadeUp}
                className="grid md:grid-cols-2 gap-8 pb-10 border-b-2 border-[#741b16]/15"
              >
                <h2 className="font-sans font-black uppercase text-[#3d3d3d] text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  Relações familiares com{" "}
                  <span className="text-[#bb2017]">proteção e discrição</span>
                </h2>
                <p className="text-[13px] text-[#9d9695] leading-relaxed self-end">
                  Atuamos na proteção das relações familiares, organização patrimonial e resolução eficaz de conflitos, com foco em soluções seguras e juridicamente adequadas em todas as fases da vida familiar.
                </p>
              </motion.div>
            </div>

          </div>

          {/* Desktop: infinite ticker */}
          <div className="hidden sm:block ticker-pause-on-hover overflow-hidden mb-10">
            <div className="flex gap-4 animate-ticker-familia ticker-track w-max-content">
              {[...familiaCards, ...familiaCards].map((c, i) => (
                c.image ? <CardFamiliaTicker key={i} image={c.image} tag={c.tag} title={c.title} body={c.body} /> : null
              ))}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="sm:hidden px-6 mb-10 flex flex-col gap-4">
            {familiaCards.map((c, i) => (
              c.image ? <CardFamiliaTicker key={i} image={c.image} tag={c.tag} title={c.title} body={c.body} /> : null
            ))}
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div {...fadeUp} className="flex justify-center">
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className={WINE}
              >
                Agendar Atendimento Especializado →
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── 4. ÁREAS — SUCESSÕES  (sólido escuro) ────────────────────── */}
        <section className="bg-[#1a0603] py-24 md:py-32 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-0">
            <div className="mb-10 text-center sm:text-left">
              <LabelLight>Direito das Sucessões</LabelLight>
              <motion.div
                {...fadeUp}
                className="grid md:grid-cols-2 gap-6 pb-8 border-b border-white/20"
              >
                <h2 className="font-sans font-black uppercase text-white text-2xl md:text-3xl leading-[1.1] tracking-tight">
                  A proteção do seu legado{" "}
                  <span className="text-[#bb2017]">começa enquanto você está<br className="hidden sm:block"/>{" "}aqui</span>
                </h2>
                <p className="text-[12px] text-white/55 leading-relaxed self-end">
                  Planejamento sucessório completo para garantir que o patrimônio que você construiu chegue a quem você ama — com segurança jurídica, sem conflitos e sem surpresas desagradáveis para sua família.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {sucessaoCards.map((c, i) => (
                <CardDark key={i} {...c} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 5. DEPOIMENTOS  (foto pre.jpg de fundo) ─────────────────── */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/pre.jpg" alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-[#1a0603]/40" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 mb-10 text-center sm:text-left">
            <LabelLight>Depoimentos</LabelLight>
            <motion.h2
              {...fadeUp}
              className="font-sans font-black uppercase text-white text-2xl md:text-3xl leading-[1.1] tracking-tight mt-3"
            >
              O que nossos clientes{" "}
              <span className="text-[#bb2017]">dizem sobre nós</span>
            </motion.h2>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
              <span className="text-yellow-400 text-base tracking-tight">★★★★★</span>
              <span className="text-[11px] text-white/45">22 avaliações · Google</span>
            </div>
          </div>

          {/* Row 1 — scrolling left */}
          <div className="relative z-10 ticker-pause-on-hover overflow-hidden mb-3">
            <div className="flex gap-3 animate-ticker-slow ticker-track w-max-content">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="shrink-0 w-[270px] bg-white p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-bold text-[12.5px] text-[#1a0603] leading-tight">{t.name}</p>
                    <span className="text-yellow-400 text-[11px] tracking-tighter shrink-0">★★★★★</span>
                  </div>
                  <p className="text-[11.5px] text-[#3d3d3d]/75 leading-relaxed line-clamp-3">{t.text}</p>
                  <p className="text-[10px] text-[#9d9695] mt-auto">{t.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolling right */}
          <div className="relative z-10 ticker-pause-on-hover overflow-hidden">
            <div className="flex gap-3 animate-ticker-slow-rev ticker-track w-max-content">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="shrink-0 w-[270px] bg-white p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-bold text-[12.5px] text-[#1a0603] leading-tight">{t.name}</p>
                    <span className="text-yellow-400 text-[11px] tracking-tighter shrink-0">★★★★★</span>
                  </div>
                  <p className="text-[11.5px] text-[#3d3d3d]/75 leading-relaxed line-clamp-3">{t.text}</p>
                  <p className="text-[10px] text-[#9d9695] mt-auto">{t.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. SOBRE  (branco) ────────────────────────────────────────── */}
        <section id="sobre" className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

              {/* Photo */}
              <motion.div {...fadeUp} className="relative">
                <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 overflow-hidden">
                  <Image
                    src="/sobre3.jpg"
                    alt="Dra. Terezinha Quintal"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* 20+ badge */}
                <div className="absolute bottom-6 -left-3 md:-left-6 bg-[#bb2017] px-5 py-4">
                  <strong className="block font-black text-4xl text-white leading-none">20+</strong>
                  <span className="block text-[8.5px] font-bold tracking-[0.16em] uppercase text-white/80 mt-1">
                    Anos de<br />Experiência
                  </span>
                </div>
                {/* Corner accent */}
                <div className="absolute bottom-[-16px] right-[-16px] w-16 h-16 border-r-2 border-b-2 border-[#bb2017]/30 pointer-events-none" />
              </motion.div>

              {/* Text */}
              <div className="text-center sm:text-left">
                <Label>Sobre o Escritório</Label>
                <motion.h2
                  {...fadeUp}
                  className="font-sans font-black uppercase text-[#3d3d3d] text-3xl md:text-4xl leading-[1.1] tracking-tight"
                >
                  Dra. Terezinha{" "}
                  <span className="text-[#bb2017]">Quintal</span>
                </motion.h2>
                <motion.p {...fadeUp} className="mt-1 text-[9.5px] font-bold tracking-[0.2em] uppercase text-[#9d9695]">
                  Advocacia com Alma e Estratégia em São Paulo
                </motion.p>

                <motion.p {...fadeUp} className="mt-7 text-[13px] text-[#9d9695] leading-relaxed">
                  Possui mais de 20 anos de experiência como advogada, com sólida atuação nas áreas de Direito Civil e Direito de Família. Ao longo de sua carreira, desenvolveu profunda expertise em assessoria jurídica, consultoria e representação de clientes em questões relacionadas à proteção de direitos civis e familiares.
                </motion.p>

                <motion.p {...fadeUp} className="mt-4 text-[13px] text-[#9d9695] leading-relaxed">
                  Após uma sólida trajetória na advocacia tradicional, estruturou a Oliveira Quintal Advocacia com o desejo de oferecer um refúgio jurídico estratégico na capital paulista. Unindo a robustez técnica acumulada ao atendimento verdadeiramente humano e próximo, busca sempre o caminho do consenso inteligente quando viável, sem jamais abrir mão de uma postura combativa e incisiva nos tribunais.
                </motion.p>

                <motion.blockquote
                  {...fadeUp}
                  className="mt-7 border-l-4 border-[#bb2017] pl-5 py-4 pr-4 bg-[#f9f5f5] text-left"
                >
                  <p className="font-serif text-[1.05rem] italic text-[#741b16]/70 leading-relaxed">
                    "Aqui, você não é apenas um número de processo. Você encontra uma estrutura colaborativa e especializada pronta para ouvir a sua história e guiar os seus passos em direção a uma nova fase de estabilidade e paz."
                  </p>
                </motion.blockquote>

                <motion.div {...fadeUp} className="mt-9 flex justify-center sm:justify-start">
                  <a
                    href={WA_MAIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={WINE}
                  >
                    Falar com a Dra. Terezinha →
                  </a>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. FAQ  (rosa claro) ──────────────────────────────────────── */}
        <section id="duvidas" className="bg-[#f9f5f5] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_1.7fr] gap-16 md:gap-20">

              {/* Left sticky */}
              <div className="md:sticky md:top-24 self-start text-center sm:text-left">
                <Label>Dúvidas Frequentes</Label>
                <motion.h2
                  {...fadeUp}
                  className="font-sans font-black uppercase text-[#3d3d3d] text-3xl md:text-4xl leading-[1.1] tracking-tight"
                >
                  Respostas claras para as dúvidas que pesam{" "}
                  <span className="text-[#bb2017]">no seu coração</span>
                </motion.h2>
                <motion.p {...fadeUp} className="mt-5 text-[13px] text-[#9d9695] leading-relaxed">
                  Entender os passos do processo retira a angústia do desconhecido. Veja os esclarecimentos para as principais preocupações que chegam ao nosso escritório.
                </motion.p>
                <motion.div {...fadeUp} className="mt-9 flex justify-center sm:justify-start">
                  <a
                    href={WA_MAIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={WINE}
                  >
                    Tirar Minha Dúvida Agora →
                  </a>
                </motion.div>
              </div>

              {/* Accordion */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="border-t-2 border-[#741b16]/15"
              >
                {faq.map((item, i) => (
                  <motion.div key={i} variants={fadeItem}>
                    <FAQItem num={i + 1} q={item.q} a={item.a} />
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 7. CONTATO CTA  (vinho escuro) ───────────────────────────── */}
        <section id="contato" className="relative bg-[#741b16] py-32 md:py-44 overflow-hidden">
          {/* Background photo — doutora2.jpg */}
          <div className="absolute inset-0 z-0">
            <Image src="/doutora2.jpg" alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-[rgba(116,27,22,0.45)]" />
          </div>
          {/* Decorative rings */}
          <div className="absolute top-[-180px] right-[-180px] w-[560px] h-[560px] rounded-full border border-white/[.05] pointer-events-none z-10" />
          <div className="absolute bottom-[-140px] left-[-140px] w-[480px] h-[480px] rounded-full border border-white/[.05] pointer-events-none z-10" />

          <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
            <LabelLight>Atendimento Privado</LabelLight>

            <motion.h2
              {...fadeUp}
              className="font-sans font-black uppercase text-white text-3xl md:text-4xl leading-[1.05] tracking-tight mt-2"
            >
              Dê o primeiro passo em direção à sua{" "}
              <span className="text-[#bb2017]">tranquilidade</span>
            </motion.h2>

            <motion.p {...fadeUp} className="mt-6 text-[15px] font-bold text-white leading-relaxed max-w-md mx-auto">
              Para garantir a privacidade, a exclusividade e a segurança do seu atendimento, as consultas iniciais são agendadas de forma restrita via canais digitais criptografados.
            </motion.p>

            <motion.div {...fadeUp} className="mt-12 flex flex-col items-center gap-4">
              <a
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className={`${SOLID} flex items-center gap-3 px-10 py-5 text-[10.5px]`}
              >
                <MessageCircle size={17} />
                Agendar Atendimento
              </a>
              <p className="text-[12.5px] font-bold text-white tracking-wide">
                Atendimento sigiloso · Segunda a Sexta, 08h às 18h
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 8. FOOTER  (carvão) ──────────────────────────────────────── */}
        <footer className="bg-[#5a5a5a] border-t border-white/[.05] py-14">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/logo.png"
                    alt="Oliveira Quintal Advocacia"
                    width={26}
                    height={38}
                    className="object-contain brightness-0 invert opacity-40"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="font-lapidary text-[12px] tracking-[0.22em] uppercase text-white/85 font-semibold">
                      Oliveira Quintal
                    </span>
                    <span className="text-[7px] tracking-[0.36em] uppercase text-[#bb2017]/80 mt-[3px]">
                      Advocacia
                    </span>
                  </div>
                </div>
                <p className="text-[11.5px] text-white/75 leading-relaxed">
                  Soluções Jurídicas Humanizadas,<br />Preventivas e Estratégicas.
                </p>
              </div>

              <div>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#741b16] mb-4">
                  Navegação
                </p>
                <ul className="space-y-2.5">
                  {[
                    ["Início", "#inicio"],
                    ["Soluções", "#solucoes"],
                    ["Sobre Nós", "#sobre"],
                    ["Dúvidas", "#duvidas"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[11.5px] text-white/80 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#741b16] mb-4">
                  Endereço
                </p>
                <a
                  href="https://share.google/05ufSHSCbjn8Hy1cM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] text-white/80 leading-relaxed hover:text-white transition-colors block"
                >
                  Avenida Nossa Senhora do Ó, n° 865<br />
                  Sala 1510 — Limão<br />
                  São Paulo-SP · CEP 02715-000
                </a>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#741b16] mt-5 mb-1">
                  Horário
                </p>
                <p className="text-[11.5px] text-white/80">Segunda a Sexta · 08h às 18h</p>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#741b16] mt-4 mb-1">
                  Atendimento
                </p>
                <p className="text-[11.5px] text-white/80">Presencial e Online</p>
                <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#741b16] mt-4 mb-1">
                  Registro
                </p>
                <p className="text-[11.5px] text-white/80">Inscrição na OAB/SP</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 pt-6 border-t border-white/[.06]">
              <p className="text-[10px] text-white/55 leading-relaxed max-w-lg">
                O conteúdo deste site possui caráter estritamente informativo, pautado pelas diretrizes éticas do Código de Ética e Disciplina da OAB. Nenhuma informação aqui contida deve ser interpretada como assessoria jurídica específica para o seu caso.
              </p>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <a
                  href="/politica-de-privacidade"
                  className="text-[10px] text-white/65 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="https://lp.eufacoseu.marketing?utm_source=oliveiraquintal&utm_medium=footer&utm_campaign=credit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-white/55 hover:text-white transition-colors"
                >
                  Desenvolvido por EFSM
                </a>
              </div>
            </div>
          </div>
        </footer>

      </main>

      {/* ── Floating WhatsApp button ───────────────────────────────────── */}
      <a
        href={WA_FLOAT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center drop-shadow-xl hover:scale-110 transition-transform"
      >
        <Image src="/logoWhats.png" alt="WhatsApp" width={56} height={56} className="object-contain" />
      </a>
    </>
  );
}
