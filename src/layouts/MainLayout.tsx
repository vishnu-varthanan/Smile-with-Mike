import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import CursorDot from "@/components/common/CursorDot";
import MikeAssistant from "@/components/chatbot/MikeAssistant";
import Colobrate from "@/components/layout/Colobrate";

export default function MainLayout() {
  return (
    <div className="bg-paper text-ink min-h-screen pb-24">
      <CursorDot />
      <Colobrate />
      <Outlet />
      <Footer />
      <BottomNav />
      <MikeAssistant />
    </div>
  );
}
