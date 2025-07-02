import Footer from "./components/core/Footer";
import CallToAction from "./components/home/CallToAction";
import Faqs from "./components/home/Faqs";
import Hero from "./components/home/Hero";
import Introduction from "./components/home/Introduction";

export default function Home() {
  return (
    <div className="px-4">
      <Hero />
      <Introduction />
      <Faqs />
      <CallToAction />
      <Footer/>
    </div>
  );
}
