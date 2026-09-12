import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import SocialLinks from "../components/SocialLinks";
import Tabs from "../components/Tabs";


function Home() {
  return (
    <main className="page">
      <Header />
      <Profile />
      <SocialLinks />
      <Tabs />
      <Footer />
    </main>
  );
}

export default Home;