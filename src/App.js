import React from "react";
import { Filters, Footer, Header, Hero } from "./components";
import { JobsProvider } from "./context/JobContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.scss";

function App() {
  return (
    <>
      <ThemeProvider>
        <JobsProvider>
          <Header />
          <Hero />
          <Filters />

          <Footer />
        </JobsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
