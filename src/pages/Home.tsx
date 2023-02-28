


import { Hero } from "../components/home/hero";
import CategoryItems from '../components/home/categoryItems';
import LastProducts from "../components/home/lastProducts";
import { Container } from "react-bootstrap";
import HotNewArrivals from './../components/home/hotNewArrivals';

//--------------------------------
const Home = () => {



  return (
    <section>
      <Container>
        <Hero />
        <CategoryItems />
      </Container>
      
      <LastProducts sectionTitle="Latest Products" />
      <HotNewArrivals sectionTitle="Hot New Arrivals" />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  )
}

export default Home