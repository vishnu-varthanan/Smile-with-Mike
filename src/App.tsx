import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import MikeUniverse from "@/pages/MikeUniverse";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
    
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mike-universe" element={<MikeUniverse />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
   
    </ThemeProvider>
  );
}
