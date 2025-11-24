import { useState } from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import MenuHeader from "./layouts/MenuHeader";
const App = () => {
  const [name, setName] = useState("React Dev");
  const handelChangname = () => {
    setName("Tuong Dev");
  };

  return (
    <div className="App">
      <Header />
      <MenuHeader />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
