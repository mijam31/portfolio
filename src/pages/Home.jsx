import AboutMeSection from "../components/aboutMeSection/AboutMeSection";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImageSection from "../components/imageSection/ImageSection";
import MySkills from "../components/mySkills/MySkills";
import Navigation from "../components/navigation/Navigation";
import OtherProjects from "../components/otherProjects/OtherProjects";
import PicturesSection from "../components/picturesSection/PicturesSection";
import headerImg from "/public/pictures/header1.JPG";

const Home = () => {
  return (
    <section>
      <Navigation />
      <Header headerImg={headerImg} title="Timeless Patterns" />
      <AboutMeSection />
      <ImageSection />
      <OtherProjects />
      <MySkills />
      <PicturesSection />
      <Footer />
    </section>
  );
};

export default Home;
