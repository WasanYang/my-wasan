import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}