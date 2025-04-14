import ContactSection from "../components/contactSection/ContactSection";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import headerImg from "/public/pictures/trees.jpg";
import PicturesSection from "../components/picturesSection/PicturesSection";
import ImageSection from "../components/imageSection/ImageSection";

const Contact = () => {
  return (
    <section>
      <Navigation />
      <Header headerImg={headerImg} title="Kontakt" />
      <ContactSection />
      <ImageSection />
      <PicturesSection />

      <Footer />
    </section>
  );
};

export default Contact;
