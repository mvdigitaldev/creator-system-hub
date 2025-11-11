import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Handshake, ShieldCheck, TrendingUp, Cpu, Users, Clock, Lightbulb } from 'lucide-react';
import CompanyFormModal from '@/components/CompanyFormModal';

const Automatizar = () => {
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

  const zoomIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }
  };

  const features = [
    { icon: Zap, text: "Eliminar tarefas repetitivas e erros humanos" },
    { icon: TrendingUp, text: "Reduzir custos operacionais e aumentar a eficiência" },
    { icon: Handshake, text: "Melhorar o atendimento ao cliente com automações inteligentes" },
    { icon: Cpu, text: "Integrar plataformas (WhatsApp, e-commerce, CRM, planilhas, etc.)" },
    { icon: Clock, text: "Liberar tempo da equipe para o que realmente importa: crescimento e estratégia" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-foreground font-space overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-black to-gray-900">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-80 h-80 bg-neon/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            Automatize sua empresa e descubra como <span className="text-neon glow-neon">lucrar mais</span> trabalhando menos.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
          >
            Enquanto alguns negócios estão crescendo exponencialmente com ajuda da automação e da IA, outros ainda gastam tempo e dinheiro com tarefas manuais e processos ultrapassados. A pergunta é: em qual desses grupos sua empresa quer estar?
          </motion.p>

          <motion.button
            variants={fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            whileHover="hover"
            className="bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Quero automatizar minha empresa e crescer com IA 🚀
          </motion.button>
        </motion.div>
      </section>

      {/* Seção 1 — O novo jogo dos negócios */}
      <section className="py-32 px-4 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6"
          >
            <p>O mercado mudou.</p>
            <p>Hoje, empresas inteligentes estão automatizando tarefas repetitivas, reduzindo custos e tomando decisões com base em dados reais — tudo com o apoio de sistemas personalizados e inteligência artificial.</p>
            <p>Se você ainda depende de planilhas, mensagens manuais e processos demorados, está literalmente deixando dinheiro na mesa.</p>
            <p className="text-neon font-semibold glow-neon">A tecnologia que grandes empresas usam já está ao seu alcance — e nós podemos implementá-la no seu negócio.</p>
          </motion.p>
        </div>
      </section>

      {/* Seção 2 — O que a automação pode fazer pela sua empresa */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            O que a automação pode fazer pela sua <span className="text-neon">empresa</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover="hover"
                className="flex items-start gap-4 p-6 bg-card-bg border border-border rounded-xl shadow-lg transition-all duration-300 group hover:border-neon/50 hover-glow"
              >
                <div className="p-3 rounded-full bg-neon/10 group-hover:bg-neon/20 transition-colors flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-neon" />
                </div>
                <p className="text-lg text-left">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mt-16 max-w-3xl mx-auto"
          >
            Com automações inteligentes, sua empresa ganha agilidade, controle e escala.
            Você foca no que importa — o sistema cuida do resto.
          </motion.p>
        </div>
      </section>

      {/* Seção 3 — A revolução da IA nos negócios */}
      <section className="py-32 px-4 relative bg-gradient-to-br from-gray-950 to-blue-950">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800?text=AI+Background)' }}></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.h2
            variants={zoomIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white"
          >
            A inteligência artificial não é mais o futuro — é o <span className="text-cyan-400 glow-cyan">presente</span>.
          </motion.h2>

          <motion.p
            variants={zoomIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...zoomIn.transition, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6"
          >
            <p>Empresas que aplicam IA nas suas operações estão vendendo mais, entendendo melhor seus clientes e crescendo em velocidade recorde.</p>
            <p>Enquanto isso, quem ignora a tecnologia fica para trás.</p>
            <p className="text-neon font-semibold glow-neon">Não se trata de moda. É sobre <span className="text-cyan-400 glow-cyan">competitividade</span>.</p>
          </motion.p>
        </div>
      </section>

      {/* Seção 4 — O modelo ideal para o seu negócio */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>Desenvolvemos automações e sistemas sob medida para cada empresa — do pequeno comércio à grande operação.</p>
            <p>E o melhor: você não precisa entender de tecnologia.</p>
            <p className="text-neon font-semibold glow-neon">Nossa equipe analisa o seu negócio, entende seus desafios e entrega a solução pronta, simples e funcional.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-64 md:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-neon/20 to-purple-500/20 p-6 shadow-xl border border-neon/30"
          >
            <Cpu className="w-24 h-24 text-neon opacity-70 animate-pulse" />
            <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"></div>
            <p className="relative z-10 text-xl font-semibold text-white">Sua empresa na era da IA</p>
          </motion.div>
        </div>
        
        <div className="text-center mt-20">
          <motion.button
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            whileHover="hover"
            className="bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            onClick={() => setModalOpen(true)}
          >
            Quero automatizar minha empresa e crescer com IA 🚀
          </motion.button>
        </div>
      </section>

      {/* Seção 5 — Mensagem final de impacto */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white glow-neon"
          >
            O mercado está mudando rápido.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
          >
            Quem automatiza, cresce.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Quem demora, perde espaço.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-neon glow-neon"
          >
            Transforme sua empresa em uma máquina de eficiência e resultado.
          </motion.p>
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
            MV Digital — Transformando empresas comuns em negócios inteligentes.
          </motion.p>
        </div>
      </footer>

      <CompanyFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Automatizar;
