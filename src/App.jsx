import { useRoutes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/index.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <>
      <div className="app">
        <div>{routes}</div>
      </div>
    </>
  );
}

export default App;
