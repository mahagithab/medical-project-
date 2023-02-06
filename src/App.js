import Header from "./components/Layouts/Header";
import Persons from "./pages/Persons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recording from "./pages/Recording";
import Registration from "./components/Registration";
import Login from "./components/Login";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>

      </Router>
    </div>
  );
};

export default App;
