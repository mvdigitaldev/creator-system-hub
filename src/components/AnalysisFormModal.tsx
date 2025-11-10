import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Instagram, Globe, Users, Target, TrendingUp, MessageSquare, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AnalysisFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnalysisFormModal = ({ isOpen, onClose }: AnalysisFormModalProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+55",
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Nome completo
    if (!formData.name.trim()) {
      newErrors.name = "Digite seu nome completo.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter no mínimo 3 caracteres.";
    }

    // E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Digite um e-mail válido.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }

    // Telefone
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = "Digite um número de telefone válido.";
    } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      newErrors.phone = "Digite um número de telefone válido.";
    }

    // Instagram
    const instagramRegex = /^@[a-zA-Z0-9._]+$/;
    if (!formData.instagram.trim()) {
      newErrors.instagram = "Digite um usuário do Instagram válido (ex: @seuperfil).";
    } else if (!instagramRegex.test(formData.instagram)) {
      newErrors.instagram = "Digite um usuário do Instagram válido (ex: @seuperfil).";
    }

    // Nicho
    if (!formData.niche.trim()) {
      newErrors.niche = "Informe seu nicho de atuação.";
    }

    // Tipo de sistema
    if (!formData.systemType.trim()) {
      newErrors.systemType = "Informe o tipo de sistema desejado.";
    }

    // Motivação
    if (!formData.motivation.trim()) {
      newErrors.motivation = "Conte um pouco sobre você.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        nome: formData.name,
        email: formData.email,
        telefone: `${formData.phoneCode} ${formData.phone}`,
        instagram: formData.instagram,
        outras_redes: formData.otherNetworks,
        seguidores: formData.followers,
        nicho: formData.niche,
        vende_produto: formData.sellsProducts === "yes",
        tipo_produto: formData.productType,
        tipo_sistema: formData.systemType,
        objetivo: formData.mainGoal,
        disposicao_investir: formData.willingToInvest,
        descricao: formData.motivation
      };

      const response = await fetch("https://webhook.iaagents.online/webhook/dedf5ae2-0802-49b9-a2f1-37cd30f3a176", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSubmitted(true);
      toast({
        title: "Formulário enviado!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          name: "",
          email: "",
          phoneCode: "+55",
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
        setErrors({});
      }, 4000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo ao editar
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
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
                      className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                      className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Celular */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="w-4 h-4 text-neon" />
                      Celular / WhatsApp
                    </Label>
                    <div className="flex gap-2">
                      <Select value={formData.phoneCode} onValueChange={(value) => handleChange("phoneCode", value)}>
                        <SelectTrigger className="w-[110px] bg-card-bg border-border focus:border-neon">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card-bg border-border">
                          <SelectItem value="+55">🇧🇷 +55</SelectItem>
                          <SelectItem value="+1">🇺🇸 +1</SelectItem>
                          <SelectItem value="+34">🇪🇸 +34</SelectItem>
                          <SelectItem value="+351">🇵🇹 +351</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="11 99999-9999"
                        className={`flex-1 bg-card-bg border-border focus:border-neon transition-colors ${errors.phone ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                      className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.instagram ? 'border-red-500' : ''}`}
                    />
                    {errors.instagram && <p className="text-red-500 text-xs mt-1">{errors.instagram}</p>}
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
                      className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.niche ? 'border-red-500' : ''}`}
                    />
                    {errors.niche && <p className="text-red-500 text-xs mt-1">{errors.niche}</p>}
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
                      className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.systemType ? 'border-red-500' : ''}`}
                    />
                    {errors.systemType && <p className="text-red-500 text-xs mt-1">{errors.systemType}</p>}
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
                      className={`min-h-[120px] bg-card-bg border-border focus:border-neon transition-colors resize-none ${errors.motivation ? 'border-red-500' : ''}`}
                    />
                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-lg py-6 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        ENVIANDO...
                      </>
                    ) : (
                      "ENVIAR ANÁLISE"
                    )}
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
