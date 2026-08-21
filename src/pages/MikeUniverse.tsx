import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { mikeShopping } from "@/assets";
import Mike from "@/components/common/Mike";
import { BRAND } from "@/config/brand";
import { ROUTES } from "@/config/nav";
import { PRODUCTS } from "@/content/products";

export default function MikeUniverse() {
  const cart: string[] = [];

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
      <div className="flex items-center justify-between mb-10">
        <Link
          to={ROUTES.home}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-inkSoft hover:text-ink transition-colors"
        >
          <ArrowLeft size={16} /> Back to {BRAND.siteName}
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

      <div className="flex flex-col items-center text-center mb-14">
        <motion.div
          animate={{ rotate: [0, -4, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mike size={140} mood="idle" />
        </motion.div>
        <h1 className="font-display font-bold text-[clamp(32px,5vw,54px)] tracking-tight mt-4 mb-2">
          {BRAND.siteName}
        </h1>
        <p className="text-inkSoft max-w-md">
          Wearable Mike. Stick him on your laptop, your wall, or yourself.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="relative bg-card border border-line rounded-[20px] p-5 flex flex-col"
          >
            {product.tag && (
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wide text-brandRed bg-brandRed/10 px-2 py-1 rounded-full">
                {product.tag}
              </span>
            )}
            <div className="h-28 flex items-center justify-center mb-3">
              <img src={mikeShopping} alt="Shopping" className="w-24" />
            </div>
            <h3 className="font-display font-semibold text-[15.5px] mb-1">
              {product.name}
            </h3>
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
