// app/page.tsx
"use client"
import Sidebar from '@/components/Sidebar/Sidebar';
import Hero from '@/components/HomePage/Hero';
import CounterSection from '@/components/HomePage/Counter';
import Footer from '@/components/Global/Footer';
import Spacer from '@/components/Global/Spacer';

export default function Home() {
  const handleVideoPlay = () => {
    console.log("Video play triggered");
    // You can add any additional logic here
  };

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        <div className="flex-grow">
          <Hero onVideoPlay={handleVideoPlay} />
          <Spacer height={2} />
          <CounterSection />
          <Spacer height={2} />
          {/* Additional sections would go here */}
        </div>
        <Footer />
      </div>
    </main>
  );
}