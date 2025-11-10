import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Instagram, Globe, Users, Target, TrendingUp, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AnalysisFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnalysisFormModal = ({ isOpen, onClose }: AnalysisFormModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    otherNetworks: "",
    followers: "",
    niche: "",
    sellsProducts: "",
    productType: "",
    systemType: "",
    mainGoal: "",
    willingToInvest: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-dark-bg rounded-2xl border border-neon/20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-neon transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div className="p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold mb-3">
                    Queremos conhecer você antes de criar seu sistema gratuito 🚀
                  </h2>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e nossa equipe entrará em contato
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome completo */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <User className="w-4 h-4 text-neon" />
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Digite seu nome completo"
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4 text-neon" />
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Seu melhor e-mail"
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Celular */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="w-4 h-4 text-neon" />
                      Celular / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Instagram */}
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2 text-sm font-medium">
                      <Instagram className="w-4 h-4 text-neon" />
                      @Instagram principal
                    </Label>
                    <Input
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => handleChange("instagram", e.target.value)}
                      placeholder="Ex: @seuperfil"
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Outras redes */}
                  <div className="space-y-2">
                    <Label htmlFor="otherNetworks" className="flex items-center gap-2 text-sm font-medium">
                      <Globe className="w-4 h-4 text-neon" />
                      Outras redes relevantes
                    </Label>
                    <Input
                      id="otherNetworks"
                      value={formData.otherNetworks}
                      onChange={(e) => handleChange("otherNetworks", e.target.value)}
                      placeholder="Ex: YouTube, TikTok..."
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Seguidores */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <Users className="w-4 h-4 text-neon" />
                      Quantos seguidores você tem (somando todas as redes)?
                    </Label>
                    <RadioGroup value={formData.followers} onValueChange={(value) => handleChange("followers", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="less-10k" id="less-10k" />
                        <Label htmlFor="less-10k" className="font-normal cursor-pointer">Menos de 10 mil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10k-50k" id="10k-50k" />
                        <Label htmlFor="10k-50k" className="font-normal cursor-pointer">10 mil – 50 mil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50k-200k" id="50k-200k" />
                        <Label htmlFor="50k-200k" className="font-normal cursor-pointer">50 mil – 200 mil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="more-200k" id="more-200k" />
                        <Label htmlFor="more-200k" className="font-normal cursor-pointer">Mais de 200 mil</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Nicho */}
                  <div className="space-y-2">
                    <Label htmlFor="niche" className="flex items-center gap-2 text-sm font-medium">
                      <Target className="w-4 h-4 text-neon" />
                      Qual é o seu nicho de atuação?
                    </Label>
                    <Input
                      id="niche"
                      value={formData.niche}
                      onChange={(e) => handleChange("niche", e.target.value)}
                      placeholder="Ex: fitness, moda, finanças..."
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Vende produtos */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <TrendingUp className="w-4 h-4 text-neon" />
                      Você já vende algum produto ou serviço?
                    </Label>
                    <RadioGroup value={formData.sellsProducts} onValueChange={(value) => handleChange("sellsProducts", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="sells-yes" />
                        <Label htmlFor="sells-yes" className="font-normal cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="sells-no" />
                        <Label htmlFor="sells-no" className="font-normal cursor-pointer">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Tipo de produto */}
                  <div className="space-y-2">
                    <Label htmlFor="productType" className="text-sm font-medium">
                      Qual tipo de produto ou serviço você vende atualmente?
                    </Label>
                    <Input
                      id="productType"
                      value={formData.productType}
                      onChange={(e) => handleChange("productType", e.target.value)}
                      placeholder="Ex: curso, consultoria, e-book..."
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Tipo de sistema */}
                  <div className="space-y-2">
                    <Label htmlFor="systemType" className="text-sm font-medium">
                      Qual tipo de sistema você imagina ter?
                    </Label>
                    <Input
                      id="systemType"
                      value={formData.systemType}
                      onChange={(e) => handleChange("systemType", e.target.value)}
                      placeholder="Ex: app de treinos, plataforma de membros..."
                      required
                      className="bg-card-bg border-border focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Objetivo principal */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Qual é o principal objetivo com esse sistema?
                    </Label>
                    <RadioGroup value={formData.mainGoal} onValueChange={(value) => handleChange("mainGoal", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recurring-income" id="recurring-income" />
                        <Label htmlFor="recurring-income" className="font-normal cursor-pointer">Gerar renda recorrente</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="community" id="community" />
                        <Label htmlFor="community" className="font-normal cursor-pointer">Criar comunidade exclusiva</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="automate-sales" id="automate-sales" />
                        <Label htmlFor="automate-sales" className="font-normal cursor-pointer">Automatizar vendas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="engagement" id="engagement" />
                        <Label htmlFor="engagement" className="font-normal cursor-pointer">Aumentar engajamento</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other-goal" />
                        <Label htmlFor="other-goal" className="font-normal cursor-pointer">Outro</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Disposto a investir */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Você estaria disposto a investir em um setup inicial se o retorno for alto?
                    </Label>
                    <RadioGroup value={formData.willingToInvest} onValueChange={(value) => handleChange("willingToInvest", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="invest-yes" />
                        <Label htmlFor="invest-yes" className="font-normal cursor-pointer">Sim, se fizer sentido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maybe" id="invest-maybe" />
                        <Label htmlFor="invest-maybe" className="font-normal cursor-pointer">Talvez</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commission-only" id="commission-only" />
                        <Label htmlFor="commission-only" className="font-normal cursor-pointer">Prefiro começar 100% com comissão</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Motivação */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="flex items-center gap-2 text-sm font-medium">
                      <MessageSquare className="w-4 h-4 text-neon" />
                      Conte um pouco sobre você e o que te motiva a criar um sistema próprio:
                    </Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleChange("motivation", e.target.value)}
                      placeholder="Compartilhe sua história e objetivos..."
                      required
                      className="min-h-[120px] bg-card-bg border-border focus:border-neon transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-lg py-6 h-auto"
                  >
                    ENVIAR ANÁLISE
                  </Button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-neon/20 rounded-full flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Users className="w-10 h-10 text-neon" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Formulário enviado com sucesso! ✨</h3>
                <p className="text-muted-foreground text-lg">
                  Recebemos seu formulário! Nossa equipe vai analisar seu perfil e entrar em contato em até 48h.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnalysisFormModal;
