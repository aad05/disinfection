import FeedbackSection from "./customs/feedback";
import Footer from "./customs/footer";
import LocationsSection from "./customs/location";
import ServicesSection from "./customs/services";
import ShowcaseSection from "./customs/showcas";
import Slider from "./customs/slider";


export default function Home() {
  return (
    <div>
      <Slider />
      <ServicesSection />
      <FeedbackSection />
      <ShowcaseSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}
