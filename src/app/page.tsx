"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Gavel, Scale, Shield, Star, Clock3, Phone, Quote, MapPin } from "lucide-react";

const whatsappLink = "https://wa.me/5599999999999";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD90010] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[--primary] text-[--primary-foreground] text-xs font-semibold mb-4">Atendimento imediato</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Defesa jurídica estratégica para resolver seu problema com agilidade
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Consultoria clara, objetiva e confidencial. Atendimento personalizado em diversas áreas do Direito.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-[--primary] text-[--primary-foreground] hover:brightness-95 text-base h-12 px-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Falar no WhatsApp</a>
              </Button>
              <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 h-12 px-6">
                <a href="#areas">Ver áreas de atuação</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section id="areas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Áreas de atuação</h2>
          <p className="text-white/70 mt-2">Atendimento especializado para garantir seus direitos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Gavel className="w-6 h-6 text-[--primary]" />, title: "Direito Penal", desc: "Defesa em flagrantes, prisões, audiências e recursos." },
            { icon: <Scale className="w-6 h-6 text-[--primary]" />, title: "Direito Civil", desc: "Contratos, indenizações, cobranças e disputas." },
            { icon: <Shield className="w-6 h-6 text-[--primary]" />, title: "Direito Consumidor", desc: "Golpes, cobranças indevidas, negativação e serviços." },
            { icon: <Clock3 className="w-6 h-6 text-[--primary]" />, title: "Direito Trabalhista", desc: "Rescisões, verbas, assédio, justa causa e acordos." },
            { icon: <Star className="w-6 h-6 text-[--primary]" />, title: "Direito de Família", desc: "Divórcio, guarda, pensão, inventário e partilha." },
            { icon: <Shield className="w-6 h-6 text-[--primary]" />, title: "Previdenciário", desc: "Aposentadorias, benefícios e revisões." },
          ].map((item) => (
            <Card key={item.title} className="bg-[#161616] border-[#222] hover:border-[--primary]/60 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-[#0e0e0e] border-y border-[#191919] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {["Atendimento ágil", "Estratégia personalizada", "Transparência total"].map((title) => (
              <div key={title} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[--primary] mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/70">Equipe dedicada e comunicação direta para cada etapa do seu caso.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo em 3 passos */}
      <section id="processo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Como funciona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: 1, title: "Contato", desc: "Converse no WhatsApp e explique seu caso." },
            { step: 2, title: "Análise", desc: "Avaliação técnica e estratégia definida." },
            { step: 3, title: "Ação", desc: "Execução rápida e acompanhamento contínuo." },
          ].map((s) => (
            <Card key={s.step} className="bg-[#161616] border-[#222]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[--primary] text-[--primary-foreground] font-bold">{s.step}</span>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-[#0e0e0e] border-y border-[#191919] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square w-full max-w-sm rounded-xl bg-[#161616] border border-[#222]" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Dr. Nome do Advogado</h2>
            <p className="text-[--primary] font-semibold mt-1">OAB 00.000</p>
            <p className="text-white/70 mt-4">
              Advogado com atuação focada em soluções rápidas e eficazes, unindo estratégia, técnica e comunicação clara.
              Experiência em audiências, recursos e acordos, sempre priorizando o melhor resultado para o cliente.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[--primary] text-[--primary-foreground]">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Depoimentos</h2>
        <p className="text-xs text-white/50 mb-6">Os resultados podem variar conforme o caso. Nenhuma promessa de resultado é feita.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Atendimento excelente e ágil.", "Resolvi meu caso com rapidez.", "Transparente do início ao fim."].map((t, i) => (
            <Card key={i} className="bg-[#161616] border-[#222]">
              <CardContent className="pt-6 text-white/80">
                <Quote className="w-5 h-5 text-[--primary] mb-3" />
                {t}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#0e0e0e] border-y border-[#191919] scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona a consulta inicial?</AccordionTrigger>
              <AccordionContent>Você explica o caso, avaliamos a melhor estratégia e orientamos os próximos passos.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O atendimento é online?</AccordionTrigger>
              <AccordionContent>Sim, atendemos por WhatsApp e videoconferência. Também presencial mediante agendamento.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quais são os honorários?</AccordionTrigger>
              <AccordionContent>Os honorários variam de acordo com o caso e são informados com total transparência.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Precisa de ajuda agora?</h2>
        <p className="text-white/70 mt-3">Fale agora com o advogado e receba orientação imediata.</p>
        <div className="mt-6">
          <Button asChild className="bg-[--primary] text-[--primary-foreground] h-12 px-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Falar no WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black border-t border-[#191919]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-white/70">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-8 h-8 rounded bg-[--primary]" />
              <span>Advocacia</span>
            </div>
            <p className="mt-3 text-sm">Atendimento ágil e estratégico em diversas áreas do Direito.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contato</h4>
            <p className="text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> (99) 99999-9999</p>
            <p className="text-sm flex items-center gap-2 mt-1"><MapPin className="w-4 h-4" /> Endereço completo, Cidade - UF</p>
          </div>
          <div className="text-sm">
            <a href="#" className="hover:text-white block">Política de Privacidade</a>
            <a href="#" className="hover:text-white block mt-1">Aviso Legal</a>
          </div>
        </div>
        <div className="border-t border-[#191919] text-center text-xs text-white/50 py-4">© {new Date().getFullYear()} Advocacia. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
