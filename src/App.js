
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Outlet/>
    <Footer/>

    </>
  );
}

export default App;
