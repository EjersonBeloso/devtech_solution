import HomeNavbar from "../components/frontendComponent/Navbar";
import AboutUs from "../components/frontendComponent/AboutUs";
import Footer from "../components/frontendComponent/Footer";
import LandingPage from "../components/frontendComponent/LandingPage";
import ContactUs from "../components/frontendComponent/ContactUs";
function Home() {
  return (
    <div>
      <HomeNavbar />
      <LandingPage />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
