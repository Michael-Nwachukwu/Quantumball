import Header from "./components/Header";
import  Navbar  from "./components/Navbar";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Products from "./components/products";
import Quantum from "./components/quantum";
import Footer from "./components/Footer";
import { motion, Variants } from "framer-motion";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Customers />
      <Services />
      <Products />
      <Quantum />
      <Footer />
    </div>

  );
}

export default App;
