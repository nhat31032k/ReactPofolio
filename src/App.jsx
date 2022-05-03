import { useState } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
// import { Route, Switch, useLocation } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";

//components
import Content from "./components/Content";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MyskillsPage from "./components/MyskillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.path}>
            {/* dùng router để chuyển trang*/}
            {/* exact path="/" component={Content} là xác định đường dẫn đến trang mình muốn tới  */}
            <Route path="/" element={<Content />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Blog" element={<BlogPage />} />
            <Route path="/Work" element={<WorkPage />} />
            <Route path="/Skills" element={<MyskillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
