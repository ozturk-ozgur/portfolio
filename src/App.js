import { Route, Routes } from "react-router-dom";
import Layout from "./components/router/Layout";
import { routes } from "./pages/routes";
import "./styles/App.scss";
// import infiniteImg from "./assets/infinite-loader.gif";
import { useEffect, useState } from "react";
import MenuContext from "./context/MenuContext";
// import { MoonLoader } from "react-spinners";
import { Suspense } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <MenuContext.Provider value={{ isShowMenu, setIsShowMenu ,darkMode,setDarkMode }}>
      <div className={darkMode ? "AppDark" : "container App"}>
        {isLoading ? (
          // <img className="infiniteImg" src={infiniteImg} alt="" /> 
          <p className="loading">..loading</p>
        ) : (
          <Layout>
            <Suspense fallback={<p className="loading">..loading</p>}>
              <Routes>
                {routes.map((page) => (
                  <Route
                    key={page.id}
                    path={page.path}
                    element={page.element}
                  />
                ))}
              </Routes>
            </Suspense>
          </Layout>
        )}
      </div>
    </MenuContext.Provider>
  );
}

export default App;

