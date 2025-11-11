import React, { useState } from 'react';
import { motion, easeOut, easeInOut } from 'framer-motion';
import { Sparkles, Lightbulb, Rocket, CheckCircle, DollarSign, Users, Code, Award, BookOpen, GitFork, Briefcase } from 'lucide-react';
import DevelopmentLearnerFormModal from '@/components/DevelopmentLearnerFormModal';

const Desenvolver = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const zoomIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: easeOut }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      boxShadow: ["0 0 0px rgba(0,255,255,0)", "0 0 15px rgba(0,255,255,0.6)", "0 0 0px rgba(0,255,255,0)"],
      transition: {
        duration: 2,
        ease: easeInOut,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground font-space overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-neon/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
          >
            Aprenda a criar sistemas e automações com IA e transforme conhecimento em <span className="text-neon glow-neon">renda real</span>.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
          >
            Domine as ferramentas mais poderosas da Inteligência Artificial para desenvolver soluções inovadoras e lucrativas, mesmo sem experiência prévia.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }}
            className="bg-gradient-to-r from-neon to-purple-500 text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Quero aprender a ganhar dinheiro com IA 🚀
          </motion.button>
        </motion.div>
      </section>

      {/* Seção 2 — A nova forma de ganhar dinheiro com tecnologia */}
      <section className="py-32 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              A nova forma de <span className="text-purple-400">ganhar dinheiro</span> com tecnologia
            </h2>
            <p>Esqueça os métodos antigos. A era da Inteligência Artificial abriu um universo de possibilidades para quem busca liberdade financeira e impacto real no mercado.</p>
            <p className="text-neon font-semibold glow-neon">Você não precisa ser programador para começar.</p>
            <p>Nossa mentoria é estruturada para te dar todo o conhecimento e as ferramentas necessárias, do zero ao avançado, para que você possa criar, vender e lucrar com suas próprias soluções de IA e automação.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-64 md:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-neon/20 to-purple-500/20 p-6 shadow-xl border border-neon/30"
          >
            <Code className="w-24 h-24 text-neon opacity-70 animate-pulse" />
            <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"></div>
            <p className="relative z-10 text-xl font-semibold text-white">Tecnologia acessível</p>
          </motion.div>
        </div>
      </section>

      {/* Seção 3 — O que você vai aprender */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            O que você <span className="text-neon">vai aprender</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: Sparkles, title: "Criar sistemas e automações com IA", description: "Domine as ferramentas para construir soluções inteligentes do zero." },
              { icon: BookOpen, title: "Transformar ideias em produtos digitais", description: "Aprenda a monetizar suas criações e escalar seu impacto." },
              { icon: Briefcase, title: "Vender soluções para empresas e influenciadores", description: "Desenvolva habilidades de vendas para um mercado sedento por inovação." },
              { icon: DollarSign, title: "Montar uma operação lucrativa com IA", description: "Estruture seu negócio para gerar renda recorrente e escalável." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                className="flex flex-col items-center text-center p-6 bg-card-bg border border-border rounded-xl shadow-lg transition-all duration-300 group hover:border-neon/50"
              >
                <div className="p-4 rounded-full bg-neon/10 group-hover:bg-neon/20 transition-colors mb-4">
                  <item.icon className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção 4 — Para quem é essa mentoria */}
      <section className="py-32 px-4 bg-gray-900 border-y border-border/50">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            Essa mentoria é para <span className="text-purple-400">você</span> que:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {["Quer entrar no mercado de IA, mas não sabe por onde começar.", "Busca uma nova fonte de renda altamente lucrativa.", "Deseja criar seus próprios sistemas e automações sem depender de terceiros.", "É empreendedor e quer otimizar seu negócio com IA.", "Quer se posicionar como especialista em IA e vender soluções.", "Está cansado de promessas vazias e busca um método comprovado.",].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 p-4 bg-card-bg border border-border rounded-lg shadow-sm group hover:border-purple-500/50 transition-all"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — A oportunidade */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            variants={zoomIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white"
          >
            Esta é a sua chance de estar <span className="text-cyan-400 glow-cyan">anos à frente</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed space-y-6"
          >
            <p>O mercado de IA está **explodindo** e as empresas estão desesperadas por profissionais que saibam criar e implementar automações.</p>
            <p>Não perca tempo tentando aprender sozinho ou com conteúdos superficiais. Nossa mentoria é o **atalho** que você precisa para dominar essa tecnologia e transformar sua vida profissional.</p>
          </motion.p>
        </div>
      </section>

      {/* Seção 6 — Chamada para ação */}
      <section className="py-32 px-4 bg-gray-950 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Pronto para <span className="text-purple-400 glow-purple">aprender a criar sistemas</span> e ganhar dinheiro com IA?
          </motion.h2>
          <motion.button
            variants={pulseAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Quero mudar minha vida profissional com IA! 🚀
          </motion.button>
        </div>
      </section>

      {/* Seção 7 — Fechamento */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white glow-neon"
          >
            Aprenda. Crie. Venda. Lucre.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-muted-foreground"
          >
            A tecnologia está transformando o mundo — e você pode transformar a sua vida com ela.
          </motion.p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-white/70 mb-4"
          >
            MV Digital — Conectando pessoas ao futuro com inteligência artificial.
          </motion.p>
          
        </div>
      </footer>

      <DevelopmentLearnerFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Desenvolver;
