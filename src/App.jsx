import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Admin from "./assets/pages/Admin/Admin";
import ViewAll from "./assets/pages/ViewAll/ViewAll";
import SinglePage from "./assets/pages/SinglePage/SinglePage";
import Basket from "./assets/pages/Basket/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ViewAll" element={<ViewAll />} />
        <Route path="/SinglePage/:id" element={<SinglePage />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
