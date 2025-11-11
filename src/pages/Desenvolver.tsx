import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, TrendingUp } from 'lucide-react';
import DevelopmentLearnerFormModal from '@/components/DevelopmentLearnerFormModal';

const Desenvolver = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
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
            Domine o desenvolvimento com <span className="text-neon glow-neon">Inteligência Artificial</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
          >
            Aprenda a construir sistemas inteligentes, bots e automações com IA, mesmo que você não tenha experiência prévia em programação.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }}
            className="bg-gradient-to-r from-neon to-purple-500 text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-full font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Quero aprender a desenvolver com IA 💡
          </motion.button>
        </motion.div>
      </section>

      {/* Section: Por que aprender com IA? */}
      <section className="py-32 px-4 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Por que aprender a desenvolver com <span className="text-purple-400">Inteligência Artificial</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Inovação Constante", description: "Esteja na vanguarda da tecnologia e crie soluções disruptivas." },
              { icon: Rocket, title: "Mercado Aquecido", description: "Aumente suas oportunidades de carreira e projetos como desenvolvedor de IA." },
              { icon: TrendingUp, title: "Impacto Real", description: "Desenvolva sistemas que resolvem problemas complexos e geram valor." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                className="flex flex-col items-center text-center p-6 bg-card-bg border border-border rounded-xl shadow-lg transition-all duration-300 group hover:border-purple-500/50"
              >
                <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors mb-4">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: O que você vai aprender */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            O que você <span className="text-neon">vai aprender</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <p>Nosso programa de aprendizado é feito para te guiar do básico ao avançado na criação de sistemas com Inteligência Artificial.</p>
              <p>Você aprenderá as principais ferramentas e conceitos para construir projetos reais, otimizar processos e criar soluções inovadoras.</p>
              <p className="text-neon font-semibold glow-neon">Transforme suas ideias em realidade com o poder da IA.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-64 md:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-neon/20 to-purple-500/20 p-6 shadow-xl border border-neon/30"
            >
              <Lightbulb className="w-24 h-24 text-neon opacity-70 animate-pulse" />
              <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"></div>
              <p className="relative z-10 text-xl font-semibold text-white">Desenvolvimento com IA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 bg-gray-950 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Pronto para <span className="text-purple-400 glow-purple">criar o futuro</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Junte-se a nós e comece sua jornada para se tornar um desenvolvedor de sistemas inteligentes com IA.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)" }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-full font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Começar minha jornada em IA agora! 🚀
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-white/70"
          >
            MV Digital — Capacitando a próxima geração de desenvolvedores de IA.
          </motion.p>
        </div>
      </footer>

      <DevelopmentLearnerFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Desenvolver;
