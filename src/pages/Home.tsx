

import React, { useEffect, useState } from 'react'
import { Hero } from "../components/home/hero";
import CategoryItems from '../components/home/productsCategories';

//--------------------------------
const Home = () => {



  return (
    <section>
      <Hero />
      <CategoryItems/>
    </section>
  )
}

export default Home