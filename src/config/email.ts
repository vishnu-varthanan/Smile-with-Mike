export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
} as const;

export function isEmailConfigured(): boolean {
  return Boolean(
    EMAILJS.serviceId &&
      EMAILJS.templateId &&
      EMAILJS.autoReplyTemplateId &&
      EMAILJS.publicKey,
  );
}
