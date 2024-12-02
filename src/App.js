import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import DoTest from "./pages/DoTest";
function App() {
  return (
    <div className="">
        <Router>
          <Header/>
          <Routes>
            <Route index path="/" element={<Product/>}></Route>
            <Route index path="/test" element={<DoTest/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
