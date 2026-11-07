import { BUSINESS_CONFIG } from "@/config/business";

export const CONTACT_LINKS = {
  phone: `tel:${BUSINESS_CONFIG.phoneRaw}`,
  altPhone: `tel:${BUSINESS_CONFIG.altPhoneRaw}`,
  email: `mailto:${BUSINESS_CONFIG.email}`,
  whatsapp: BUSINESS_CONFIG.whatsapp.url,
  maps: BUSINESS_CONFIG.location.mapsUrl,
};

export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (el) {
    const navHeight = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

