import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Building, Briefcase, Tag, DollarSign, MessageSquare, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CompanyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompanyFormModal = ({ isOpen, onClose }: CompanyFormModalProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+55",
    phone: "",
    companyName: "",
    role: "",
    segment: "",
    monthlyRevenue: "",
    automationNeed: "",
  });

  const formSteps = [
    { id: 0, title: "Dados da Empresa", fields: ["name", "email", "phoneCode", "phone", "companyName", "role", "segment"] },
    { id: 1, title: "Necessidades de Automação", fields: ["monthlyRevenue", "automationNeed"] },
  ];

  const validateForm = (step: number) => {
    const newErrors: Record<string, string> = {};
    const currentStepFields = formSteps[step].fields;

    currentStepFields.forEach(field => {
      switch (field) {
        case "name":
          if (!formData.name.trim()) {
            newErrors.name = "Digite seu nome completo.";
          }
          break;
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!formData.email.trim()) {
            newErrors.email = "Digite um e-mail válido.";
          } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Digite um e-mail válido.";
          }
          break;
        case "phone":
          const phoneDigits = formData.phone.replace(/\D/g, '');
          if (!formData.phone.trim()) {
            newErrors.phone = "Digite um número de telefone válido.";
          } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            newErrors.phone = "O telefone deve ter entre 10 e 11 dígitos.";
          }
          break;
        case "companyName":
          if (!formData.companyName.trim()) {
            newErrors.companyName = "Digite o nome da sua empresa.";
          }
          break;
        case "monthlyRevenue":
          if (!formData.monthlyRevenue.trim()) {
            newErrors.monthlyRevenue = "Selecione seu faturamento mensal.";
          }
          break;
        case "automationNeed":
          if (!formData.automationNeed.trim()) {
            newErrors.automationNeed = "Conte-nos como podemos ajudar.";
          } else if (formData.automationNeed.trim().length < 3) {
            newErrors.automationNeed = "Mínimo de 3 caracteres.";
          }
          break;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(currentStep) || currentStep !== formSteps.length -1 ) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Lógica de envio (ainda a ser implementada)
    console.log("Formulário enviado:", formData);

    try {
      const response = await fetch("https://webhook.iaagents.online/webhook/faaa264f-66f1-4706-9205-bf2df41d3249", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.statusText}`);
      }

      // await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      toast({
        title: "Formulário enviado!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setCurrentStep(0); // Reset para a primeira etapa
        setFormData({
          name: "",
          email: "",
          phoneCode: "+55",
          phone: "",
          companyName: "",
          role: "",
          segment: "",
          monthlyRevenue: "",
          automationNeed: "",
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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-dark-bg rounded-2xl border border-neon/20 shadow-xl font-space"
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
                    {formSteps[currentStep].title} - Queremos conhecer melhor sua empresa
                  </h2>
                  <p className="text-muted-foreground">
                    Preencha os campos abaixo para que possamos entender suas necessidades e propor automações que realmente façam diferença no seu negócio.
                  </p>
                </div>

                {/* Step Indicator */}
                <div className="flex justify-center gap-2 mb-8">
                  {formSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`w-8 h-2 rounded-full transition-all duration-300 ${
                        currentStep === index ? "bg-neon" : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 0: Dados da Empresa */}
                  {currentStep === 0 && (
                    <>
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
                          placeholder="Seu nome completo"
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
                          placeholder="email@exemplo.com"
                          className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Telefone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                          <Phone className="w-4 h-4 text-neon" />
                          Telefone
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
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(/\D/g, '');
                              if (numericValue.length <= 11) {
                                handleChange("phone", numericValue);
                              }
                            }}
                            placeholder="(XX) XXXXX-XXXX"
                            className={`flex-1 bg-card-bg border-border focus:border-neon transition-colors ${errors.phone ? 'border-red-500' : ''}`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      {/* Nome da empresa */}
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="flex items-center gap-2 text-sm font-medium">
                          <Building className="w-4 h-4 text-neon" />
                          Nome da empresa
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleChange("companyName", e.target.value)}
                          placeholder="Nome da sua empresa"
                          className={`bg-card-bg border-border focus:border-neon transition-colors ${errors.companyName ? 'border-red-500' : ''}`}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                      </div>

                      {/* Cargo / Função */}
                      <div className="space-y-2">
                        <Label htmlFor="role" className="flex items-center gap-2 text-sm font-medium">
                          <Briefcase className="w-4 h-4 text-neon" />
                          Cargo / Função
                        </Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) => handleChange("role", e.target.value)}
                          placeholder="Sua função na empresa"
                          className="bg-card-bg border-border focus:border-neon transition-colors"
                        />
                      </div>

                      {/* Segmento da empresa / Nicho */}
                      <div className="space-y-2">
                        <Label htmlFor="segment" className="flex items-center gap-2 text-sm font-medium">
                          <Tag className="w-4 h-4 text-neon" />
                          Segmento da empresa / Nicho
                        </Label>
                        <Input
                          id="segment"
                          value={formData.segment}
                          onChange={(e) => handleChange("segment", e.target.value)}
                          placeholder="Ex: E-commerce, SaaS, Serviços..."
                          className="bg-card-bg border-border focus:border-neon transition-colors"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 1: Necessidades de Automação */}
                  {currentStep === 1 && (
                    <>
                      {/* Faturamento mensal aproximado */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-sm font-medium">
                          <DollarSign className="w-4 h-4 text-neon" />
                          Faturamento mensal aproximado
                        </Label>
                        <RadioGroup value={formData.monthlyRevenue} onValueChange={(value) => handleChange("monthlyRevenue", value)}
                          className="grid grid-cols-2 gap-4">
                          {
                            [
                              { value: "até 10k", label: "Até R$10 mil" },
                              { value: "10k-50k", label: "De R$10 mil a R$50 mil" },
                              { value: "50k-200k", label: "De R$50 mil a R$200 mil" },
                              { value: "acima 200k", label: "Acima de R$200 mil" },
                            ].map((item) => (
                              <div key={item.value} className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                formData.monthlyRevenue === item.value ? "border-neon bg-neon/10 shadow-neon-sm" : "border-border bg-card-bg hover:border-gray-600"
                              }`}
                                onClick={() => handleChange("monthlyRevenue", item.value)}
                              >
                                <RadioGroupItem value={item.value} id={item.value} className="absolute top-2 right-2" />
                                <Label htmlFor={item.value} className="flex flex-col items-start font-normal cursor-pointer">
                                  <span className="text-lg font-semibold">{item.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        {errors.monthlyRevenue && <p className="text-red-500 text-xs mt-1">{errors.monthlyRevenue}</p>}
                      </div>

                      {/* Onde acredita que a automação pode ajudar mais? */}
                      <div className="space-y-2">
                        <Label htmlFor="automationNeed" className="flex items-center gap-2 text-sm font-medium">
                          <MessageSquare className="w-4 h-4 text-neon" />
                          Onde acredita que a automação pode ajudar mais?
                        </Label>
                        <Textarea
                          id="automationNeed"
                          value={formData.automationNeed}
                          onChange={(e) => handleChange("automationNeed", e.target.value)}
                          placeholder="Descreva como você imagina a automação transformando seu negócio..."
                          className={`min-h-[120px] bg-card-bg border-border focus:border-neon transition-colors resize-none ${errors.automationNeed ? 'border-red-500' : ''}`}
                        />
                        {errors.automationNeed && <p className="text-red-500 text-xs mt-1">{errors.automationNeed}</p>}
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="border-neon text-neon hover:bg-neon hover:text-dark-bg hover-glow rounded-md"
                      >
                        Voltar
                      </Button>
                    )}
                    {currentStep < formSteps.length - 1 && (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="bg-neon text-dark-bg hover:bg-neon-glow hover-glow ml-auto"
                      >
                        Próximo
                      </Button>
                    )}
                    {currentStep === formSteps.length - 1 && (
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-xl px-12 py-4 h-auto rounded-md font-semibold shadow-lg ml-6"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            ENVIANDO...
                          </>
                        ) : (
                          "Enviar análise gratuita 🚀"
                        )}
                      </Button>
                    )}
                  </div>
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
                    <ShieldCheck className="w-10 h-10 text-neon" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Análise enviada com sucesso! ✨</h3>
                <p className="text-muted-foreground text-lg">
                  Recebemos seu formulário! Nossa equipe vai analisar suas informações e entrar em contato em até 48h para propor as melhores automações para seu negócio.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompanyFormModal;
