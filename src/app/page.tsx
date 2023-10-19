import Card from "../../components/Card";
import Content from "../../components/Content";
import ContentSecond from "../../components/ContentSecond";
import Footer from "../../components/Footer";
import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="font-GmarketSansMedium">
      <Navbar />
      <Landing />
      <Content />
      <ContentSecond />
      <Footer />
    </div>
  );
}
