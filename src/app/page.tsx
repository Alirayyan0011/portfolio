import Navbar from '@/components/Global/Navbar';
import Hero from '@/components/HomePage/Hero';
import CounterSection from '@/components/HomePage/Counter';
import Footer from '@/components/Global/Footer';
import Spacer from '@/components/Global/Spacer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Spacer height={2} />
        <CounterSection />
        <Spacer height={2} />
        {/* Additional sections would go here */}
      </div>
      <Footer />
    </main>
  );
}