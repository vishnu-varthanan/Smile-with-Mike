// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { X, Send } from "lucide-react";
// import Mike from "@/components/common/Mike";
// import MikeChat from "@/components/common/MikeChat";
// import MikeScooty from "@/assets/MikeScooty.gif"
// import { FAQS, GREETING, LANG_LABELS, type Lang } from "@/data/faq";

// interface ChatMessage {
//   id: string;
//   from: "bot" | "user";
//   text: string;
// }

// export default function MikeAssistant() {
//   const [open, setOpen] = useState(false);
//   const [lang, setLang] = useState<Lang>("en");
//   const [messages, setMessages] = useState<ChatMessage[]>([{ id: "greet", from: "bot", text: GREETING.en }]);
//   const [typing, setTyping] = useState(false);

//   const switchLang = (l: Lang) => {
//     setLang(l);
//     setMessages([{ id: "greet", from: "bot", text: GREETING[l] }]);
//   };

//   const askFaq = (id: string) => {
//     const faq = FAQS.find((f) => f.id === id);
//     if (!faq) return;
//     setMessages((m) => [...m, { id: `${id}-q-${Date.now()}`, from: "user", text: faq.question[lang] }]);
//     setTyping(true);
//     window.setTimeout(() => {
//       setTyping(false);
//       setMessages((m) => [...m, { id: `${id}-a-${Date.now()}`, from: "bot", text: faq.answer[lang] }]);
//     }, 700 + Math.random() * 400);
//   };

//   return (
//     <>
//       {/* floating toggle button */}
//       <motion.button
//         onClick={() => setOpen((o) => !o)}
//         aria-label={open ? "Close Mike Assistant" : "Open Mike Assistant"}
//         className="fixed bottom-24 right-5 z-50 w-16 h-16 rounded-full bg-card border border-line shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden"
//         initial={{ scale: 0, rotate: -20 }}
//         animate={{ scale: 1, rotate: 0, y: open ? 0 : [0, -6, 0] }}
//         transition={
//           open
//             ? { type: "spring", stiffness: 300, damping: 20 }
//             : { y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }, scale: { type: "spring", stiffness: 300, damping: 20 } }
//         }
//         whileTap={{ scale: 0.9 }}
//       >
//         <AnimatePresence mode="wait">
//           {open ? (
//             <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
//               <X size={22} className="text-ink" />
//             </motion.span>
//           ) : (
//             <motion.span key="mike" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
//               <img src={MikeScooty} alt=" MikeScooty " className="w-10" />
//             </motion.span>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* chat panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85, y: 30, transformOrigin: "bottom right" }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.85, y: 20 }}
//             transition={{ type: "spring", stiffness: 320, damping: 26 }}
//             className="fixed bottom-[168px] right-5 z-50 w-[320px] max-w-[88vw] rounded-[24px] border border-line bg-card shadow-2xl flex flex-col overflow-hidden"
//           >
//             {/* header */}
//             <div className="flex items-center gap-3 p-4 border-b border-line bg-cream/60">
//               <div className="w-10 h-10 shrink-0">
//                 <Mike size={40} mood="wave" />
//               </div>
//               <div className="flex-1">
//                 <p className="font-display font-semibold text-sm leading-tight">Mike Assistant</p>
//                 <p className="text-[11px] text-inkSoft">usually replies instantly</p>
//               </div>
//             </div>

//             {/* language chips */}
//             <div className="flex gap-1.5 px-4 pt-3">
//               {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
//                 <button
//                   key={l}
//                   onClick={() => switchLang(l)}
//                   className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
//                     lang === l ? "bg-brandRed text-white border-brandRed" : "border-line text-inkSoft"
//                   }`}
//                 >
//                   {LANG_LABELS[l]}
//                 </button>
//               ))}
//             </div>

//             {/* messages */}
//             <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 max-h-[260px] overflow-y-auto">
//               {messages.map((m) => (
//                 <motion.div
//                   key={m.id}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl max-w-[85%] ${
//                     m.from === "bot"
//                       ? "bg-cream/70 self-start rounded-bl-sm"
//                       : "bg-ink text-paper self-end rounded-br-sm"
//                   }`}
//                 >
//                   {m.text}
//                 </motion.div>
//               ))}
//               {typing && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="self-start flex gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-cream/70"
//                 >
//                   {[0, 1, 2].map((i) => (
//                     <motion.span
//                       key={i}
//                       className="w-1.5 h-1.5 rounded-full bg-inkSoft"
//                       animate={{ y: [0, -4, 0] }}
//                       transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
//                     />
//                   ))}
//                 </motion.div>
//               )}
//             </div>

//            {/* quick reply FAQs */}
// <div className="p-3 border-t border-line flex gap-1.5 overflow-x-auto no-scrollbar">
//   {FAQS.map((f) => (
//     <button
//       key={f.id}
//       onClick={() => askFaq(f.id)}
//       className="text-[11.5px] px-2.5 py-1.5 rounded-full border border-line text-inkSoft hover:border-brandRed hover:text-brandRed transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
//     >
//       <Send size={10} /> {f.question[lang]}
//     </button>
//   ))}
// </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send } from "lucide-react";
import Mike from "@/components/common/Mike";
import MikeScooty from "@/assets/MikeScooty.gif"
import { FAQS, GREETING, LANG_LABELS, type Lang } from "@/data/faq";

interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

export default function MikeAssistant() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: "greet", from: "bot", text: GREETING.en }]);
  const [typing, setTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // show the "ask me anything" bubble a couple seconds after load,
  // then re-show it every so often if chat is still closed
  useEffect(() => {
    if (open) {
      setShowBubble(false);
      return;
    }
    const firstShow = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(firstShow);
  }, [open]);

  useEffect(() => {
    if (open || !showBubble) return;
    const hide = setTimeout(() => setShowBubble(false), 4500);
    return () => clearTimeout(hide);
  }, [showBubble, open]);

  useEffect(() => {
    if (open) return;
    const recurring = setInterval(() => setShowBubble(true), 12000);
    return () => clearInterval(recurring);
  }, [open]);

  const switchLang = (l: Lang) => {
    setLang(l);
    setMessages([{ id: "greet", from: "bot", text: GREETING[l] }]);
  };

  const askFaq = (id: string) => {
    const faq = FAQS.find((f) => f.id === id);
    if (!faq) return;
    setMessages((m) => [...m, { id: `${id}-q-${Date.now()}`, from: "user", text: faq.question[lang] }]);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: `${id}-a-${Date.now()}`, from: "bot", text: faq.answer[lang] }]);
    }, 700 + Math.random() * 400);
  };

  return (
    <>
     {/* speech bubble */}
<AnimatePresence>
  {!open && showBubble && (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 10 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="fixed bottom-[176px] right-3 z-50 flex items-center"
    >
      <div className="relative bg-card border border-line rounded-2xl rounded-br-sm px-3.5 py-2 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)]">
        <motion.p
          className="text-[12.5px] font-semibold text-ink whitespace-nowrap"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Ask me anything! 👋
        </motion.p>
        <button
          onClick={() => setShowBubble(false)}
          aria-label="Dismiss"
          className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-ink text-paper text-[9px] flex items-center justify-center"
        >
          <X size={9} />
        </button>
        {/* little tail pointing DOWN to Mike */}
        <span className="absolute -bottom-[6px] right-7 w-3 h-3 bg-card border-b border-r border-line rotate-45" />
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* floating toggle button */}
      <motion.button
        onClick={() => {
          setOpen((o) => !o);
          setShowBubble(false);
        }}
        aria-label={open ? "Close Mike Assistant" : "Open Mike Assistant"}
        className="fixed bottom-24 right-5 z-50 w-16 h-16 rounded-full bg-card border border-line shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0, y: open ? 0 : [0, -6, 0] }}
        transition={
          open
            ? { type: "spring", stiffness: 300, damping: 20 }
            : { y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }, scale: { type: "spring", stiffness: 300, damping: 20 } }
        }
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={22} className="text-ink" />
            </motion.span>
          ) : (
            <motion.span key="mike" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <img src={MikeScooty} alt=" MikeScooty " className="w-10" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-[168px] right-5 z-50 w-[320px] max-w-[88vw] rounded-[24px] border border-line bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* header */}
            <div className="flex items-center gap-3 p-4 border-b border-line bg-cream/60">
              <div className="w-10 h-10 shrink-0">
                <Mike size={40} mood="wave" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-sm leading-tight">Mike Assistant</p>
                <p className="text-[11px] text-inkSoft">usually replies instantly</p>
              </div>
            </div>

            {/* language chips */}
            <div className="flex gap-1.5 px-4 pt-3">
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                    lang === l ? "bg-brandRed text-white border-brandRed" : "border-line text-inkSoft"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            {/* messages */}
            <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 max-h-[260px] overflow-y-auto">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl max-w-[85%] ${
                    m.from === "bot"
                      ? "bg-cream/70 self-start rounded-bl-sm"
                      : "bg-ink text-paper self-end rounded-br-sm"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-start flex gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-cream/70"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-inkSoft"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                    />
                  ))}
                </motion.div>
              )}
            </div>

            {/* quick reply FAQs */}
            <div className="p-3 border-t border-line flex gap-1.5 overflow-x-auto no-scrollbar">
              {FAQS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => askFaq(f.id)}
                  className="text-[11.5px] px-2.5 py-1.5 rounded-full border border-line text-inkSoft hover:border-brandRed hover:text-brandRed transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <Send size={10} /> {f.question[lang]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}