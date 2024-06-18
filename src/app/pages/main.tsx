import Navigation from "./Navigation";
import HeroComponent from "./HeroComponent";
import Difference from "./Difference";
import Review from "./Review";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="lg:mx-28 pt-10 text-blue-950 mx-8 ">
      <Navigation />
      <HeroComponent />
      <Difference />
      <Review />
      <Footer />
    </div>
  );
};

export default Main;
