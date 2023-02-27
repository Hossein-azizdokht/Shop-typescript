


import { Hero } from "../components/home/hero";
import CategoryItems from '../components/home/categoryItems';
import LastProducts from "../components/home/lastProducts";
import { Container } from "react-bootstrap";

//--------------------------------
const Home = () => {



  return (
    <section>
      <Container>
        <Hero />
        <CategoryItems />
      </Container>
      
      <LastProducts sectionTitle="Latest Products" />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  )
}

export default Home