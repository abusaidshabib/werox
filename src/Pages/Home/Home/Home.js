import React from 'react';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Hero from '../HeroSection/Hero';
import Reviews from '../Reviews/Reviews';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhatWeProvide from '../WhatWeProvide/WhatWeProvide';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhatWeDo></WhatWeDo>
      <WhatWeProvide></WhatWeProvide>
      <Experience></Experience>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;