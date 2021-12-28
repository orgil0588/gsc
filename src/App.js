import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Container from "./Utilities/Container";
import Navbar from "./Components/Navbar.js";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="w-full h-full box-border mx-auto bg-dark text-light body">
      <Container>
      
        <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
