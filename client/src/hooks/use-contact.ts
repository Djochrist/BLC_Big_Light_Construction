import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type ContactMessage } from "@shared/schema";
import { CONTACT_EMAIL } from "@shared/constants";
import { useToast } from "@/hooks/use-toast";

export function useSendContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactMessage) => {
      const res = await fetch(api.contact.send.path, {
        method: api.contact.send.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.send.responses[400].parse(await res.json());
          throw new Error(error.message || "Erreur de validation");
        }
        throw new Error("Une erreur s'est produite lors de l'envoi du message.");
      }
      
      return api.contact.send.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: `Nous vous répondrons dans les plus brefs délais. Vous pouvez aussi nous contacter directement à ${CONTACT_EMAIL}.`,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message,
      });
    },
  });
}
