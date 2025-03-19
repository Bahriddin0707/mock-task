import AboutGym from "@/components/shared/about/about";
import YellowGreenSection from "@/components/shared/announcement/announcement";
import Header from "@/components/shared/header/header";
import Hero from "@/components/shared/hero/hero";
import WhyChooseUs from "@/components/shared/whywechoose/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Background wrapper */}
      <div className="relative h-screen bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home_hero.jpg"
            alt="Gym Background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>

        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>
      <YellowGreenSection />
      <WhyChooseUs />
      <AboutGym />
    </main>
  );
}
