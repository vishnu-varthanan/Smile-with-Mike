import { BRAND } from "@/config/brand";

export function gmailComposeUrl(email: string = BRAND.email): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
}
