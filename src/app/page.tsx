import HeroSection from "@/components/HeroSection";
import InteractiveMap from "@/components/InteractiveMap";
import CityDashboard from "@/components/CityDashboard";
import QuickActions from "@/components/QuickActions";
import BugleFactChecker from "@/components/BugleFactChecker";
import CommunityFeed from "@/components/CommunityFeed";
export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />

      {/* Blend hero into content seamlessly */}
      <div className="relative -mt-32 pt-32 w-full z-10 bg-gradient-to-b from-transparent to-black flex flex-col gap-12 md:gap-24">
        <InteractiveMap />
        <CityDashboard />
        <QuickActions />
        <BugleFactChecker />
        <CommunityFeed />
      </div>
    </div>
  );
}
