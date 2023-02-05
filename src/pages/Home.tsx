import { Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Hero } from "../components/home/hero";

const Home = () => {
  return (
    <section>
      <Hero/>
    
    </section>
  )
}

export default Home