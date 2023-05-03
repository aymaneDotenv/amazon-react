import logo from './logo.svg';
import './index.css';
import Banner from "./components/Banner"
import IconBar from "./components/IconBar"
import Main from "./components/Main"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import ProductSection from "./components/ProductSection"
function App() {
  return (
    <div>
      <Banner />
      <IconBar />
      <Main />
      <Menu />
      <Navbar />
      <Products />
      <ProductSection />
    </div>
  );
}

export default App;
