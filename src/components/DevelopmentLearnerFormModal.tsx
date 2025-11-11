import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Code, Target, MessageSquare, Loader2, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DevelopmentLearnerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevelopmentLearnerFormModal = ({ isOpen, onClose }: DevelopmentLearnerFormModalProps) => {
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
    programmingExperience: "",
    mainGoalAI: "",
    whatToBuild: "",
  });

  const formSteps = [
    { id: 0, title: "Seus Dados", fields: ["name", "email", "phoneCode", "phone"] },
    { id: 1, title: "Experiência e Objetivos", fields: ["programmingExperience", "mainGoalAI", "whatToBuild"] },
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
        case "programmingExperience":
          if (!formData.programmingExperience.trim()) {
            newErrors.programmingExperience = "Selecione sua experiência em programação.";
          }
          break;
        case "mainGoalAI":
          if (!formData.mainGoalAI.trim()) {
            newErrors.mainGoalAI = "Selecione seu objetivo principal.";
          }
          break;
        case "whatToBuild":
          if (!formData.whatToBuild.trim()) {
            newErrors.whatToBuild = "Descreva o que você espera construir.";
          } else if (formData.whatToBuild.trim().length < 10) {
            newErrors.whatToBuild = "Mínimo de 10 caracteres.";
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
    // Lógica de envio
    console.log("Formulário de Aprendiz de Desenvolvimento enviado:", formData);

    try {
      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      toast({
        title: "Formulário enviado!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setCurrentStep(0); 
        setFormData({
          name: "",
          email: "",
          phoneCode: "+55",
          phone: "",
          programmingExperience: "",
          mainGoalAI: "",
          whatToBuild: "",
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
                    {formSteps[currentStep].title} - Queremos conhecer você para te ajudar a desenvolver com IA
                  </h2>
                  <p className="text-muted-foreground">
                    Preencha os campos abaixo para que possamos entender seus objetivos e te guiar no caminho certo para aprender a desenvolver sistemas inteligentes.
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
                  {/* Step 0: Seus Dados */}
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
                    </>
                  )}

                  {/* Step 1: Experiência e Objetivos */}
                  {currentStep === 1 && (
                    <>
                      {/* Qual sua experiência em programação? */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-sm font-medium">
                          <Code className="w-4 h-4 text-neon" />
                          Qual sua experiência em programação?
                        </Label>
                        <RadioGroup value={formData.programmingExperience} onValueChange={(value) => handleChange("programmingExperience", value)}
                          className="grid grid-cols-2 gap-4">
                          {
                            [
                              { value: "nenhuma", label: "Nenhuma" },
                              { value: "básica", label: "Básica" },
                              { value: "intermediária", label: "Intermediária" },
                              { value: "avançada", label: "Avançada" },
                            ].map((item) => (
                              <div key={item.value} className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                formData.programmingExperience === item.value ? "border-neon bg-neon/10 shadow-neon-sm" : "border-border bg-card-bg hover:border-gray-600"
                              }`}
                                onClick={() => handleChange("programmingExperience", item.value)}
                              >
                                <RadioGroupItem value={item.value} id={item.value} className="absolute top-2 right-2" />
                                <Label htmlFor={item.value} className="flex flex-col items-start font-normal cursor-pointer">
                                  <span className="text-lg font-semibold">{item.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        {errors.programmingExperience && <p className="text-red-500 text-xs mt-1">{errors.programmingExperience}</p>}
                      </div>

                      {/* Qual seu objetivo principal ao aprender IA? */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-sm font-medium">
                          <Target className="w-4 h-4 text-neon" />
                          Qual seu objetivo principal ao aprender IA?
                        </Label>
                        <RadioGroup value={formData.mainGoalAI} onValueChange={(value) => handleChange("mainGoalAI", value)}
                          className="grid grid-cols-2 gap-4">
                          {
                            [
                              { value: "carreira", label: "Carreira" },
                              { value: "projeto pessoal", label: "Projeto pessoal" },
                              { value: "negócio", label: "Negócio" },
                              { value: "outro", label: "Outro" },
                            ].map((item) => (
                              <div key={item.value} className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                formData.mainGoalAI === item.value ? "border-neon bg-neon/10 shadow-neon-sm" : "border-border bg-card-bg hover:border-gray-600"
                              }`}
                                onClick={() => handleChange("mainGoalAI", item.value)}
                              >
                                <RadioGroupItem value={item.value} id={item.value} className="absolute top-2 right-2" />
                                <Label htmlFor={item.value} className="flex flex-col items-start font-normal cursor-pointer">
                                  <span className="text-lg font-semibold">{item.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        {errors.mainGoalAI && <p className="text-red-500 text-xs mt-1">{errors.mainGoalAI}</p>}
                      </div>

                      {/* O que você espera construir com IA? */}
                      <div className="space-y-2">
                        <Label htmlFor="whatToBuild" className="flex items-center gap-2 text-sm font-medium">
                          <MessageSquare className="w-4 h-4 text-neon" />
                          O que você espera construir com IA?
                        </Label>
                        <Textarea
                          id="whatToBuild"
                          value={formData.whatToBuild}
                          onChange={(e) => handleChange("whatToBuild", e.target.value)}
                          placeholder="Descreva seus projetos, ideias ou o que te motiva..."
                          className={`min-h-[120px] bg-card-bg border-border focus:border-neon transition-colors resize-none ${errors.whatToBuild ? 'border-red-500' : ''}`}
                        />
                        {errors.whatToBuild && <p className="text-red-500 text-xs mt-1">{errors.whatToBuild}</p>}
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
                        className="border-neon text-neon hover:bg-neon hover:text-dark-bg hover-glow"
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
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-neon to-[#0066FF] text-dark-bg hover:opacity-90 hover-glow text-xl py-6 h-auto rounded-full font-semibold shadow-lg"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            ENVIANDO...
                          </>
                        ) : (
                          "Enviar formulário 🚀"
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
                    <Award className="w-10 h-10 text-neon" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Formulário enviado com sucesso! ✨</h3>
                <p className="text-muted-foreground text-lg">
                  Recebemos suas informações! Nossa equipe vai analisar seus objetivos e entrar em contato em até 48h para te guiar nos próximos passos.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevelopmentLearnerFormModal;
