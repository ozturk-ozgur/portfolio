import { Route, Routes } from "react-router-dom";
import Layout from "./components/router/Layout";
import { routes } from "./pages/routes";
import "./styles/App.scss";
import { useState } from "react";
import MenuContext from "./context/MenuContext";
import { Suspense } from "react";

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isShowMenu, setIsShowMenu, darkMode, setDarkMode }}
    >
      <div className={darkMode ? "AppDark" : "container App"}>
        <Layout>
          <Suspense fallback={<p className="loading">..loading</p>}>
            <Routes>
              {routes.map((page) => (
                <Route key={page.id} path={page.path} element={page.element} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
