import './App.css';
import Banner from './Components/Banner';
import Content from './Components/Content';
import Header from './Components/Header';
import CTA from './Components/CallToAction';
import Footer from './Components/Footer';



function Homepage() {
  let bannerData = {
    title: "Thailand",
    desc: `Thailand is one of the most popular travel destinations in the world - Twenty years ago it was considered 'daring' to travel to Thailand. Times have certainly changed. From the majestic five-star hotels in Bangkok to simple beach huts in Koh Samui or Koh Samet, accommodation choices are many. From the stunning plains and hills of the Golden Triangle to the wave-lapped white sand beaches of Phuket, Samui and Krabi, the kingdom radiates beauty. Thailand has so much to offer that one visit is never enough – you'll want to come back and discover more time after time.`,
  };

  return (
    <>
      <Header/>
      <Banner title = {bannerData.title} text = {bannerData.desc}/>
      <Content/>
      <CTA/>
      <Footer/>
    </>

  );
}

export default Homepage;
