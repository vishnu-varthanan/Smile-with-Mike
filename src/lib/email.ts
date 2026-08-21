import emailjs from "@emailjs/browser";
import { EMAILJS, isEmailConfigured } from "@/config/email";

export async function sendContactEmails(form: HTMLFormElement): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error("EmailJS is not configured");
  }

  await emailjs.sendForm(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    form,
    EMAILJS.publicKey,
  );

  await emailjs.sendForm(
    EMAILJS.serviceId,
    EMAILJS.autoReplyTemplateId,
    form,
    EMAILJS.publicKey,
  );
}
