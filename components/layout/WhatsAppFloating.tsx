"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function WhatsAppFloating({ message }: { message?: string }) {
  const text = encodeURIComponent(message ?? "Hola, quiero mas informacion");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-on shadow-lg motion-safe:animate-pulse-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
