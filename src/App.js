
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
    <main className="min-h-[calc(100vh-0px)]">

    <Outlet/>
    
    </main>
    <Footer/>

    </>
  );
}

export default App;
