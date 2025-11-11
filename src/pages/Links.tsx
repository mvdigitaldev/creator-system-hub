import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Settings } from 'lucide-react';

const Links = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const linkCardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)" }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground font-space overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-neon/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-neon/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-neon glow-neon mb-8"
        >
          MV Digital
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight"
        >
          Escolha o caminho certo para o seu próximo passo.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUp.transition, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12"
        >
          Conecte-se com o que realmente pode transformar o seu negócio digital.
        </motion.p>

        {/* Links Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 w-full max-w-3xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Link 1: Sou influenciador / expert */}
          <motion.a
            href="/influenciadores"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkCardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center gap-6 p-6 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 cursor-pointer hover:border-neon/50 group"
          >
            <div className="p-4 rounded-full bg-neon/10 group-hover:bg-neon/20 transition-colors">
              <Rocket className="w-8 h-8 text-neon" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1 text-neon group-hover:glow-neon transition-all">Sou influenciador / expert e preciso de um sistema</h3>
              <p className="text-muted-foreground">Transforme sua audiência em renda recorrente com um sistema feito sob medida.</p>
            </div>
          </motion.a>

          {/* Link 2: Quero automatizar minha empresa */}
          <motion.a
            href="/automatizar"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkCardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center gap-6 p-6 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 cursor-pointer hover:border-neon/50 group"
          >
            <div className="p-4 rounded-full bg-neon/10 group-hover:bg-neon/20 transition-colors">
              <Settings className="w-8 h-8 text-neon" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1 text-neon group-hover:glow-neon transition-all">Quero automatizar minha empresa</h3>
              <p className="text-muted-foreground">Otimize seus processos e eleve sua produtividade com automações.</p>
            </div>
          </motion.a>

          {/* Link 3: Quero aprender a desenvolver sistemas com IA */}
          <motion.a
            href="/desenvolver"
            target="_blank"
            rel="noopener noreferrer"
            variants={linkCardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center gap-6 p-6 md:p-8 bg-card-bg border border-border rounded-xl transition-all duration-300 cursor-pointer hover:border-neon/50 group"
          >
            <div className="p-4 rounded-full bg-neon/10 group-hover:bg-neon/20 transition-colors">
              <Brain className="w-8 h-8 text-neon" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1 text-neon group-hover:glow-neon transition-all">Quero aprender a desenvolver com IA</h3>
              <p className="text-muted-foreground">Descubra o passo a passo para criar sistemas inteligentes e lucrativos, mesmo sem experiência.</p>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-border/50 bg-dark-bg">
        <div className="container mx-auto text-center text-muted-foreground">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg"
          >
            Desenvolvido por MV Digital — Transformando ideias em sistemas inteligentes.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Links;
