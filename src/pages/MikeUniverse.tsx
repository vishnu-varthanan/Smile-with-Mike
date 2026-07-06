import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import Mike from "@/components/common/Mike";
import { PRODUCTS } from "@/data/products";
import MikeShoppingCart from "@/assets/MikeShopping.png";

export default function MikeUniverse() {
  const [cart, setCart] = useState<string[]>([]);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const addToCart = (id: string) => {
    setCart((c) => [...c, id]);
    setJustAdded(id);
    window.setTimeout(
      () => setJustAdded((cur) => (cur === id ? null : cur)),
      900,
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen px-[6vw] py-10"
      style={{
        background:
          "radial-gradient(120% 100% at 50% 0%, var(--cream) 0%, var(--paper) 55%)",
      }}
    >
      {/* top bar */}
      <div className="flex items-center justify-between mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-inkSoft hover:text-ink transition-colors"
        >
          <ArrowLeft size={16} /> Back to Mike's Universe
        </Link>
        <div className="relative flex items-center gap-1.5 text-sm font-semibold">
          <ShoppingCart size={17} />
          <AnimatePresence mode="wait">
            <motion.span
              key={cart.length}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              {cart.length}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* hero */}
      <div className="flex flex-col items-center text-center mb-14">
        <motion.div
          animate={{ rotate: [0, -4, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mike size={140} mood="idle" />
        </motion.div>
        <h1 className="font-display font-bold text-[clamp(32px,5vw,54px)] tracking-tight mt-4 mb-2">
          Mike's Universe
        </h1>
        <p className="text-inkSoft max-w-md">
          Wearable Mike. Stick him on your laptop, your wall, or yourself.
        </p>
      </div>

      {/* products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="relative bg-card border border-line rounded-[20px] p-5 flex flex-col"
          >
            {p.tag && (
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide text-brandRed bg-brandRed/10 px-2 py-1 rounded-full">
                {p.tag}
              </span>
            )}
            <div className="h-28 flex items-center justify-center mb-3">
              {/* <Mike size={250} mood="idle" /> */}
              <img src={MikeShoppingCart} alt="Shopping" className="w-24" />
            </div>
            <h3 className="font-display font-semibold text-[15.5px] mb-1">
              {p.name}
            </h3>
            {/* <p className="text-inkSoft text-sm mb-4">₹{p.price}</p>
            <motion.button
              onClick={() => addToCart(p.id)}
              whileTap={{ scale: 0.92 }}
              className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-ink text-paper"
            >
              <AnimatePresence mode="wait">
                {justAdded === p.id ? (
                  <motion.span
                    key="added"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-1.5"
                  >
                    <Check size={14} /> Added
                  </motion.span>
                ) : (
                  <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Add to cart
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button> */}

            <p className="text-inkSoft text-sm mb-4">Arriving Soon </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-inkSoft/70 mt-16">
        Demo storefront — wire this up to Shopify, Razorpay, or your checkout of
        choice.
      </p>
    </motion.section>
  );
}
