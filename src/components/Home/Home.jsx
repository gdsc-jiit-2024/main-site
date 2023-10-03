import React from 'react'
import Footer from './childs/Footer'
import Mainpage from './childs/Mainpage'
import { Link,NavLink } from 'react-router-dom'
import Threads from './childs/Threads'
const Home = () => {
  return (
    <div>
      <Mainpage />
      <Threads />
      <Footer />
    </div>
  );
}

export default Home