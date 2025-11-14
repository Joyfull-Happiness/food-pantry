import Home from "../Pages/Home";
import About from "../Pages/About";
import FormPage from "../Pages/FormPage";
import InventoryPage from "../Pages/InventoryPage";
import Contact from "../Pages/Contact";

export function Navbar() {
  return (
    <>
      <div className="foodHeader">
        <nav>
          <ul className="navBar">
            <li>
              <Link to="/">
                <h2 style={{}}>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="/about-page">About Page</Link>
            </li>
            <li>
              <Link to="/form">
                <h2 style={{}}>Sign Up </h2>
              </Link>
            </li>
            <li>
              <Link to="/food-bank-inventory">
                <h2 style={{}}>Login</h2>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <h2 style={{}}>Contact Us</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/food-bank-inventory" element={<InventoryPage />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
