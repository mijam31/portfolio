import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import headerImg from "/public/pictures/header2.jpg";
import AboutMe from "../components/aboutMe/AboutMe";
import ImageSection from "../components/imageSection/ImageSection";
import Facts from "../components/facts/Facts";
import Languages from "../components/languages/Languages";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <section>
      <Navigation />
      <Header headerImg={headerImg} title="About Me" />
      <Facts />
      <AboutMe />
      <ImageSection />
      <Languages />
      <Footer />
    </section>
  );
};

export default About;
