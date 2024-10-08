import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme } from "./utils/Themes";
import NavBar from "./component/NavBar/NavBar";
import Skills from "./component/Skills/Skills";
import Hero from "./component/HeroSection/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./component/ExperienceCom/Experience/Experience";
import Project from "./component/ProjectsCom/Project";
import Education from "./component/Educations/Educations";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
background:linear-gradient(
  38.73deg,
  rgba(204,0,187,0.15) 0%,
  rgba(201,32,184,0) 50%
);
linear-gradient(
  141.27deg,
  rgba(0,70,209,0) 50%,
  rgba(0,70,209,0.15) 100%,
);
width:100%;
clip-path:polygon(0 0,100% 0,100% 100%, 30% 98% ,0 100%);
`;
function App() {
  return (
    <>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Router>
            <NavBar />
            <Body>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Project />
              <Wrapper>
                <Education />
                <Contact/>
              </Wrapper>
              <Footer/>
            </Body>
          </Router>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
