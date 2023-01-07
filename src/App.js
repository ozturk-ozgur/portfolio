import { Route, Routes } from "react-router-dom";
import Layout from "./components/router/Layout";
import { routes } from "./pages/routes";
import "./styles/App.scss";
import infiniteImg from "./assets/infinite-loader.gif";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <img className="infiniteImg" src={infiniteImg} alt="" />
      ) : (
        <Layout>
          <Routes>
            {routes.map((page) => (
              <Route key={page.id} path={page.path} element={page.element} />
            ))}
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
