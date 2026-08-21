import type { ChatLanguage, FaqItem } from "@/types";

export const LANG_LABELS: Record<ChatLanguage, string> = {
  en: "EN",
  ta: "தமிழ்",
  tanglish: "Tanglish",
};

export const GREETING: Record<ChatLanguage, string> = {
  en: "Hi, I'm Mike! Ask me anything about Mikeverse 👋",
  ta: "ஹாய், நான் மைக்! Mikeverse பத்தி என்ன வேணும்னாலும் கேளுங்க 👋",
  tanglish: "Hi, naan Mike! Mikeverse pathi enna venumnalum kelunga 👋",
};

export const FAQS: FaqItem[] = [
  {
    id: "who",
    question: {
      en: "Who is Smile with Mike?",
      ta: "Smile with Mike என்றால் என்ன?",
      tanglish: "Smile with Mike na yaaru?",
    },
    answer: {
      en: "Smile with Mike is our Instagram comedy page. Mikeverse is the home — merch and stories starring Mike, with 100K+ followers.",
      ta: "Smile with Mike எங்க Instagram comedy page. Mikeverse தான் home — Mike merch and stories, 100K+ followers.",
      tanglish: "Smile with Mike naenga Instagram comedy page. Mikeverse thaan home — Mike merch and stories, 100K+ followers.",
    },
  },
  {
    id: "collab",
    question: {
      en: "How can I collaborate?",
      ta: "நான் எப்படி கொலாபரேட் பண்ணலாம்?",
      tanglish: "Naan eppadi collab pannalam?",
    },
    answer: {
      en: "Just drop a message in the contact form below or DM @smile.with.mike on Instagram — we'll reply fast.",
      ta: "கீழே இருக்கிற contact form-ல மெசேஜ் போடுங்க அல்லது Instagram-ல @smile.with.mike-க்கு DM பண்ணுங்க.",
      tanglish: "Keezhe contact form-la message podunga alladhu Instagram-la @smile.with.mike-ku DM pannunga.",
    },
  },
  {
    id: "services",
    question: {
      en: "What services do you offer?",
      ta: "நீங்க என்ன சர்வீஸ் தருவீங்க?",
      tanglish: "Neenga enna services tharuvinga?",
    },
    answer: {
      en: "Brand promotions, Instagram reels, custom animation, character creation and full comedy campaigns.",
      ta: "பிராண்ட் ப்ரோமோஷன், Instagram reels, கஸ்டம் அனிமேஷன், கேரக்டர் கிரியேஷன், காமெடி காம்பெயின்ஸ்.",
      tanglish: "Brand promotions, Instagram reels, custom animation, character creation, comedy campaigns full-ஆ pannuvom.",
    },
  },
  {
    id: "pricing",
    question: {
      en: "What about pricing?",
      ta: "விலை எப்படி இருக்கும்?",
      tanglish: "Pricing eppadi irukum?",
    },
    answer: {
      en: "Stories start around ₹2,000 for a story mention, up to ₹10,000 for a dedicated brand reel. Depends on scope.",
      ta: "Story mention ₹2,000 ஆரம்பிச்சு, dedicated brand reel ₹10,000 வரைக்கும் — வேலையின் scope-ஐ பொறுத்து.",
      tanglish: "Story mention ₹2,000-la start aagum, dedicated brand reel ₹10,000 varaikkum — scope depend pannum.",
    },
  },
  {
    id: "contact",
    question: {
      en: "How do I contact you?",
      ta: "உங்களை எப்படி தொடர்பு கொள்வது?",
      tanglish: "Unga kitta eppadi contact pannuradhu?",
    },
    answer: {
      en: "Email smilewithmike05@gmail.com or use the contact form at the bottom of this page.",
      ta: "smilewithmike05@gmail.com-க்கு mail பண்ணுங்க அல்லது இந்த பேஜ்ல கீழே இருக்கிற contact form-ஐ use பண்ணுங்க.",
      tanglish: "smilewithmike05@gmail.com-ku mail pannunga alladhu இந்த page கீழே iruka contact form use pannunga.",
    },
  },
];
