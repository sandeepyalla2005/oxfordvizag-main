import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Dashboard from "@/components/sections/Dashboard";
import WaveStats from "@/components/sections/WaveStats";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Facilities from "@/components/sections/Facilities";
import CampusLife from "@/components/sections/CampusLife";
import Achievements from "@/components/sections/Achievements";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import EventsNews from "@/components/sections/EventsNews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Dashboard />
        <WaveStats />
        <About />
        <Academics />
        <WhyChooseUs />
        <Facilities />
        <CampusLife />
        <Achievements />
        <Gallery />
        <Testimonials />
        <EventsNews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Widget */}
      <a
        href="https://wa.me/918978783153"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all active:scale-95"
        aria-label="Contact Adarsh Oxford via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping scale-110 pointer-events-none" />
        <svg className="w-7 h-7 fill-white relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.886.002-2.656-1.026-5.153-2.896-7.03C16.572 1.815 14.09.787 11.432.787c-5.446 0-9.872 4.41-9.875 9.89-.001 1.83.498 3.619 1.448 5.176L1.879 22.13l6.452-1.69c-1.616.96-3.12 1.464-4.832 1.454h.026zM17.386 14.39c-.292-.146-1.727-.852-1.993-.95-.266-.098-.46-.146-.653.146-.193.291-.748.95-.918 1.143-.17.193-.34.218-.633.072-1.222-.61-2.4-1.08-3.415-1.96-.865-.75-1.428-1.677-1.597-1.97-.17-.29-.018-.448.128-.592.131-.13.292-.34.437-.51.145-.17.194-.29.292-.485.097-.194.048-.364-.025-.51-.072-.145-.653-1.573-.895-2.155-.236-.572-.497-.495-.653-.503-.153-.008-.34-.01-.52-.01-.18 0-.48.068-.732.34-.252.272-.962.94-.962 2.294 0 1.355.986 2.66 1.122 2.842.137.18 1.94 2.96 4.7 4.148.657.282 1.17.452 1.571.58.66.21 1.262.18 1.737.11.53-.08 1.727-.706 1.972-1.39.244-.684.244-1.27.17-1.39-.074-.12-.266-.194-.558-.34z" />
        </svg>
      </a>
    </div>
  );
}
