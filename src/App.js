//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Aboutus from './components/aboutus/About';
import Bookshelf from './components/bookshelf/Bookshelf';
function App() {
  return (
    <div className="App">
   
      <Header />
      <Aboutus />
      <Bookshelf/>
      <Footer />

    </div>
  );
}

export default App;
