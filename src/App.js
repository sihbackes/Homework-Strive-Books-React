import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <MyNav />
      <MyFooter />
      <Welcome />
      <LatestRelease />
    </div>
  );
}

export default App;
