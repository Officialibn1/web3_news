import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TrendingNews from "./components/TrendingNews";
import WebNews from "./components/WebNews";

const App = () => {
  return (
    <main className="container">
      <Navbar />
      <WebNews />
      <TrendingNews />
      <Footer />
    </main>
  );
}

export default App;

