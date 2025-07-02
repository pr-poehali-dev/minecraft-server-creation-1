import HeroSection from "@/components/home/HeroSection";
import CurrentEpochSection from "@/components/home/CurrentEpochSection";
import RulesSection from "@/components/home/RulesSection";
import DonationSection from "@/components/home/DonationSection";
import Footer from "@/components/home/Footer";

export default function MinecraftServer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-darker via-minecraft-dark to-slate-900">
      <HeroSection />
      <CurrentEpochSection />
      <RulesSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
