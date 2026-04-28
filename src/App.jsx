import { Route, Routes } from "react-router-dom";
import Seo from "./components/Seo/Seo";
import Layout from "./components/Layout/Layout";
import HtetLinKo from "./pages/HtetLinKo/HtetLinKo";
import { homeSeo, identitySeo } from "./seo/siteSeo";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Seo seo={homeSeo} />
            <Layout />
          </>
        }
      />
      <Route
        path="/htet-lin-ko"
        element={
          <>
            <Seo seo={identitySeo} />
            <HtetLinKo />
          </>
        }
      />
    </Routes>
  );
}

export default App;
