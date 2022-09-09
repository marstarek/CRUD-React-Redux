import React, { useEffect } from "react";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {


  return (
<div className="App overflow-hidden ">
      <Navbar/>
      <Home/>
      <Footer/>

</div>
  );
}

export default App;
