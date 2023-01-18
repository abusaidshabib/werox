import React from 'react';
import Experience from '../Experience/Experience';
import Hero from '../HeroSection/Hero';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhatWeProvide from '../WhatWeProvide/WhatWeProvide';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhatWeDo></WhatWeDo>
      <WhatWeProvide></WhatWeProvide>
      <Experience></Experience>
    </div>
  );
};

export default Home;