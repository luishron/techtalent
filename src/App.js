import { Filters, Footer, Header, Hero } from "./components";
import { JobsProvider } from "./context/JobContext";
import "./styles/index.scss";

function App() {
  return (
    <>
      <JobsProvider>
        <Header />
        <Hero />
        <Filters />
        {/* <JobSearch /> */}
        {/* <JobList /> */}
        <Footer />
      </JobsProvider>
    </>
  );
}

export default App;
