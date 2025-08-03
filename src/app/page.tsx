import { Header, SaleBanner } from '../app/components/layout';
import { HeroSection } from '../app/components/landing';

export default function Home() {
  return (
    <div className="min-h-screen  bg-black text-white flex flex-col">
      <SaleBanner />
      <main className="w-full max-w-[1280px] mx-auto overflow-auto">
        <Header />
        <HeroSection />
      </main>

    </div>
  );
}
