import { Header } from "./Components/Header";
//The routes are in the navbar in a component
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";



export default function App() {
  return (
    <>
      < Header navbarSpot={<Navbar/>}/>
      <Footer />
      <Form />
    </>
  );
}
